
import './App.css'
import {Routes,Route} from "react-router-dom"
import { Home } from './pages/Home'
import { Details } from './pages/Details';

function App() {

  return (
    <>
     <Routes>
  <Route>
  <Route path="/" element={<Home/>}/>
  <Route path="/restaurantdetails/:id" element={<Details/>}/>
  </Route>
  </Routes>
    </>
  )
}

export default App
