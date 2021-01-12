console.log("hi");

const FeedbackWidget = Widget();

function Widget() {
  let canvas;
  let primaryColor;
  const feedbackButton = document.createElement("button");

  const _createStyledButton = ({ text, onclick }) => {
    const button = document.createElement("button");
    button.style.border = "none";
    button.style.color = "white";
    button.style.padding = "0.5rem 0.8rem";
    button.style.backgroundColor = primaryColor;
    button.onclick = onclick;
    button.innerText = text;
    return button;
  };

  const init = (config) => {
    // REFACTOR
    primaryColor = config?.global?.primaryColor || "#3973E6";
    feedbackButton.setAttribute("data-html2canvas-ignore", null);
    feedbackButton.innerText = config?.feedbackButton?.text || "Feedback";
    feedbackButton.style.backgroundColor =
      config?.global?.primaryColor || "#3973E6";
    feedbackButton.style.position = "fixed";
    feedbackButton.style.bottom = "0px";
    feedbackButton.style.right = "30px";
    feedbackButton.style.color = "white";
    feedbackButton.style.padding = "0.8rem 1.5rem";
    feedbackButton.style.fontSize = "1rem";
    feedbackButton.style.fontWeight = "600";
    feedbackButton.style.borderTopLeftRadius = "10px";
    feedbackButton.style.borderTopRightRadius = "10px";
    feedbackButton.style.border = "none";
    feedbackButton.style.boxShadow = "0px -4px 12px rgba(0, 0, 0, 0.3)";
    feedbackButton.style.zIndex = "10000000";
    feedbackButton.style.cursor = "pointer";

    feedbackButton.onclick = function () {
      openWidget();
      showFeedbackDialog();
      feedbackButton.style.display = "none";
    };

    document.body.appendChild(feedbackButton);
  };

  const openWidget = () => {
    // Add Overlay
    addOverlay();

    // Initialize Canvas with FabricJS
    console.log("Initializing Canvas");
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
    console.log("Taking Screenshot");
    html2canvas(document.body, {
      height: window.innerHeight,
      width: window.innerWidth,
      scrollY: 0 - window.pageYOffset,
      proxy: "https://node-proxy-html2canvas.herokuapp.com/",
    }).then(function (canvas) {
      var base64image = canvas.toDataURL();
      var image = new Image();
      image.src = base64image;
      var w = window.open("");
      w.document.body.style.margin = "0";
      w.document.write(image.outerHTML);
      closeWidget();
    });
  };

  function addOverlay() {
    console.log("Adding Overlay");
    // Create Container for Canvas
    const container = document.createElement("div");
    container.style.all = "initial";
    container.id = "widget-container";
    container.style.position = "absolute";
    container.style.top = window.pageYOffset.toString() + "px";
    container.style.left = "0";
    container.style.zIndex = "100000";
    container.style.height = "100vh";
    container.style.width = "100vw";

    // Add Controls
    const controlsContainer = document.createElement("div");
    controlsContainer.setAttribute("data-html2canvas-ignore", null);
    controlsContainer.style.position = "absolute";
    controlsContainer.style.zIndex = "1000001";

    controlsContainer.appendChild(
      _createStyledButton({ text: "Pen", onclick: enableScribble })
    );
    controlsContainer.appendChild(
      _createStyledButton({
        text: "Rectangle",
        onclick: enableRectangleMode,
      })
    );
    controlsContainer.appendChild(
      _createStyledButton({ text: "Screenshot", onclick: takeScreenShot })
    );
    controlsContainer.appendChild(
      _createStyledButton({ text: "close", onclick: closeWidget })
    );

    container.appendChild(controlsContainer);

    // Create Canvas
    const canvas = document.createElement("canvas");
    canvas.id = "scribble-canvas";
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    // Add Canvas to Container
    container.appendChild(canvas);

    // Add Container to Body
    document.body.appendChild(container);

    // Prevent Body From Scrolling
    document.body.style.overflow = "hidden";
  }

  const showFeedbackDialog = () => {
    const feedbackContainer = document.createElement("div");
    feedbackContainer.setAttribute("data-html2canvas-ignore", null);
    feedbackContainer.style.position = "absolute";
    feedbackContainer.style.right = "0";
    feedbackContainer.style.bottom = "0";
    feedbackContainer.style.boxShadow = "0 0 12px rgba(0,0,0,0.2)";
    feedbackContainer.style.zIndex = "1000000";

    const inputContainer = document.createElement("div");
    inputContainer.style.display = "flex";
    inputContainer.style.flexDirection = "column";
    inputContainer.style.padding = "1rem";

    const headline = document.createElement("h3");
    headline.innerText = "Report a Bug";
    headline.style.textAlign = "center";
    const hr = document.createElement("hr");

    const br = document.createElement("br");
    const br2 = document.createElement("br");

    const commentLabel = document.createElement("label");
    commentLabel.innerText = "Add a comment";
    const commentTextArea = document.createElement("textarea");
    commentTextArea.placeholder = "Your Feedback";

    const assigneeLabel = document.createElement("label");
    assigneeLabel.innerText = "Assignee";
    const assigneeInput = document.createElement("input");
    assigneeInput.type = "text";
    assigneeInput.placeholder = "Select Assignee";

    const tncLabel = document.createElement("label");
    tncLabel.innerText = "I accept the terms and conditions";
    const tncInput = document.createElement("input");
    tncInput.type = "text";

    const submitFeedbackButton = document.createElement("button");
    submitFeedbackButton.innerText = "Give Feedback";
    submitFeedbackButton.style.width = "100%";
    submitFeedbackButton.style.backgroundColor = primaryColor;
    submitFeedbackButton.style.color = "white";
    submitFeedbackButton.style.padding = "0.8rem 1.5rem";
    submitFeedbackButton.style.fontSize = "1rem";
    submitFeedbackButton.style.fontWeight = "600";
    submitFeedbackButton.style.cursor = "pointer";

    const inputElements = [
      commentLabel,
      commentTextArea,
      br,
      assigneeLabel,
      assigneeInput,
      br2,
      tncLabel,
      tncInput,
    ];
    const elements = [headline, hr, inputContainer, submitFeedbackButton];
    inputElements.forEach((element) => inputContainer.appendChild(element));
    elements.forEach((element) => feedbackContainer.appendChild(element));

    document.getElementById("widget-container").appendChild(feedbackContainer);
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
