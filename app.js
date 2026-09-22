const exams = {
  1: {
    name: '問題1（基礎化学）',
    answers: [2,2,1,3,4,0,5,4,5,3,0,8,4,1,1,0,0,9,9,5,1,0,0,3,7,1,1,2,2,3,1,1,1,1,0,4,3,2,4,9,3],
    labels: [
      ['ア',[1]],['イ',[2,3,4,5]],['ウ',[6,7,8]],['エ',[9,10]],['オ',[11]],
      ['カ',[12,13]],['キ',[14,15,16]],['ク',[17,18,19]],['ケ',[20]],['コ',[21,22,23]],
      ['サ',[24,25]],['シ',[26,27,28,29]],['ス',[30]],['セ',[31,32,33,34,35]],['ソ',[36,37]],
      ['タ',[38]],['チ',[39,40,41]]
    ],
    groups: [
      {q:[1],p:3},
      {q:[2,3,4,5],p:4},
      {q:[6,7,8],p:4},
      {q:[9,10],p:4},
      {q:[11],p:3},
      {q:[12],p:4},
      {q:[13],p:2},
      {q:[14,15,16],p:4},
      {q:[17,18,19],p:6},
      {q:[20],p:3},
      {q:[21],p:2},
      {q:[22],p:2},
      {q:[23],p:2},
      {q:[24,25],p:4},
      {q:[26,27,28,29],p:5},
      {q:[30],p:4},
      {q:[31],p:1},
      {q:[32],p:1},
      {q:[33],p:1},
      {q:[34],p:1},
      {q:[35],p:1},
      {q:[36,37],p:4},
      {q:[38],p:3},
      {q:[39,40,41],p:7}
    ],
    accepted: {
      17: [0,1],
      18: [9,0],
      19: [9,0]
    }
  },

  2: {
    name: '問題2（無機化学）',
    answers: [2,4,3,7,3,7,5,9,1,2,6,2,6,1,6,5,1,1,5,5,7,3,3,1,1,2,2,4,8,4,3,1,2,1,6,1,3,8,5,1,1,2],
    labels: [
      ['ア',[1,2,3,4]],
      ['イ',[5]],
      ['ウ',[6]],
      ['エ',[7,8,9]],
      ['オ',[10]],
      ['カ',[11,12,13]],
      ['キ',[14,15,16]],
      ['ク',[17]],
      ['ケ',[18,19,20,21,22]],
      ['コ',[23,24,25,26,27]],
      ['サ',[28,29,30,31,32,33,34]],
      ['シ',[35]],
      ['ス',[36]],
      ['セ',[37,38,39,40,41,42]]
    ],
    groups: [
      {q:[1,2,3,4],p:4},
      {q:[5],p:3},
      {q:[6],p:3},
      {q:[7,8,9],p:3},
      {q:[10],p:3},
      {q:[11,12,13],p:5},
      {q:[14,15,16],p:6},
      {q:[17],p:3},
      {q:[18,19,20,21,22],p:10},
      {q:[23,24,25],p:3},
      {q:[26,27],p:3},
      {q:[28,29],p:5},
      {q:[30,31],p:2},
      {q:[32,33,34],p:3},
      {q:[35],p:4},
      {q:[36],p:4},
      {q:[37,38,39],p:4},
      {q:[40,41,42],p:7}
    ],
    accepted: {
      42: [2,3]
    }
  },

  3: {
    name: '問題3（有機化学）',
    answers: [5,3,4,4,6,4,2,1,1,3,1,1,3,3,2,3,6,5,3,2,2,3,8,1,0,4,5,1,3],
    labels: [
      ['ア',[1,2,3]],
      ['イ',[4,5]],
      ['ウ',[6]],
      ['エ',[7]],
      ['オ',[8]],
      ['カ',[9]],
      ['キ',[10,11,12,13]],
      ['ク',[14,15]],
      ['ケ',[16]],
      ['コ',[17]],
      ['サ',[18]],
      ['シ',[19,20]],
      ['ス',[21,22,23,24,25]],
      ['セ',[26]],
      ['ソ',[27]],
      ['タ',[28,29]]
    ],
    groups: [
      {q:[1,2,3],p:3},
      {q:[4],p:2},
      {q:[5],p:2},
      {q:[6],p:3},
      {q:[7],p:3},
      {q:[8],p:3},
      {q:[9],p:3},
      {q:[10],p:3},
      {q:[11],p:3},
      {q:[12],p:3},
      {q:[13],p:3},
      {q:[14],p:1},
      {q:[15],p:1},
      {q:[16],p:3},
      {q:[17],p:4},
      {q:[18],p:4},
      {q:[19],p:3},
      {q:[20],p:3},
      {q:[21],p:2},
      {q:[22],p:2},
      {q:[23],p:2},
      {q:[24],p:2},
      {q:[25],p:5},
      {q:[26],p:3},
      {q:[27],p:3},
      {q:[28],p:3},
      {q:[29],p:3}
    ]
  },

  4: {
    name: '問題4（物理化学）',
    answers: [3,2,1,1,5,8,3,1,3,5,1,5,9,3,1,8,8,7,7,5,5,6,8,1,0,1,3,2,1,2,3,1,2,9,8,1,5,5,5],
    labels: [
      ['ア',[1]],
      ['イ',[2,3,4,5,6]],
      ['ウ',[7]],
      ['エ',[8,9,10]],
      ['オ',[11,12,13]],
      ['カ',[14,15,16,17,18,19,20,21,22,23,24,25,26,27]],
      ['キ',[28,29,30,31,32]],
      ['ク',[33,34,35,36,37]],
      ['ケ',[38]]
    ],
    groups: [
      {q:[1],p:3},
      {q:[2],p:2},
      {q:[3],p:2},
      {q:[4,5,6],p:5},
      {q:[7],p:3},
      {q:[8,9,10],p:6},
      {q:[11,12,13],p:3},
      {q:[14,15,16],p:3},
      {q:[17,18],p:5},
      {q:[19,20],p:4},
      {q:[21,22,23],p:6},
      {q:[24,25,26,27],p:7},
      {q:[28],p:2},
      {q:[29],p:2},
      {q:[30],p:2},
      {q:[31],p:2},
      {q:[32],p:2},
      {q:[33],p:2},
      {q:[34,35],p:3},
      {q:[36,37],p:8},
      {q:[38],p:3}
    ],
    accepted: {
      22: [6,7],
      37: [5,6]
    }
  }
};


/* =========================================================
   基本設定
========================================================= */

const STORAGE_KEY =
  'chemistry_grandprix_mock_v2';

const VISITOR_KEY =
  'chemistry_grandprix_visitor_id_v1';

let currentExam = 1;


/* =========================================================
   localStorage
========================================================= */

function loadState(){

  try{

    const raw =
      localStorage.getItem(STORAGE_KEY);

    return raw
      ? JSON.parse(raw)
      : {
          submitted:false,
          answers:{}
        };

  }catch(e){

    return {
      submitted:false,
      answers:{}
    };

  }

}


function saveState(){

  try{

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );

  }catch(e){

    console.error(
      'localStorage save error:',
      e
    );

  }

}


let state = loadState();


const $ =
  id => document.getElementById(id);


/* =========================================================
   問題番号
========================================================= */

function qId(exam,q){

  return `e${exam}q${q}`;

}


/* =========================================================
   正解
========================================================= */

function acceptedAnswers(examId,q){

  const exam =
    exams[examId];

  return (
    exam.accepted?.[q]
    ??
    [exam.answers[q-1]]
  );

}


function isCorrect(examId,q){

  const value =
    String(
      state.answers[
        qId(examId,q)
      ] ?? ''
    );

  return (
    value !== '' &&
    acceptedAnswers(examId,q)
      .some(
        answer =>
          String(answer) === value
      )
  );

}


/* =========================================================
   タブ表示
========================================================= */

function renderTabs(){

  $('examTabs').innerHTML =
    Object.entries(exams)
      .map(([id,e]) => `
        <button
          class="tab ${Number(id)===currentExam?'active':''}"
          data-exam="${id}">
          ${e.name}
        </button>
      `)
      .join('');


  document
    .querySelectorAll('.tab')
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          currentExam =
            Number(
              button.dataset.exam
            );

          renderQuestions();

        }
      );

    });

}


/* =========================================================
   問題表示
========================================================= */

function renderQuestions(){

  renderTabs();


  const exam =
    exams[currentExam];


  let html = '';


  exam.labels.forEach(
    ([label,questions]) => {

      const rows =
        questions
          .map(q => {

            const id =
              qId(currentExam,q);

            const saved =
              state.answers[id] ?? '';


            const options =
              [
                '',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '0'
              ]
              .map(
                value => `
                  <option
                    value="${value}"
                    ${String(saved)===value?'selected':''}>
                    ${value || '— 未入力 —'}
                  </option>
                `
              )
              .join('');


            let status = '';


            if(state.submitted){

              if(
                isCorrect(
                  currentExam,
                  q
                )
              ){

                status =
                  '<span class="answer-status correct">○ 正解</span>';

              }else if(
                saved === ''
              ){

                status =
                  '<span class="answer-status unanswered">— 未入力</span>';

              }else{

                status =
                  '<span class="answer-status incorrect">× 不正解</span>';

              }

            }else{

              status =
                '<span class="answer-status"></span>';

            }


            return `
              <div class="qrow">

                <label for="${id}">
                  Q${q}
                </label>

                <div class="answer-control">

                  <select
                    class="mark-select"
                    id="${id}"
                    data-q="${q}">

                    ${options}

                  </select>

                  ${status}

                </div>

              </div>
            `;

          })
          .join('');


      html += `
        <div class="question-group">

          <div class="group-title">

            <h3>
              問 ${label}

              <span class="small">
                ${questions
                  .map(q => 'Q'+q)
                  .join('・')}
              </span>

            </h3>

          </div>

          <div class="qgrid">
            ${rows}
          </div>

        </div>
      `;

    }
  );


  $('questions').innerHTML =
    html;


  document
    .querySelectorAll(
      '#questions select'
    )
    .forEach(select => {

      select.addEventListener(
        'change',
        () => {

          state.answers[
            select.id
          ] =
            select.value;


          saveState();


          if(state.submitted){

            const row =
              select.closest('.qrow');

            const status =
              row.querySelector(
                '.answer-status'
              );

            const q =
              Number(
                select.dataset.q
              );


            if(select.value === ''){

              status.className =
                'answer-status unanswered';

              status.textContent =
                '— 未入力';

            }else if(
              isCorrect(
                currentExam,
                q
              )
            ){

              status.className =
                'answer-status correct';

              status.textContent =
                '○ 正解';

            }else{

              status.className =
                'answer-status incorrect';

              status.textContent =
                '× 不正解';

            }

          }

        }
      );

    });

}


/* =========================================================
   採点
========================================================= */

function calcExam(id){

  const exam =
    exams[id];


  let score = 0;


  exam.groups.forEach(
    group => {

      if(
        group.q.every(
          q =>
            isCorrect(id,q)
        )
      ){

        score += group.p;

      }

    }
  );


  return Math.min(
    score,
    75
  );

}


function total(){

  return [1,2,3,4]
    .reduce(
      (sum,id) =>
        sum + calcExam(id),
      0
    );

}


/* =========================================================
   判定
========================================================= */

function getJudgment(score){

  if(score >= 250)
    return [
      'A',
      '大賞も狙える実力です！'
    ];

  if(score >= 220)
    return [
      'B',
      '合格者平均超えも狙えます！'
    ];

  if(score >= 180)
    return [
      'C',
      '本戦出場も夢じゃない！'
    ];

  if(score >= 150)
    return [
      'D',
      'これからの対策次第で本戦出場の可能性あり！'
    ];

  return [
    'E',
    '形式に慣れ、とるべき問題を見分けよう！'
  ];

}


/* =========================================================
   Xシェア
========================================================= */

function updateXShare(){

  const scores =
    [1,2,3,4]
      .map(id => calcExam(id));


  const totalScore =
    scores.reduce(
      (sum,score) =>
        sum + score,
      0
    );


  const siteUrl =
    window.location.href
      .split('#')[0];


  const shareText =
    `あなたの第一回化学グランプリ模試の結果は${scores[0]}・${scores[1]}・${scores[2]}・${scores[3]}で${totalScore}点でした！\n${siteUrl}`;


  $('xShare').href =
    'https://twitter.com/intent/tweet?text=' +
    encodeURIComponent(
      shareText
    );

}


/* =========================================================
   Supabase
========================================================= */

const SUPABASE_ENABLED =
  typeof window.supabaseClient !== 'undefined' &&
  window.supabaseClient;


/* =========================================================
   匿名ユーザーID
========================================================= */

function getVisitorId(){

  try{

    let id =
      localStorage.getItem(
        VISITOR_KEY
      );


    if(!id){

      if(
        typeof crypto !== 'undefined' &&
        typeof crypto.randomUUID === 'function'
      ){

        id =
          crypto.randomUUID();

      }else{

        id =
          'v-' +
          Date.now() +
          '-' +
          Math.random()
            .toString(36)
            .slice(2);

      }


      localStorage.setItem(
        VISITOR_KEY,
        id
      );

    }


    return id;

  }catch(e){

    return (
      'v-' +
      Date.now() +
      '-' +
      Math.random()
        .toString(36)
        .slice(2)
    );

  }

}


/* =========================================================
   統計用判定
========================================================= */

function statsGrade(score){

  return getJudgment(score)[0];

}


function statNumber(value){

  return Number.isFinite(
    Number(value)
  )
    ? Number(value)
        .toFixed(1)
        .replace(/\.0$/,'')
    : '—';

}


/* =========================================================
   統計表示
========================================================= */

function renderStatistics(stats){

  if(!stats){

    $('statisticsMessage').textContent =
      '統計を読み込めませんでした。';

    return;

  }


  const examStats =
    [1,2,3,4]
      .map(id => ({

        name:
          exams[id].name,

        count:
          Number(
            stats[
              'exam' + id + '_count'
            ] ?? 0
          ),

        max:
          stats[
            'exam' + id + '_max'
          ] == null
            ? null
            : Number(
                stats[
                  'exam' + id + '_max'
                ]
              ),

        avg:
          stats[
            'exam' + id + '_avg'
          ] == null
            ? null
            : Number(
                stats[
                  'exam' + id + '_avg'
                ]
              )

      }));


  const totalCount =
    Number(
      stats.total_count ?? 0
    );


  const totalMax =
    stats.total_max == null
      ? null
      : Number(
          stats.total_max
        );


  const totalAvg =
    stats.total_avg == null
      ? null
      : Number(
          stats.total_avg
        );


  const grades =
    stats.grades || {};


  const summary = `

    <div class="stats-summary">

      <div>
        <strong>
          総合登録者数
        </strong>

        <span>
          ${totalCount}人
        </span>
      </div>


      <div>
        <strong>
          総合最高点
        </strong>

        <span>
          ${
            totalMax === null
              ? '—'
              : totalMax + '点'
          }
        </span>
      </div>


      <div>
        <strong>
          総合平均点
        </strong>

        <span>
          ${
            totalAvg === null
              ? '—'
              : statNumber(totalAvg) + '点'
          }
        </span>
      </div>

    </div>

  `;


  const table = `

    <div class="stats-table-wrap">

      <table class="stats-table">

        <thead>

          <tr>

            <th>
              対象
            </th>

            <th>
              登録者数
            </th>

            <th>
              最高点
            </th>

            <th>
              平均点
            </th>

          </tr>

        </thead>


        <tbody>

          ${
            examStats
              .map(exam => `

                <tr>

                  <td>
                    ${exam.name}
                  </td>

                  <td>
                    ${exam.count}人
                  </td>

                  <td>
                    ${
                      exam.max === null
                        ? '—'
                        : exam.max + '点'
                    }
                  </td>

                  <td>
                    ${
                      exam.avg === null
                        ? '—'
                        : statNumber(exam.avg) + '点'
                    }
                  </td>

                </tr>

              `)
              .join('')
          }


          <tr>

            <td>
              <strong>
                総合得点
              </strong>
            </td>

            <td>
              ${totalCount}人
            </td>

            <td>
              ${
                totalMax === null
                  ? '—'
                  : totalMax + '点'
              }
            </td>

            <td>
              ${
                totalAvg === null
                  ? '—'
                  : statNumber(totalAvg) + '点'
              }
            </td>

          </tr>

        </tbody>

      </table>

    </div>


    <h4>
      判定別人数
    </h4>


    <div class="grade-stats">

      ${
        ['A','B','C','D','E']
          .map(grade => `

            <span>

              <strong>
                ${grade}
              </strong>

              ${Number(
                grades[grade] || 0
              )}人

            </span>

          `)
          .join('')
      }

    </div>

  `;


  $('statisticsContent').innerHTML =
    summary + table;


  $('statisticsMessage').textContent =
    '匿名で登録された自己採点結果を集計しています。';

}


/* =========================================================
   統計保存・読み込み
========================================================= */

async function saveAndLoadStatistics(){

  /*
    Supabaseが利用できない場合でも
    自己採点には影響させない。
  */

  if(!SUPABASE_ENABLED){

    $('statisticsMessage').textContent =
      '統計機能は現在利用できません。';

    return;

  }


  try{

    /*
      まずローカルで得点を計算
    */

    const scores =
      [1,2,3,4]
        .map(id => calcExam(id));


    const totalScore =
      scores.reduce(
        (a,b) => a + b,
        0
      );


    /*
      Supabaseのsubmit_exam RPCへ渡すデータ
    */

    const rpcParams = {

      p_visitor_id:
        getVisitorId(),

      p_answers:
        state.answers,

      p_exam1:
        scores[0],

      p_exam2:
        scores[1],

      p_exam3:
        scores[2],

      p_exam4:
        scores[3],

      p_total_score:
        totalScore,

      p_judgment:
        statsGrade(totalScore)

    };


    console.log(
      'Submitting statistics:',
      {
        exam1:scores[0],
        exam2:scores[1],
        exam3:scores[2],
        exam4:scores[3],
        total:totalScore
      }
    );


    /*
      重要：
      exam_submissionsへ直接upsertせず、
      Supabase側のsubmit_exam RPCを使用する。
    */

    const {
      error: submitError
    } =
      await window.supabaseClient.rpc(
        'submit_exam',
        rpcParams
      );


    if(submitError){

      console.error(
        'submit_exam error:',
        submitError
      );


      $('statisticsMessage').textContent =
        '自己採点は完了しましたが、統計への登録に失敗しました。';

      return;

    }


    /*
      登録成功後に公開統計を取得
    */

    const {
      data,
      error: statisticsError
    } =
      await window.supabaseClient.rpc(
        'get_exam_statistics'
      );


    if(statisticsError){

      console.error(
        'get_exam_statistics error:',
        statisticsError
      );


      $('statisticsMessage').textContent =
        '自己採点は統計に登録されましたが、統計の表示に失敗しました。';

      return;

    }


    console.log(
      'Statistics:',
      data
    );


    renderStatistics(data);

  }catch(error){

    /*
      Supabaseでどんなエラーが起きても
      自己採点結果はすでに表示済みなので
      その処理を止めない。
    */

    console.error(
      'Statistics unexpected error:',
      error
    );


    $('statisticsMessage').textContent =
      '自己採点は正常に完了しました。統計の読み込みのみ失敗しました。';

  }

}


/* =========================================================
   結果表示
========================================================= */

function showResult(){

  /*
    ================================================
    ① ローカルで採点
    ================================================
  */

  const score =
    total();


  const [
    grade,
    message
  ] =
    getJudgment(score);


  /*
    ================================================
    ② 自己採点結果を表示
    ================================================
  */

  $('saveMessage').textContent =
    '自己採点を完了しました。解答・解説のロックが解除されています。';


  $('result')
    .classList
    .remove('hidden');


  $('totalScore').textContent =
    score;


  $('miniTotal').textContent =
    score;


  $('scoreRate').textContent =
    (score / 3)
      .toFixed(1) +
    '%';


  $('judgmentGrade').textContent =
    grade;


  $('judgmentMessage').textContent =
    message;


  $('breakdown').innerHTML =
    [1,2,3,4]
      .map(id => `

        <div class="breakdown-item">

          <strong>
            ${calcExam(id)} / 75
          </strong>

          <span>
            ${exams[id].name}
          </span>

        </div>

      `)
      .join('');


  updateXShare();


  /*
    ================================================
    ③ 解答・解説のロック解除
    ================================================
  */

  $('answerLink')
    .classList
    .remove('locked');


  $('answerLink').textContent =
    '🔓 解答・解説を見る';


  $('answerLink').href =
    'pdfs/answer.pdf';


  $('unlockBadge')
    .classList
    .remove('hidden');


  /*
    ================================================
    ④ localStorage保存
    ================================================
  */

  state.submitted =
    true;


  saveState();


  /*
    ================================================
    ⑤ 正誤表示更新
    ================================================
  */

  renderQuestions();


  /*
    ================================================
    ⑥ ここから統計
    ================================================

    自己採点はここまでで完全に終了。

    Supabase側でエラーが発生しても
    上記の自己採点結果には影響しない。
  */

  saveAndLoadStatistics()
    .catch(error => {

      console.error(
        'Unexpected statistics error:',
        error
      );

    });


  /*
    ================================================
    ⑦ 結果へスクロール
    ================================================
  */

  $('result').scrollIntoView({
    behavior:'smooth',
    block:'start'
  });

}


/* =========================================================
   大問を満点にする
========================================================= */

function fillFullScore(){

  const exam =
    exams[currentExam];


  exam.answers.forEach(
    (answer,index) => {

      const q =
        index + 1;


      const accepted =
        acceptedAnswers(
          currentExam,
          q
        );


      state.answers[
        qId(
          currentExam,
          q
        )
      ] =
        String(
          accepted[0]
        );

    }
  );


  saveState();

  renderQuestions();

}


/* =========================================================
   自己採点リセット
========================================================= */

function resetScoring(){

  const examName =
    exams[currentExam].name;


  const confirmed =
    confirm(
      `${examName}の自己採点をリセットしますか？\n\n` +
      `${examName}の解答だけが削除されます。`
    );


  if(!confirmed)
    return;


  /*
    現在の大問だけ削除
  */

  exams[currentExam]
    .answers
    .forEach(
      (answer,index) => {

        const q =
          index + 1;


        delete state.answers[
          qId(
            currentExam,
            q
          )
        ];

      }
    );


  /*
    登録状態解除
  */

  state.submitted =
    false;


  saveState();


  /*
    結果表示を隠す
  */

  $('result')
    .classList
    .add('hidden');


  $('miniTotal').textContent =
    '—';


  $('saveMessage').textContent =
    '';


  /*
    解答・解説をロック
  */

  $('answerLink')
    .classList
    .add('locked');


  $('answerLink').textContent =
    '🔒 解答・解説';


  $('answerLink').href =
    '#score';


  $('unlockBadge')
    .classList
    .add('hidden');


  /*
    問題表示更新
  */

  renderQuestions();


  window.scrollTo({

    top:
      $('score').offsetTop - 20,

    behavior:
      'smooth'

  });

}


/* =========================================================
   初期化
========================================================= */

$('fullScoreBtn')
  .addEventListener(
    'click',
    fillFullScore
  );


$('resetBtn')
  .addEventListener(
    'click',
    resetScoring
  );


$('submitBtn')
  .addEventListener(
    'click',
    showResult
  );


renderQuestions();


/*
  以前に自己採点済みなら
  結果を復元
*/

if(state.submitted){

  showResult();

}
