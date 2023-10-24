import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './Pages/Home'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Profile from './Pages/Profile'
import About from './Pages/About'
import Header from './Components/Header'
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
     <Route path='/home' element ={<Home />}/>
     <Route path='/about' element ={<About />}/>
     <Route path='/profile' element ={<Profile />}/>
     <Route path='/sign-in' element ={<Signin />}/>
     <Route path='/sign-up' element ={<Signup />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App