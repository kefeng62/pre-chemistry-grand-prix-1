console.log('Supabase client:', window.supabaseClient);
// Supabase設定：Supabase DashboardのProject URLとPublishable key（旧anon key）を入力してください。
// service_role key / secret keyは絶対に入力しないでください。
const SUPABASE_URL = 'https://bfjwtyjwqmeixlkqlerj.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_XTZrY_yn4AKTBM6mULkTTA_uIe0mg8';
if (window.supabase && SUPABASE_URL.startsWith('http') && !SUPABASE_PUBLISHABLE_KEY.startsWith('YOUR_')) {
  window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
} else {
  window.supabaseClient = null;
}
