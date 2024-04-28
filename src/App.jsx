import './App.css'
import Modal from './components/Modal'
import Meals from './components/Meals'
import Search from './components/Search'
import Favouries from './components/Favouries'
import { useGlobalContext } from './context'

export default function App() {

  const { showModal, favorites } = useGlobalContext()
  return (
    <main>
      <Search />
      {favorites.length > 0 && <Favouries />}
      <Meals />
      {showModal && <Modal />}

    </main>
  )
}
