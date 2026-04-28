import './App.css'
import Bubbles from './components/Bubbles';
import { Route, Routes, HashRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import SingleMovie from './components/SingleMovie';
import { HashRouter } from 'react-router-dom';


function App() {

  return (
      <div className='app'>
        <HashRouter basename='/AXPELIS'>
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/movies/:id" element={<SingleMovie/>} />
            </Routes>
        </HashRouter>
      </div>
  )
}

export default App
