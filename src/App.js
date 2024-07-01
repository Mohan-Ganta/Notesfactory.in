import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/AdminDashboard/Components/Dashboard';
import Register from './Components/UserDashboard/Components/Register/Register';
import NavBar from './Components/PageComponents/NavBar';
import Footer from './Components/PageComponents/Footer'
import Login from './Components/UserDashboard/Components/Login/Login';
import Cart from './Components/UserDashboard/Components/Cart/Cart'
import ProductCard from "./Components/UserDashboard/Components/ProdectCard/ProdectCard"
function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cart />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<ProductCard />}/>
          <Route path='/admin' element={<Dashboard />}/>
          <Route path='register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
