import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import Edit from './Edit'
import Error from './Error'

const RoutingFiles = () => {
  return (
    <>
       <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/student" element={<Student/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/student/edit" element={<Edit/>}/>
          <Route path="/*" element={<Error/>}/>
        
       </Routes>
       
    </>
  )
}

export default RoutingFiles