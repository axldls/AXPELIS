import './App.css'
import Bubbles from './components/Bubbles';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import SingleMovie from './components/SingleMovie';


function App() {

  return (
      <div className='app'>
        <Bubbles/>
        <BrowserRouter basename='/AXPELIS'>
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/movies/:id" element={<SingleMovie/>} />
            </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
