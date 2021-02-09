const loadEvent = new Event("FeedbackWidgetLoaded");
const FeedbackWidget = Widget();

function Widget() {
  let canvas;
  let primaryColor;
  let feedbackButtonText;
  let feedbackHeadline;
  let feedbackLabelText;
  let feedbackFormButtonText;
  let feedbackPlaceholderText;
  let outro_text;
  let api_key;

  const feedbackButton = document.createElement("button");

  const createStyledButton = ({ text, id = "", onclick, icon, style }) => {
    const button = document.createElement("button");
    button.id = id;
    const buttonStyle = button.style;
    const buttonStyles = {
      border: "none",
      color: "white",
      padding: "0.5rem 0.8rem",
      cursor: "pointer",
      backgroundColor: primaryColor,
      backgroundImage: `url("${icon}")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "18px 18px",
      padding: "1rem",
      paddingTop: "1.2rem",
      borderRadius: "20px",
      margin: "0.5rem",
    };
    Object.assign(buttonStyle, style ? style : buttonStyles);

    button.onclick = onclick;
    text && (button.innerText = text);
    return button;
  };

  const createElement = (elem, params = {}) => {
    const { text = "", id = "", style = {}, children = [] } = params;
    const element = document.createElement(elem);
    element.id = id;
    const elementStyle = element.style;
    Object.assign(elementStyle, style);
    children.length && children.forEach((child) => element.appendChild(child));
    text && (element.innerHTML = text);

    return element;
  };

  const init = async ({ apiKey }) => {
    const auth = await authenticate(apiKey);
    setConfiguration(auth);
    renderFeedbackButton();
  };

  const setConfiguration = (config) => {
    primaryColor = config?.global?.primaryColor || "#3973E6";
    feedbackHeadline = config?.feedbackForm?.headline || "Report a Bug";
    feedbackButtonText = config?.feedbackButton?.text || "Feedback";
    feedbackLabelText = config?.feedbackForm?.labelText || "Add a comment";
    feedbackFormButtonText = config?.feedbackForm?.buttonText || "Submit";
    feedbackPlaceholderText =
      config?.feedbackForm?.placeholderText || "Your Feedback";
    outro_text = config?.outro.text || "Thanks for your feedback";
  };

  const authenticate = async (apiKey) => {
    // TODO : Use a network call to get config
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      key: apiKey,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const request = await fetch(
      "http://localhost:8080/api/v1/client/init",
      requestOptions
    );
    const response = await request.json();
    const { config } = response;
    api_key = apiKey;
    return {
      global: {
        primaryColor: config.button_bg_color,
      },
      feedbackButton: {
        text: config.button_label,
      },
      feedbackForm: {
        labelText: config.input_placeholder,
        placeholderText: config.input_label,
        buttonText: config.submit_button_label,
        headline: config.heading,
      },
      outro: {
        text: config.outro_text,
      },
    };
  };

  const renderFeedbackButton = () => {
    feedbackButton.setAttribute("data-html2canvas-ignore", null);
    feedbackButton.innerText = feedbackButtonText;
    const buttonStyles = feedbackButton.style;
    const styles = {
      backgroundColor: primaryColor,
      position: "fixed",
      bottom: "0px",
      right: "30px",
      color: "white",
      padding: "0.8rem 1.5rem",
      fontSize: "1rem",
      fontWeight: "600",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      border: "none",
      boxShadow: "0px -4px 12px rgba(0, 0, 0, 0.3)",
      zIndex: "10000000",
      cursor: "pointer",
    };
    Object.assign(buttonStyles, styles);

    feedbackButton.onclick = function () {
      openWidget();
      showFeedbackDialog();
      Object.assign(buttonStyles, { display: "none" });
      //feedbackButton.style.display = "none";
    };

    document.body.appendChild(feedbackButton);
  };

  const openWidget = () => {
    renderOverlay();
    canvas = new fabric.Canvas(document.getElementById("scribble-canvas"), {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      selection: false,
    });

    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 5;
    canvas.freeDrawingBrush.color = "#00aeff";
  };

  const enableScribble = () => {
    // Clear Event Listeners
    console.log("Clearing Listeners");
    canvas.__eventListeners = {};
    canvas.isDrawingMode = true;
  };

  const disableScribble = () => {
    canvas.isDrawingMode = false;
  };

  const enableRectangleMode = () => {
    disableScribble();
    canvas.on("mouse:down", addRecDown);

    canvas.on("mouse:move", addRecMove);

    canvas.on("mouse:up", (o) => {
      isDown = false;
    });
  };

  let rect, isDown, origX, origY;

  const addRecDown = (o) => {
    isDown = true;
    var pointer = canvas.getPointer(o.e);
    origX = pointer.x;
    origY = pointer.y;
    var pointer = canvas.getPointer(o.e);
    rect = new fabric.Rect({
      left: origX,
      top: origY,
      originX: "left",
      originY: "top",
      width: pointer.x - origX,
      height: pointer.y - origY,
      angle: 0,
      fill: "transparent",
      stroke: "black",
      strokeWidth: 2,
      transparentCorners: false,
    });
    canvas.add(rect);
  };

  const addRecMove = (o) => {
    if (!isDown) return;
    var pointer = canvas.getPointer(o.e);

    if (origX > pointer.x) {
      rect.set({ left: Math.abs(pointer.x) });
    }
    if (origY > pointer.y) {
      rect.set({ top: Math.abs(pointer.y) });
    }

    rect.set({ width: Math.abs(origX - pointer.x) });
    rect.set({ height: Math.abs(origY - pointer.y) });

    canvas.renderAll();
  };

  const closeWidget = () => {
    const widgetContainer = document.getElementById("widget-container");
    widgetContainer.parentNode.removeChild(widgetContainer);
    document.body.style.overflow = "auto";
    feedbackButton.style.display = "block";
  };

  const takeScreenShot = () => {
    html2canvas(document.body, {
      height: window.innerHeight,
      width: window.innerWidth,
      scrollY: 0 - window.pageYOffset,
      proxy: "https://node-proxy-html2canvas.herokuapp.com/",
    }).then(function (canvas) {
      var base64image = canvas.toDataURL();
      var image = new Image();
      image.src = base64image;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      fetch("http://localhost:8000/screenshot", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({ imageData: base64image }),
        redirect: "follow",
      }).then(async (res) => {
        const result = await res.json();
        console.log(result);
        var raw = JSON.stringify({
          key: api_key,
          feedback: {
            image_url: result.image_url,
            description: document.getElementById("commentTextArea").value,
            browser_info: {
              name: "chrome",
              version: "10.3",
            },
          },
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        const smb = document.getElementById("submitFeedbackButton");
        smb.disabled = true;
        fetch(
          "http://localhost:8080/api/v1/client/submit_feedback",
          requestOptions
        )
          .then((res) => {
            smb.disabled = false;
            showOutro();
            setTimeout(() => removeOutro(), 3000);
            closeWidget();
          })
          .catch((err) => {
            smb.disabled = false;
            console.log(err);
          });
      });
    });
  };

  function renderOverlay() {
    const controlsContainer = createElement("div", {
      style: {
        position: "absolute",
        zIndex: "1000001",
        display: "flex",
        flexDirection: "column",
      },
      children: [
        createStyledButton({
          onclick: enableScribble,
          icon: "https://www.svgrepo.com/show/8890/pen.svg",
        }),
        createStyledButton({
          onclick: enableRectangleMode,
          icon: "https://www.svgrepo.com/show/189147/marquee.svg",
        }),
        createStyledButton({
          onclick: closeWidget,
          icon: "https://www.svgrepo.com/show/305186/close.svg",
        }),
      ],
    });
    controlsContainer.setAttribute("data-html2canvas-ignore", null);

    const canvas = createElement("canvas", {
      id: "scribble-canvas",
      style: {
        width: "100%",
        height: "100%",
      },
    });

    const container = createElement("div", {
      id: "widget-container",
      style: {
        all: "unset",
        position: "absolute",
        top: `${window.pageYOffset.toString()}px`,
        left: "0",
        zIndex: "100000",
        height: "100vh",
        width: "100vw",
        boxSizing: "border-box",
        border: `6px solid ${primaryColor}`,
        fontFamily: "Verdana, sans-serif !important",
      },
      children: [controlsContainer, canvas],
    });

    document.body.appendChild(container);
    document.body.style.overflow = "hidden";
  }

  const showFeedbackDialog = () => {
    const headline = createElement("h3", {
      text: feedbackHeadline,
      style: {
        textAlign: "center",
        margin: "8px 0px",
      },
    });

    const hr = createElement("hr");

    const commentLabel = createElement("label", {
      text: feedbackLabelText,
      style: {
        fontSize: "0.8rem",
      },
    });

    const commentTextArea = createElement("textarea", {
      id: "commentTextArea",
      style: {
        padding: "0.5rem",
        margin: "0.5rem 0rem",
        fontSize: "0.8rem",
        fontFamily: "Verdana, sans-serif !important",
      },
    });
    commentTextArea.placeholder = feedbackPlaceholderText;

    const submitFeedbackButton = createStyledButton({
      id: "submitFeedbackButton",
      text: feedbackFormButtonText,
      style: {
        width: "100%",
        backgroundColor: primaryColor,
        color: "white",
        padding: "0.8rem 1rem",
        fontSize: "1rem",
        fontWeight: "600",
        cursor: "pointer",
        border: "none",
      },
      onclick: takeScreenShot,
    });

    const inputContainer = createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
      },
      children: [commentLabel, commentTextArea],
    });

    const feedbackContainer = createElement("div", {
      style: {
        position: "absolute",
        right: "0",
        bottom: "0",
        boxShadow: "0 0 12px rgba(0,0,0,0.2)",
        zIndex: "1000000",
        backgroundColor: "white",
      },
      children: [headline, hr, inputContainer, submitFeedbackButton],
    });
    feedbackContainer.setAttribute("data-html2canvas-ignore", null);

    document.getElementById("widget-container").appendChild(feedbackContainer);
  };

  const showOutro = () => {
    const outroText = createElement("div", {
      text: outro_text,
      style: {
        fontFamily: "Verdana, sans-serif",
        fontSize: "1rem",
        wordSpacing: "-1px",
      },
    });

    const poweredByText = createElement("a", {
      text: "powered by - feedback.easy",
      style: {
        marginTop: "1rem",
        fontSize: "0.7rem",
        color: "silver",
      },
    });
    poweredByText.href = "https://feedback.easy.xyz";
    poweredByText.target = "_blank";

    const outroImage = createElement("img", {
      style: {
        width: "128px",
        margin: "1rem",
      },
    });
    outroImage.src = "https://www.svgrepo.com/show/167754/checked.svg";

    const outroDialog = createElement("div", {
      style: {
        padding: "1rem 2rem",
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: "5px",
        boxShadow: "0 0 8px 4px rgba(0,0,0,0.05)",
      },
      children: [outroImage, outroText, poweredByText],
    });

    const outroContainer = createElement("div", {
      id: "outro-container",
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.25)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "10000001",
      },
      children: [outroDialog],
    });

    document.body.appendChild(outroContainer);
  };

  const removeOutro = () => {
    const outro = document.getElementById("outro-container");
    outro.parentNode.removeChild(outro);
  };

  return {
    enableScribble,
    disableScribble,
    enableRectangleMode,
    openWidget,
    closeWidget,
    showFeedbackDialog,
    init,
    canvas,
  };
}

window.dispatchEvent(loadEvent);
