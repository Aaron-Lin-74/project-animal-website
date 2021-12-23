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
import Error from './components/Pages/Error'
import Animals from './components/Pages/Animals'
import Dashboard from './components/Pages/Dashboard'
import AnimalType from './components/AnimalType'
import { AuthProvider } from './components/contexts/AuthContext'
import RequireAuth from './components/RequireAuth'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Submenu />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/sign-up' element={<SignUp />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/animals' element={<Animals />}>
              <Route path=':animalType' element={<AnimalType />}></Route>
            </Route>
            <Route
              path='/dashboard'
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            ></Route>
            <Route path='*' element={<Error />}></Route>
          </Routes>

          <Footer />
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
