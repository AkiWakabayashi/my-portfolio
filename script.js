function showContent(section) {
  const content = document.getElementById("content");

  const sections = {
    home: {
      title: "Home",
      text: "ここはホーム画面です。最新情報や自己紹介の概要を載せよう！"
    },
    profile: {
      title: "Profile",
      text: "あなたの自己紹介や経歴などを表示するページです。"
    },
    skills: {
      title: "Skills",
      text: "ここにはあなたの技術や得意分野を一覧で紹介できます。"
    },
    works: {
      title: "Works",
      text: "これまでに作った作品やアプリ、成果物を載せましょう！"
    },
    contact: {
      title: "Contact",
      text: "連絡先やSNSリンク、フォームの設置などがオススメです。"
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
