import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Landing from './Pages/Landing';
import Dashboard from './Pages/Dashboard';
import Cart from './Components/Cart';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
