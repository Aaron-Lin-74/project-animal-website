import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Pages/Home'
import Services from './components/Pages/Services'
import Products from './components/Pages/Products'
import SignUp from './components/Pages/SignUp'
import Login from './components/Pages/Login'
import Submenu from './components/Submenu'
import Mammals from './components/Pages/Animals/Mammals'
import Birds from './components/Pages/Animals/Birds'
import Reptiles from './components/Pages/Animals/Reptiles'
import Fish from './components/Pages/Animals/Fish'
import Amphibians from './components/Pages/Animals/Amphibians'
import Invertebrates from './components/Pages/Animals/Invertebrates'
import Error from './components/Pages/Error'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Submenu />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/animals/mammals' element={<Mammals />}></Route>
          <Route path='/animals/birds' element={<Birds />}></Route>
          <Route path='/animals/reptiles' element={<Reptiles />}></Route>
          <Route path='/animals/fish' element={<Fish />}></Route>
          <Route path='/animals/amphibians' element={<Amphibians />}></Route>
          <Route
            path='/animals/invertebrates'
            element={<Invertebrates />}
          ></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
