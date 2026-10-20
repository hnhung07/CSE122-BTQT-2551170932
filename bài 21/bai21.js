const contents = {
  reverse: {
    intro: "Bài tập: Đảo chuỗi",
    text: "Nhập một chuỗi và hiển thị chuỗi đảo ngược của nó."
  },
  parse: {
    intro: "Bài tập: Phân tích chuỗi",
    text: "Tách chuỗi thành các từ và đếm số từ, số ký tự."
  },
  replace: {
    intro: "Bài tập: Tìm và thay thế",
    text: "Tìm một đoạn văn bản trong chuỗi và thay bằng nội dung khác."
  }
};

const [cardIntro, cardText] = document.querySelectorAll(".card p");

function setActive(links, selected) {
  links.forEach(link => link.classList.toggle("active", link === selected));
}

function onClickLinks(selector, handler) {
  const links = document.querySelectorAll(selector);

  links.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      setActive(links, link);
      handler?.(link);
    });
  });
}

onClickLinks(".nav_link");
onClickLinks(".menu_link", link => {
  const { intro, text } = contents[link.dataset.id];
  cardIntro.textContent = intro;
  cardText.textContent = text;
});