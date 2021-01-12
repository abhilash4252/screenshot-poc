const faS = document.createElement("script");
faS.src = "http://localhost:5501/fabric.js";

const h2cS = document.createElement("script");
h2cS.src = "http://localhost:5501/html2canvas.js";

const appS = document.createElement("script");
appS.src = "http://localhost:5501/app.js";

const scripts = [faS, h2cS, appS];

scripts.forEach((script) => document.body.appendChild(script));
