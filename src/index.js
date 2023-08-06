import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除する
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 完了リストから指定の要素を削除する
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // liタグ生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  // button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    const deleteTarget = completeButton.parentNode;
    deleteFromIncompleteList(deleteTarget.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容を取得
    const text = addTarget.firstElementChild.innerText;

    // liタグ生成
    const li = document.createElement("li");

    // div以下を初期化
    addTarget.textContent = null;

    // pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    // butttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(li)を未完了リストから削除
      const deleteTarget = backButton.parentNode;
      deleteFromCompleteList(deleteTarget.parentNode);

      // 完了リストに追加する要素
      const addTarget = backButton.parentNode;

      // TODO内容を取得
      const text = addTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // div要素に子要素を追加する
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    li.appendChild(addTarget);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  // button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
