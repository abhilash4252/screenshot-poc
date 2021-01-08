console.log("hi");

const widget = Widget();
const feedbackButton = document.createElement("button");
feedbackButton.setAttribute("data-html2canvas-ignore", null);
feedbackButton.innerHTML = "Feedback";
feedbackButton.style.position = "fixed";
feedbackButton.style.bottom = "30px";
feedbackButton.style.right = "30px";

feedbackButton.onclick = function () {
  widget.openWidget();
  feedbackButton.style.display = "none";
};

document.body.appendChild(feedbackButton);
function takeScreenShot() {
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
    w.document.write(image.outerHTML);
    widget.closeWidget();
  });
}

function addOverlay() {
  console.log("Adding Overlay");
  // Create Container for Canvas
  const container = document.createElement("div");
  container.id = "widget-container";
  container.style.position = "absolute";
  container.style.top = window.pageYOffset.toString() + "px";
  container.style.left = "0";
  container.style.zIndex = "10000";
  container.style.height = "100vh";
  container.style.width = "100vw";
  // container.style.backgroundColor = "rgba(0,0,0,0.3)";

  // Add Controls
  const controlsContainer = document.createElement("div");
  controlsContainer.setAttribute("data-html2canvas-ignore", null);

  // CONTROL : CLOSE
  const closeButton = document.createElement("button");
  closeButton.innerHTML = "Close";
  closeButton.onclick = function () {
    widget.closeWidget();
  };

  // CONTROL : TAKE SCREENSHOT
  const screenshotButton = document.createElement("button");
  screenshotButton.innerHTML = "Screenshot";
  screenshotButton.onclick = function () {
    takeScreenShot();
  };

  // CONTROL : RECTANGLE MODE
  const rectangleButton = document.createElement("button");
  rectangleButton.innerHTML = "Rectangle";
  rectangleButton.onclick = function () {
    widget.enableRectangleMode();
  };

  // CONTROL : PEN MODE
  const penButton = document.createElement("button");
  penButton.innerHTML = "PEN";
  penButton.onclick = function () {
    widget.enableScribble();
  };

  controlsContainer.appendChild(penButton);
  controlsContainer.appendChild(rectangleButton);
  controlsContainer.appendChild(screenshotButton);
  controlsContainer.appendChild(closeButton);

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

function Widget() {
  let canvas;
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

  return {
    enableScribble,
    disableScribble,
    enableRectangleMode,
    openWidget,
    closeWidget,
    canvas,
  };
}
