import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from './pages/Landing/Landing'
import Author from './pages/Author/Author'

import Register from './pages/Register/Register'


function App() {

let message = "hi"

return (
  <BrowserRouter>


    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Author" element={<Author/>} />
      <Route path='/register' element={<Register/>} />






    </Routes>
  </BrowserRouter>
);

}

export default App
