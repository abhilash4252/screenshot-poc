const faS = document.createElement("script");
faS.src = "http://localhost:5501/fabric.js";

const h2cS = document.createElement("script");
h2cS.src = "http://localhost:5501/html2canvas.js";

const appS = document.createElement("script");
appS.src = "http://localhost:5501/app.js";

const scripts = [faS, h2cS, appS];

scripts.forEach((script) => document.body.appendChild(script));

// Use this script in the console to load widget

/* const script = document.createElement("script");
document.body.appendChild(script)
script.src = "http://localhost:5501/snippet.js" */

// Use this snippet to initialize the widget

/* FeedbackWidget.init({
  global: {
    primaryColor: "red",
  },
  feedbackButton: {
    text: "Give Feedback",
  },
  feedbackForm: {
    labelText: "Label Text",
    placeholderText: "Placeholder",
    buttonText: "Give Feedback",
  },
}); */
