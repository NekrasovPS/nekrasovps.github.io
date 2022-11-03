const els = document.getElementsByClassName("all-managers-item");
const className = "open";
for (let i in els) {
  els[i].onclick = function () {
    els[i].classList.contains(className)
      ? els[i].classList.remove(className)
      : els[i].classList.add(className);
  };
}

var title = document.title;
document.title = "Тестовое задание успешно выполнено";
