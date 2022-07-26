import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'buenas'} />}/>
          <Route path='/detalle/:prodId' element={<ItemDetailContainer />}/>
          {/* <Route path='/cart' element={<Cart />}/> */}

          <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
