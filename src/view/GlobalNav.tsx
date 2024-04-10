import React from 'react';
import { Link } from 'react-router-dom';

export const GlobalNav = () => {
  return (
    <div style={{ border: '1px solid red' }}>
      <Link to="/ch1">1</Link>
      <br />
      <Link to="2">2</Link>
      <br />
      <Link to="">3</Link>
      <br />
      <Link to="">4</Link>
      <br />
    </div>
  );
};
