
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Topics from './components/Topics'
import Articles from './components/Articles'
import SingleArticle from './components/SingleArticle'
import Login from './components/Login'
import NotFound from './components/NotFound'
function App() {
 return (
  <>  
   <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Topics/>}></Route>
        <Route path="/articles" element={<Articles/>}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>

      </Routes>
   <Footer/>
  </>
 )
}

export default App
