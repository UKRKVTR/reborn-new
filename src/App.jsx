import './App.css'
import ItemList from './components/itemList'
import Nav from './components/navigation'
import Home from './pages/home'

function App () {
  return (
    <div>
      <Nav /> <Home /> <ItemList />
    </div>
  )
}

export default App
