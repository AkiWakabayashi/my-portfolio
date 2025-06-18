function showContent(section) {
  const content = document.getElementById("content");

  const sections = {
    home: {
      title: "Home",
      text: "「万事塞翁が馬」「自分の力で未来は変えられる」<br>
        「人と会話することは大切である」をモットーに生きています。<br>
        案件のご相談、どんなことでもお待ちしております。"
    },
    profile: {
      title: "Profile",
      text: "名前：若林晃輝（Aki Wakabayashi）<br>
        在住：北海道札幌市<br>
        経歴：人材サービス会社に10年所属。<br>
        独学でHTML/CSS/JavaScript/Swiftを学ぶ。<br>
        現在2児を育児しながら案件受注している。"
    },
    skills: {
      title: "Skills",
      text: "HTML/CSS：  <br>
        JavaScript： <br>
        Swift："
    },
    works: {
      title: "Works",
      text: "⬛️求人掲載向け画像編集アプリ「〜〜〜」（WEB版／iOS版）<br>
        ⬛️AI提案型レシピ検索アプリ「yorisou」（iOS版）"
    },
    contact: {
      title: "Contact",
      text: "フォーム設置予定　SNS開設予定"
    }
  };

  const selected = sections[section];
  content.innerHTML = `
    <h2>${selected.title}</h2>
    <p>${selected.text}</p>
  `;

  // ▼ここから現在地表示の処理
  document.querySelectorAll(".hex-button").forEach(btn => {
    btn.classList.remove("active");
  });
  const index = {
    home: 0, profile: 1, skills: 2, works: 3, contact: 4
  }[section];
  document.querySelectorAll(".hex-button")[index].classList.add("active");
}
