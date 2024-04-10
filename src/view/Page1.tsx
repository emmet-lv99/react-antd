import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

function Page1() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid green', padding: 10 }}>
      <div style={{ paddingRight: 30 }}>
        <div>sideNav</div>
        <div>
          <Link to="ch1">1</Link>
        </div>
        <div>
          <Link to="ch2">2</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Page1;
