
import './App.css'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import {Route,Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/contact' element ={<Contact/>}/>
    </Routes>
      
        
    </>
  )
}

export default App
