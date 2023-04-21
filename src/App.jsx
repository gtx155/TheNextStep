import './App.css'
import './ScrollbarStyle.css'
import { Route, Routes } from 'react-router-dom';
import { AlbumsPage } from "./pages/AlbumsPage";
import { Home } from "/src/pages/Home";
import { NotFound } from "/src/pages/NotFound";



function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route path='/AlbumsPage' element={<AlbumsPage />}/>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
