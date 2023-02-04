/** @format */

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App font-opensans'>
      <HomePage />
    </div>
  );
}

export default App;
