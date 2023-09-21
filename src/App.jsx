
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Register from './pages/Register'
import "./style.scss";
import Login from './pages/Login';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
                <Home />
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
