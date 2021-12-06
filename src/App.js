import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Pages/Home'
import Services from './components/Pages/Services'
import Products from './components/Pages/Products'
import SignUp from './components/Pages/SignUp'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
