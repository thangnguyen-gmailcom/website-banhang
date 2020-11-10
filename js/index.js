let body = document.getElementsByTagName("body")[0];

// function collapseSidebar() {
//   body.classList.toggle("sidebar-expand");
// }

window.onclick = function (event) {
  openCloseDropdown(event);
};

function closeAllDropdown() {
  let dropDowns = document.getElementsByClassName("dropdown-expand");
  for (let i = 0; i < dropDowns.length; i++) {
    dropDowns[i].classList.remove("dropdown-expand");
  }
}

function openCloseDropdown(event) {
  if (!event.target.matches(".dropdown-toggle")) {
    //close dropdown when click out of dropdown menu
    closeAllDropdown();
  } else {
    let toggle = event.target.dataset.toggle;
    let content = document.getElementById(toggle);
    if (content.classList.contains("dropdown-expand")) {
      closeAllDropdown();
    } else {
      closeAllDropdown();
      content.classList.add("dropdown-expand");
    }
  }
}

// let index = 1;
// changeImage = function () {
//   let imgs = [
//     "img/slide1.jpg",
//     "img/slide2.jpg",
//     "img/slide3.jpg",
//     "img/slide4.jpg",
//   ];
//   document.getElementById("img").src = imgs[index];
//   index++;
//   if (index == 4) {
//     index = 0;
//   }
// };
// setInterval(changeImage, 1500);
