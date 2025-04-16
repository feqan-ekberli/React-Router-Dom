import { BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import './App.css'
import Header  from './Components/Header/Header'
import Footer from  './Components/Footer/Footer'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Posts from './Pages/Posts/Posts'
import Home from './Pages/Home/Home'

function App() {
  

  return (
    <>
      <Router>
        <Header/>

          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/posts' element={<Posts/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
          
        <Footer/>
      </Router>
    </>
  )
}

export default App
