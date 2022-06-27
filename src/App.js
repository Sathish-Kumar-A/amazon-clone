import './App.css';
import toast, { Toaster } from "react-hot-toast";
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { Cart } from './Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from './login/Login';
import { Payment } from './Payment/Payment';
import {Signup} from './signup/Signup';

function App() {
  return (
    <div className="components">
      {/* <Header /> */}
      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes>

          <Route path='/' element={<>
            <Header />
            < Home />
          </>} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/cart" element={
            <>
              <Header />
              <Cart />
            </>
          } />

          <Route path="/payment" element={<><Header/><Payment /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
