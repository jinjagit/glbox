console.log(window.innerHeight);
console.log(window.innerWidth);


const drawLayout = () => {
  const winHeight = window.innerHeight;
  const winWidth = window.innerWidth;
  const width = Math.floor(winHeight * 16 / 9);
  const panelW = (width - winHeight) / 2;
  let offset = 0;
  if (width < winWidth) {
    offset = Math.floor((winWidth - width) / 2);
  }
  let canvas = document.getElementById('canvas');
  canvas.style.width = `${winHeight}px`;
  canvas.style.height = `${winHeight}px`;
  canvas.style.left = `${panelW + offset}px`;
  let panels = document.getElementsByClassName("panel");
  for (let i = 0; i < panels.length; i++) {
    panels[i].style.width = `${panelW * 0.98}px`;
    panels[i].style.height = `${winHeight * 0.991}px`;
    panels[i].style.left = `${(panelW * 0.01) + ((winHeight + panelW) * i) + offset}px`;
    panels[i].style.top = `${winHeight * 0.0035}px`;
  };
};

const onResize = () => {
  const redrawIfInactive = () => {
    let now = getTime();
    if (now - lastResize > 995) {
      drawLayout();
      console.log("redraw");
    };
  };
  lastResize = getTime();
  // prevent multiple (re)renders when mutliple resizes
  setTimeout(redrawIfInactive, 1000);
};

const getTime = typeof performance === 'function' ? performance.now : Date.now;
let lastResize = 0;

drawLayout();
