import React, { useEffect, useRef } from 'react';
// import ReactDOMServer from 'react-dom/server';

export default function Canvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      // const elem = ReactDOMServer.renderToStaticMarkup(<SampleText />);
      // ctx.canvas.outerHTML = elem;
      ctx.canvas.addEventListener('click', (event) => {
        console.log(event);
      });
      ctx.fillStyle = 'transparent';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.canvas.style.border = '1px solid black';
      ctx.restore();
    }
  }, []);

  return <canvas ref={canvasRef} />;
}
