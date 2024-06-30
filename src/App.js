import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/AdminDashboard/Components/Dashboard';
import Register from './Components/UserDashboard/Components/Register/Register';
import NavBar from './Components/PageComponents/NavBar';
import Footer from './Components/PageComponents/Footer'
import Login from './Components/UserDashboard/Components/Login/Login';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>

          <Route path='/login' element={<Login />}/>
          <Route path='/admin' element={<Dashboard />}/>
          <Route path='register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
