import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './CrudAapp/Home'
import Create from './CrudAapp/Create'
import Update from './CrudAapp/Update'
 
function App() {
  return (
    <BrowserRouter>
    <Routes> 
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
