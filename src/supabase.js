import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// When the keys aren't configured (local dev without a .env.local, or a
// build that forgot the secrets), every auth/db screen shows a clear
// message instead of a blank crash.
export const hasAuth = !!(url && anonKey);

export const supabase = hasAuth
  ? createClient(url, anonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    })
  : null;
