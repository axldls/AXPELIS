import './App.css'
import { Route, Routes, HashRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import SingleMovie from './components/SingleMovie';
import Footer from './components/Footer';


function App() {

  return (
      <div className='app'>
        <HashRouter>
            <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/movies/:id" element={<SingleMovie/>} />
            </Routes>
        </HashRouter>
        <Footer />
      </div>
  )
}

export default App
