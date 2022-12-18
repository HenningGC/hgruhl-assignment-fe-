import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { Recipe } from './components/Recipe'

function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = {<HomePage/>} path="/" exact/>
          <Route element = {<Recipe/>} path="/:id"/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
