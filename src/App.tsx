import { useEffect, useState } from 'react';
import './App.css';
import Home from './page/Home';

function App() {
  const [flag, setFlag] = useState(false);
  const onClick = () => {
    setFlag(!flag);
  };

  // useEffect(() => console.log('hi'), [flag]);
  return (
    <>
      {flag ? <Home flag={flag} /> : ''}
      <button onClick={onClick}>button</button>
    </>
  );
}

export default App;
