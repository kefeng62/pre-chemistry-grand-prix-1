if (upsertError) {
  console.error('Supabase error:', upsertError);

  $('statisticsMessage').textContent =
    `エラーコード: ${upsertError.code || 'なし'} / ${upsertError.message}`;

  return;
}
