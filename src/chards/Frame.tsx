import React from 'react';
import { Card } from 'react-bootstrap'

// entender questão dos difetentes tamanhos dos gráficos e como posso deixar o width e height dinâmicos.

const style = {
  width: '19rem',
  height: '21rem',
  background: '#e8e8e8',
  boxShadow: 'rgba(0, 0, 0, 0.50) 1.95px 1.95px 2.0px',
  padding: '0.2rem'
}

export default function Frame({ children }: { children: JSX.Element }) {
  return (
    <Card style={style}>
      <Card.Body>
        { children }
      </Card.Body>
    </Card>
  );
}


