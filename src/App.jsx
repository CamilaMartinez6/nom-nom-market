import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  const aviso = "Próximamente productos aquí!"

  return (
  <>
    <NavBar />
    <ItemListContainer aviso={aviso} />
  </>
  )
}

export default App
