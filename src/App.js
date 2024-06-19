import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Profile from './Components/Profile';
import Works from './Components/Works';
import Internships from './Components/Internships';
import Certifications from './Components/Certifications';
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="hero">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/works' element={<Works/>}/>
        <Route path='/intern' element={<Internships/>}/>
        <Route path='/certificate' element={<Certifications/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
