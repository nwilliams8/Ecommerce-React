import React from 'react';
import posed from 'react-pose';
import { Link } from '@reach/router';

const ListContainer = posed.ul({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

const Item = posed.ul({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

export default () => (
  <div>
    <h2>Contact</h2>
    <ListContainer>
      <Item>
        <Link to="/contact">contact</Link>
        <p>Some generic description contact the contact page. contact.</p>
      </Item>
      <Item>
        <Link to="/contact">contact</Link>
        <p>Some generic description contact the contact page. contact.</p>
      </Item>
      <Item>
        <Link to="/contact">contact</Link>
        <p>Some generic description contact the contact page. contact.</p>
      </Item>
      <Item>
        <Link to="/contact">contact</Link>
        <p>Some generic description contact the contact page. contact.</p>
      </Item>
    </ListContainer>
  </div>
);
