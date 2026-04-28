import './App.css'
import FormSearch from './components/FormSearch'
import Movies from "./components/Movies";
import Bubbles from './components/Bubbles';


function App() {

  return (
      <div className='app'>
           <Bubbles />
           <FormSearch class="form-search"/>
           <Movies/>
      </div>
  )
}

export default App
