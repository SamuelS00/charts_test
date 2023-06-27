import React from 'react';
import { Card } from 'react-bootstrap'
import './style.css'

interface FrameParams {
  children: JSX.Element,
  width: number
  height: number
}

export default function Frame({ children, width, height }: FrameParams) {
  const style = {
    width: `${width}rem`,
    height: `${height}rem`,
  }

  return (
    <Card style={style} className='frame-card' >
      <Card.Body>
        { children }
      </Card.Body>
    </Card>
  );
}
