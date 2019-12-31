import { drawLayout } from './layout'
import { glRender } from './glRender'

const onResize = () => {
  const redrawIfInactive = () => {
    let now = getTime();
    if (now - lastResize > 995) {
      drawLayout();
      glRender();
      console.log("redraw");
    };
  };
  lastResize = getTime();
  // prevent multiple (re)renders when mutliple resizes, with 1 sec delay
  setTimeout(redrawIfInactive, 1000);
};

window.onresize = onResize;

const getTime = typeof performance === 'function' ? performance.now : Date.now;
let lastResize = 0;

drawLayout();
glRender();
