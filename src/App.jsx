import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import CategoryArticle from './pages/CategoryArticle/CategoryArticle'
import Header from './components/Header/Header'

function App() {
  

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/category/:categoryName' element={<CategoryArticle />} />

    </Routes>
      
    </BrowserRouter>
  )
}

export default App
