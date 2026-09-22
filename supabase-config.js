// Supabase設定：Supabase DashboardのProject URLとPublishable key（旧anon key）を入力してください。
// service_role key / secret keyは絶対に入力しないでください。
const SUPABASE_URL = 'https://bfjwtyjwqmeixlkqlerj.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_XTZrY_yn4AKTBM6mULkTTA_uIe0mg';

console.log('supabase-config.js 読み込み開始');
console.log('window.supabase:', window.supabase);

if (
  window.supabase &&
  SUPABASE_URL.startsWith('https://') &&
  SUPABASE_PUBLISHABLE_KEY &&
  !SUPABASE_PUBLISHABLE_KEY.startsWith('YOUR_')
) {
  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

  console.log('Supabase初期化成功');
} else {
  window.supabaseClient = null;
  console.error('Supabase初期化失敗');
}
