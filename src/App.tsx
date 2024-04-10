import './App.css';
import { GlobalNav } from './view/GlobalNav';
import { Routes, Route, Link } from 'react-router-dom';
import Content from './view/Content';
import Page1 from './view/Page1';
import Page2 from './view/Page2';
import Children1 from './view/Children1';

function App() {
  return (
    <>
      <GlobalNav />
      <Routes>
        <Route path="/" element={<Page1 />}>
          <Route path="/ch1" element={<Children1 name="ch1" />}></Route>
          <Route path="/ch2" element={<Children1 name="ch2" />}></Route>
        </Route>
        <Route path="2" element={<Page2 />}></Route>
      </Routes>
    </>
  );
}

export default App;
