import React from 'react';
import { Button } from 'react-bootstrap';

const style = {
  borderRadius: '10px',
  border: '1px solid red',
  lineHeight: '1',
  color: 'black',
  backgroundColor: 'transparent',
  width: '5rem',
  height: '2rem',
  fontSize: '0.6rem',
  margin: '0.4rem 0.5rem 0.5rem 0.5rem'
}

export default function FilterButtonDonutChart({ content }: any) {
  return (
    <Button variant="outline-danger" style={style}>
     { content }
    </Button>
  );
}
