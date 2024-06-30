import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/AdminDashboard/Components/Dashboard';
import ProdectFullinfo from './Components/UserDashboard/Components/ProdectCard/ProdectFullinfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
