console.log("hi");
function takeScreenShot() {
  html2canvas(document.body, {
    height: window.innerHeight,
    scrollY: 0 - window.pageYOffset,
    proxy: "https://node-proxy-html2canvas.herokuapp.com/",
  }).then(function (canvas) {
    console.log(canvas);
    var base64image = canvas.toDataURL();
    console.log(base64image);
    // window.open(base64image);
  });
}
