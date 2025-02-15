import {} from 'react'
import Layout from './components/layout/Layout'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Pagenotfound from './pages/Pagenotfound'

const App = () => {
  return (
    <div>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/menu" element={<Menu/>} />
    <Route path="*" element={<Pagenotfound/>} />
   </Routes>
    </div>
  )
}

export default App