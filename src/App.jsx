
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginView from "../components/login/LoginView"
import ChatView from '../components/chat/ChatView'
import { RequireAuth } from '../components/RequireAuth'


function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<LoginView />} />
          <Route path='chatview' element={<RequireAuth><ChatView /></RequireAuth>} />
      </Routes>
    </>
  )
}

export default App
