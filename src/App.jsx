import './App.css'
import FormSearch from './components/FormSearch'
import Movies from "./components/Movies";


function App() {

  return (
      <div className='app'>
           <FormSearch class="form-search"/>
           <Movies/>
      </div>
  )
}

export default App
