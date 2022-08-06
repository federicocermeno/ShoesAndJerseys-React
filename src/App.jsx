import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import CartContextProvider from './context/cartContext';



function App() {
  return (
    <BrowserRouter>
        <CartContextProvider>
          <div className='App'>
            <NavBar />
            <Routes>
              <Route index path='/' element={<ItemListContainer greeting={'Shoes & Co Shop'} />}/>
              <Route path='/categoria/:categoriaId' element={<ItemListContainer />}/>
              <Route path='/detalle/:prodId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='*' element={ <Navigate to='/' /> } />
            </Routes>
          </div>
        </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
