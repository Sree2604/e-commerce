import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Wishlist from "./pages/Wishlist"
import ProductPage from "./pages/ProductPage"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/view/:id" element={<ProductPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
