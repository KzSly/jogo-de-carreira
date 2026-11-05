-- Rode isto no Supabase: Project > SQL Editor > New query > Run.
-- Cria a tabela de carreiras salvas e trava o acesso: cada usuário só
-- enxerga e mexe nas próprias linhas (Row Level Security).

create table if not exists public.careers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  mode text not null check (mode in ('player','manager')),
  name text not null,
  data jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists careers_user_id_idx on public.careers(user_id);

alter table public.careers enable row level security;

drop policy if exists "Users can view own careers" on public.careers;
create policy "Users can view own careers"
  on public.careers for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert own careers" on public.careers;
create policy "Users can insert own careers"
  on public.careers for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update own careers" on public.careers;
create policy "Users can update own careers"
  on public.careers for update
  using (auth.uid() = user_id);

drop policy if exists "Users can delete own careers" on public.careers;
create policy "Users can delete own careers"
  on public.careers for delete
  using (auth.uid() = user_id);

-- Mantém updated_at em dia a cada alteração.
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists careers_set_updated_at on public.careers;
create trigger careers_set_updated_at
  before update on public.careers
  for each row execute function public.set_updated_at();

-- ===== Avaliações públicas (aparecem no menu inicial) =====
-- Só avaliações com 3+ estrelas ficam visíveis: as ruins são ocultadas automaticamente.
create table if not exists public.reviews (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 30),
  rating smallint not null check (rating between 1 and 5),
  message text not null default '' check (char_length(message) <= 200),
  mode text not null default 'jogador'
);

alter table public.reviews enable row level security;

drop policy if exists "Anyone can read good reviews" on public.reviews;
create policy "Anyone can read good reviews"
  on public.reviews for select
  using (rating >= 3);

drop policy if exists "Anyone can send a review" on public.reviews;
create policy "Anyone can send a review"
  on public.reviews for insert
  with check (rating >= 3 and char_length(message) <= 200);
