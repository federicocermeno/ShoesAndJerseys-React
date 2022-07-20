import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer/ItemListContainer'


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Escribiendo desde la prop del componente ItemListContainer'} />
    </>
  )
}

export default App
