import React, { Fragment } from 'react';
import posed from 'react-pose';

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

export default () => (
  <Container>
    <h2>Store</h2>
    <P>
      <h1>This is the Store</h1>
    </P>
  </Container>
);
