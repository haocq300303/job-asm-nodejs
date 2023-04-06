//---------------scroll Menu--------------//

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("nav").style.top = "0";
    document.getElementById("nav").style.backgroundColor = "#fff";
    document.getElementById("nav").style.padding = "16px 0px 0px 0px";
    document.getElementById("nav").style.boxShadow = "0px 2px 10px gray";
  } else {
    document.getElementById("nav").style.top = "60px";
    document.getElementById("nav").style.backgroundColor = "#fff";
    document.getElementById("nav").style.padding = "5px 0px 10px 0px";
    document.getElementById("nav").style.boxShadow = "0px 2px 10px gray";
  }
}

//----------------dark mode----------------//

function addHeart() {
  alert(" đã thêm vào danh mục yêu thích");
}

//----------slide show------------//

//--------- validate---------//
