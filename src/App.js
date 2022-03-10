import './App.css';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { Cart } from './Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="components">
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<>
            <Header />
            < Home />
          </>} />

          <Route path="/cart" element={
            <>
              <Header />
              <Cart />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
