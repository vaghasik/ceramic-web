import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Ceramic Tiels</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/home">Home</Link> |{' '}
        <Link to="/constact">Constact</Link>
      </nav>
      <Outlet />
    </div>
  );
}
