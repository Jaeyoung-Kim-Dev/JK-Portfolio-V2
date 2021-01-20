import React from 'react';
// import ImageSource from './ImageSource';
import { Canvas } from './AboutElements';

const ImageAnimation = () => {
  const image = new Image();
  image.src =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QewRXhpZgAATU0AKgAAAAgACwEPAAIAAAAGAAAAkgEQAAIAAAAOAAAAmAESAAMAAAABAAEAAAEaAAUAAAABAAAApgEbAAUAAAABAAAArgEoAAMAAAABAAIAAAExAAIAAAAHAAAAtgEyAAIAAAAUAAAAvgFCAAQAAAABAAACAAFDAAQAAAABAAACAIdpAAQAAAABAAAA0gAAAABBcHBsZQBpUGhvbmUgWFMgT';

  return (
    <Canvas />

    // <canvas id="canvas1"></canvas>
  );
};

export default ImageAnimation;
