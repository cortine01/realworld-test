import { Routes, Route } from "react-router-dom"

import Footer from "./layout/Footer"
import Header from "./layout/header"

// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Settings from "./pages/Settings"
import Editor from "./pages/Editor"
import Article from "./pages/Article"
import Profile from "./pages/Profile"



function App() {

  return (
    <>
      <Header/>

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home/>} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Settings */}
        <Route path="/settings" element={<Settings />} />

        {/* Editor */}
        <Route path="/editor" element={<Editor />} />
        <Route path="/editor/:slug" element={<Editor />} />

        {/* Article */}
        <Route path="/article/:slug" element={<Article />} />

        {/* Profile */}
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/profile/:username/favorites" element={<Profile />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
