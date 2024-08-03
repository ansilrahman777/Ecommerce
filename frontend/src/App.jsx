import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/homepage'
import Product from './Pages/products'
import ProductDetails from './Pages/productdetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="product/" element={<Product />}></Route>
        <Route path="product-details/" element={<ProductDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
