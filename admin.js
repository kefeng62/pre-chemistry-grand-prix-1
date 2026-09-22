'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const supabase = window.supabaseClient;

  if (!supabase) {
    showError('Supabaseの読み込みに失敗しました。supabase-config.jsを確認してください。');
    return;
  }

  const loginForm = document.getElementById('loginForm');
  const loginPanel = document.getElementById('loginPanel');
  const adminPanel = document.getElementById('adminPanel');
  const loginMessage = document.getElementById('loginMessage');
  const logoutBtn = document.getElementById('logoutBtn');
  const reloadBtn = document.getElementById('reloadBtn');

  function message(text, isError = false) {
    if (!loginMessage) {
      alert(text);
      return;
    }

    loginMessage.textContent = text;
    loginMessage.style.display = 'block';
    loginMessage.style.color = isError ? '#c00' : '';
  }

  function showError(text) {
    console.error(text);
    message(text, true);
  }

  function setLoggedIn(loggedIn) {
    if (loginPanel) {
      loginPanel.style.display = loggedIn ? 'none' : '';
    }

    if (adminPanel) {
      adminPanel.style.display = loggedIn ? '' : 'none';
    }
  }

  async function checkSession() {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      showError(error.message);
      return;
    }

    if (data.session) {
      setLoggedIn(true);
      await loadSubmissions();
    } else {
      setLoggedIn(false);
    }
  }

  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const emailElement = document.getElementById('email');
      const passwordElement = document.getElementById('password');

      const email = emailElement ? emailElement.value.trim() : '';
      const password = passwordElement ? passwordElement.value : '';

      if (!email || !password) {
        showError('メールアドレスとパスワードを入力してください。');
        return;
      }

      message('ログインしています…');

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });

      if (error) {
        console.error('Supabase login error:', error);
        showError('ログインできませんでした：' + error.message);
        return;
      }

      if (!data.session) {
        showError('ログインセッションを取得できませんでした。');
        return;
      }

      message('');
      setLoggedIn(true);
      await loadSubmissions();
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      const { error } = await supabase.auth.signOut();

      if (error) {
        showError(error.message);
        return;
      }

      setLoggedIn(false);
      message('');
    });
  }

  if (reloadBtn) {
    reloadBtn.addEventListener('click', loadSubmissions);
  }

  async function loadSubmissions() {
    const container =
      document.getElementById('submissions') ||
      document.getElementById('results') ||
      document.getElementById('submissionList');

    if (container) {
      container.innerHTML = '<p>答案を読み込んでいます…</p>';
    }

    /*
     * Supabase SQL側で作成した管理者専用RPCを使用します。
     * 一般の受験者にはこの関数を実行できない設定にします。
     */
    const { data, error } = await supabase.rpc(
      'admin_list_submissions'
    );

    if (error) {
      console.error('RPC error:', error);

      if (container) {
        container.innerHTML =
          '<p style="color:#c00;">答案の取得に失敗しました。<br>' +
          escapeHtml(error.message) +
          '</p>';
      }

      return;
    }

    renderSubmissions(data || []);
  }

  function renderSubmissions(rows) {
    const container =
      document.getElementById('submissions') ||
      document.getElementById('results') ||
      document.getElementById('submissionList');

    if (!container) {
      console.log('Submissions:', rows);
      return;
    }

    if (!rows.length) {
      container.innerHTML = '<p>まだ受験者の答案はありません。</p>';
      return;
    }

    let html = `
      <table>
        <thead>
          <tr>
            <th>提出日時</th>
            <th>受験者ID</th>
            <th>得点</th>
            <th>判定</th>
            <th>詳細</th>
          </tr>
        </thead>
        <tbody>
    `;

    rows.forEach((row, index) => {
      const date = row.submitted_at
        ? new Date(row.submitted_at).toLocaleString('ja-JP')
        : '';

      const total =
        row.total_score !== null && row.total_score !== undefined
          ? row.total_score
          : '';

      const grade = row.grade || '';

      html += `
        <tr>
          <td>${escapeHtml(date)}</td>
          <td>${escapeHtml(row.visitor_id || '')}</td>
          <td>${escapeHtml(String(total))}</td>
          <td>${escapeHtml(grade)}</td>
          <td>
            <button type="button" data-detail-index="${index}">
              詳細
            </button>
          </td>
        </tr>
      `;
    });

    html += `
        </tbody>
      </table>
      <div id="submissionDetail"></div>
    `;

    container.innerHTML = html;

    container
      .querySelectorAll('[data-detail-index]')
      .forEach((button) => {
        button.addEventListener('click', () => {
          const index = Number(button.dataset.detailIndex);
          showDetail(rows[index]);
        });
      });
  }

  function showDetail(row) {
    const detail =
      document.getElementById('submissionDetail');

    if (!detail) {
      console.log('Submission detail:', row);
      return;
    }

    let html = `
      <hr>
      <h3>答案詳細</h3>
      <p>
        <strong>受験者ID：</strong>
        ${escapeHtml(row.visitor_id || '')}
      </p>
      <p>
        <strong>提出日時：</strong>
        ${escapeHtml(
          row.submitted_at
            ? new Date(row.submitted_at).toLocaleString('ja-JP')
            : ''
        )}
      </p>
      <p>
        <strong>総得点：</strong>
        ${escapeHtml(String(row.total_score ?? ''))}
      </p>
    `;

    const answerFields = [
      ['第1問', 'exam1_answers'],
      ['第2問', 'exam2_answers'],
      ['第3問', 'exam3_answers'],
      ['第4問', 'exam4_answers']
    ];

    answerFields.forEach(([title, field]) => {
      html += `<h4>${title}</h4>`;

      const answers = row[field];

      if (!answers || typeof answers !== 'object') {
        html += '<p>答案データなし</p>';
        return;
      }

      html += '<table><tbody>';

      Object.entries(answers).forEach(([question, answer]) => {
        html += `
          <tr>
            <td>${escapeHtml(question)}</td>
            <td>${escapeHtml(String(answer ?? ''))}</td>
          </tr>
        `;
      });

      html += '</tbody></table>';
    });

    detail.innerHTML = html;
    detail.scrollIntoView({ behavior: 'smooth' });
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  /*
   * ログイン状態が変化した場合
   */
  supabase.auth.onAuthStateChange((_event, session) => {
    setLoggedIn(!!session);
  });

  checkSession();
});
