const origin = "http://localhost:5501";

const faS = document.createElement("script");
faS.src = `${origin}/fabric.js`;

const h2cS = document.createElement("script");
h2cS.src = `${origin}/html2canvas.js`;

const appS = document.createElement("script");
appS.src = `${origin}/app.js`;

const scripts = [faS, h2cS, appS];

scripts.forEach((script) => document.body.appendChild(script));

// Use this snippet to initialize the widget

/* const script = document.createElement("script");
document.body.appendChild(script);
script.src = "http://localhost:5501/load.js";
script.defer = 1
window.addEventListener("FeedbackWidgetLoaded", function () {
  FeedbackWidget.init({ apiKey: "thisisanapikeyverysecure" });
}); */
