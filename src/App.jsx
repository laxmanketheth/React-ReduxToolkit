import Cart from "./components/Cart/Cart"
import Products from "./components/products/Products"
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from "./pages/Home"
import { Provider } from "react-redux"
import store from "./store/store"
import ProductDetails from "./components/productDetails/ProductDetails"


function App() {


  return (
    <>
    <Provider store ={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id" element= {<ProductDetails/>} />
        <Route path="/cart"  element={<Cart/>} />
      </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
