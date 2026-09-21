// Supabase設定
const SUPABASE_URL =
  'https://bfjwtyjwqmeixlkqler.supabase.co';

const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_XTZrY_yn4AKTBM6mULkTTA_uIe0mg8';

if (
  window.supabase &&
  SUPABASE_URL.startsWith('http') &&
  !SUPABASE_PUBLISHABLE_KEY.startsWith('YOUR_')
) {
  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
} else {
  window.supabaseClient = null;
}

console.log('Supabase library:', !!window.supabase);
console.log('Supabase client:', !!window.supabaseClient);
