window.addEventListener('resize', rightHeight, false);
window.onload = rightHeight;

function rightHeight() {
  var documentHeight = document.body.scrollHeight;
  var windowWidth = window.innerWidth;
  console.log (documentHeight);
  if (windowWidth > 670) {
    document.getElementById('right').style.height = documentHeight + "px";
  }
  else {
    document.getElementById('right').style.height = "auto";
  }
};
