$(".phone").mask("+7(999) 999-99-99");

function openTab(tabId) {
  var i, tabcontent, tabbuttons;

  // Hide all tab contents
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("active");
  }

  tabbuttons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].classList.remove("active");
  }

  document.getElementById(tabId).style.display = "flex";
  document.getElementById(tabId).classList.add("active");
  event.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  openTab("tab1");
});


document.addEventListener("DOMContentLoaded", () => {
    const contactsBlock = document.getElementById("contacts");
    const mapScroll1 = document.getElementById("map-scroll1");
    const mapScroll2 = document.getElementById("map-scroll2");
    let mapAdded = false;
  
    window.addEventListener("scroll", () => {
      const contactsPosition = contactsBlock.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (contactsPosition <= windowHeight && !mapAdded) {
        // Add the map iframe
        mapScroll1.innerHTML = `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1425774a95788bb99f2ee4d4341c6915f8c10845e124cabb43e610c8b74b7e61&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>`;
        mapScroll1.style.display = "block";
        mapScroll2.innerHTML = `<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A76a02c95b083845b11361a5155ea3c14f65e41026e846bcad3aa0d7e8300b4b0&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>`;
        mapScroll2.style.display = "block";
        mapAdded = true;
      }
    });
  });