let index = 1;
function changeImage() {
  let imgs = [
    "img/slide1.jpg",
    "img/slide2.jpg",
    "img/slide3.jpg",
    "img/slide4.jpg",
  ];
  document.getElementById("img").src = imgs[index];
  index++;
  if (index == 4) {
    index = 0;
  }
}
setInterval(changeImage, 5000);

let num = 0;
function next() {}
