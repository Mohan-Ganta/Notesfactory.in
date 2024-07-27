import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/AdminDashboard/Components/Dashboard';
import Register from './Components/UserDashboard/Components/Register/Register';
import NavBar from './Components/PageComponents/NavBar';
import Footer from './Components/PageComponents/Footer';
import Login from './Components/UserDashboard/Components/Login/Login';
import Landing from './Components/UserDashboard/Components/Dashboard';
import Cart from './Components/UserDashboard/Components/Cart/Cart';
import ProductCard from './Components/UserDashboard/Components/ProdectCard/ProdectCard';
import ProdectFullinfo from  './Components/UserDashboard/Components/ProdectCard/ProdectFullinfo';
import Payments from './Components/UserDashboard/Components/Payments';
import { AppProvider } from './Components/AppContext';
import VerifyProducts from './Components/AdminDashboard/Components/VerifyProducts';
function App() {
  return (
    <div className="App">
      
      <AppProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<ProductCard />}/>
          <Route path='/admin' element={<Dashboard />}/>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/payments' element={<Payments />}></Route>

          <Route path='/' element={<Landing/>} />
          <Route path='/pdfull' element={<ProdectFullinfo/>} />
          <Route path="/admin-notesfactory/@notesfactory" element={<VerifyProducts />} />
        </Routes>
      </BrowserRouter>
      </AppProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
