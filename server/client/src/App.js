import React from 'react';
import Home from './Screen/Home.js'
import Login from './Screen/Login.js'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './Screen/Signup.js';
import { CartProvider } from './Components/ContextReducer.js';
import Cart from './Screen/Cart.js'
import MyOrder from './Screen/MyOrder.js';
function App() {
  return (
    
    
   <CartProvider>
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route exact path='/login' element={<Login/>}></Route>
    <Route exact path='/signup' element={<Signup/>}></Route>
    <Route exact path='/myOrder' element={<MyOrder/>}></Route>
    
    </Routes>
    </BrowserRouter>
    </>
    </CartProvider>
    
  );
}

export default App;
