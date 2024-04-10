import React, { useState } from 'react';
import { Button } from 'antd';

const Page2 = () => {
  const [num, setNum] = useState(0);
  const onCClick = (symbol: string) => {
    if (symbol == '+') {
      setNum(num + 1);
    } else if (num > 0) {
      setNum(num - 1);
    }
  };
  return (
    <>
      <Button onClick={() => onCClick('+')}>+</Button>
      <Button onClick={() => onCClick('-')}>-</Button>
      <p>{num}</p>
    </>
  );
};

export default Page2;
