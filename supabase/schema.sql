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
