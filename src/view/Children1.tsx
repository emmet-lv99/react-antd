import React from 'react';

type OwnProp = {
  name: string;
};

const Children1: React.FC<OwnProp> = ({ name }) => {
  return <div style={{ border: '1px solid purple', padding: 10 }}>{name}</div>;
};

export default Children1;
