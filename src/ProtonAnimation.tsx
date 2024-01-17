import React, { useEffect } from 'react';
import Proton from 'proton-engine';

const ProtonAnimation: React.FC = () => {
  useEffect(() => {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
    // Attach the canvas to the DOM
    document.getElementById('root')?.appendChild(canvas);

    const proton = new Proton();
    


    // Add canvas renderer
    const renderer= new Proton.CanvasRenderer(canvas);
    proton.addRenderer(renderer);

    // Start the animation loop
    const update = () => {
      requestAnimationFrame(update);
      proton.update();
    };
    update();

    return () => {
      // Clean up when the component unmounts
      document.getElementById('root')?.removeChild(canvas);
    };
  }, []); // Run this effect only once

  return null;
};

export default ProtonAnimation;
