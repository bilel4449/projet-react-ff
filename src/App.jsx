

import { useSelector } from 'react-redux'
import './App.css'
import AjouterUser from './components/AjouterUser'
import ListUser from './components/ListUser'
import { useState } from 'react'
import FilterUser from './components/FilterUser'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Info from './components/Info'




function App() {
 const [filter, setFilter] = useState("")
const {users}=useSelector(state=>state)
console.log(users)
const handleFilter=(x)=>setFilter(x)
  return (
    <>
    <img src="https://icon2.cleanpng.com/20180920/att/kisspng-user-logo-information-service-design-5ba34f886b6700.1362345615374293844399.jpg" className='img'/>
     <FilterUser filter={filter} handleFilter={handleFilter}/>
    
    <AjouterUser/>
      
     <Router>
      <Routes>
        <Route path="/Info/:id" element={<Info user={users}/>}>

        </Route>
        <Route path='/' element={
      <ListUser users={users.filter(el=>el.id.includes(filter.toLowerCase()))}/>}>
      </Route>
      </Routes>
     </Router>

  
    </>
  )
}

export default App
