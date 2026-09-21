// Supabase設定：Supabase DashboardのProject URLとPublishable key（旧anon key）を入力してください。
// service_role key / secret keyは絶対に入力しないでください。
const SUPABASE_URL = 'https://bfjwtyjwqmeixlkqlerj.supabase.co/rest/v1/';
const SUPABASE_PUBLISHABLE_KEY = 'https://bfjwtyjwqmeixlkqlerj.supabase.co/rest/v1/';
if (window.supabase && SUPABASE_URL.startsWith('http') && !SUPABASE_PUBLISHABLE_KEY.startsWith('YOUR_')) {
  window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
} else {
  window.supabaseClient = null;
}
