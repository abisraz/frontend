import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Login from './component/main/Login';
import Home from './component/main/Home';
import Signup from './component/main/Signup';
import Main from './component/main';


function App() {
  return (

    <div>

      <BrowserRouter>
      
        <Routes>
            <Route path="/" element={<Navigate to="/main/home" />} />
          <Route path="main" element={<Main />}>
            <Route path="Home" element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
