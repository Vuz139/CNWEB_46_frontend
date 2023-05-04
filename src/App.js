import logo from './logo.svg';
import './App.css';
import {Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isDidLogin, setIsDidLogin] = useState(false);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">APP</Link>
          </li>
          {!isDidLogin &&
            (<li>
              <Link to="/login">login</Link>
            </li>) }
          {!isDidLogin && (<li>
            <Link to="/signup">signup</Link>
            </li> )
          }
          {isDidLogin &&
            (<li>
            <Link to="/me" >me</Link>
            </li> )
          }
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
