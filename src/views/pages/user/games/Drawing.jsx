import React from 'react'
import { Canvas } from '../../components/Drawing/Canvas'
import { ClearCanvasButton } from '../../components/Drawing/ClearCanvasButton';

function Drawing() {
  return (
    <>
      <Canvas/>
      <ClearCanvasButton/>
    </>
  );
}

export default Drawing;
