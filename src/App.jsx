import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import NewClient from './pages/NewClient'
import EditClient from './pages/EditClient'
import ViewCustomer from './pages/ViewCustomer'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="nuevo" element={<NewClient/>}/>
          <Route path="editar/:id" element={<EditClient/>}/>
          <Route path=":id" element={<ViewCustomer/>}/>
        </Route>         
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
