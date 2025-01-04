
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
import styles from "./css/App.module.css"
function App() {
 return (
  <div className={styles.wrapper}>
  <Header />
  <main className={styles.main}>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Topics />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:article_id" element={<SingleArticle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
  <Footer />
</div>

 )
}

export default App
