import './styles/App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup/signup';
import About from './pages/about';
import Home from './pages/home';
import Formulario from './pages/Formulario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Formulario" element={<Formulario />} />
          </Routes>
        </Router>
      </header>
    </div>
  )
}

export default App
