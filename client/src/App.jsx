import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from './pages/Landing/Landing'
import Author from './pages/Author/Author'

function App() {

let message = "hi"

 return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Author" element={<Author/>} />







    </Routes>
  </BrowserRouter>
);

}

export default App
