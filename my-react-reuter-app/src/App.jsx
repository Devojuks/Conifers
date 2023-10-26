import { Routes, Route } from 'react-router-dom';

import NavigationBar from './components/navigation/NavigationBar';
import './App.css'
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/contact/ContactPage';
import Projectpage from './components/product/Projectpage';
import ProfilePage from './components/profile/ProfilePage';
import ProfileCard from './components/profile/ProfileCard';
import './components/profile/profile.css'

function App() {
  

  return (
    <>
      <NavigationBar></NavigationBar>
      <h1>React Reuter Class</h1>
      <Routes>
        <Route path='/' element={ <HomePage />}/>
        <Route path='/about' element={ <AboutPage />}/>
        <Route path='/products' element={ <Projectpage />}/>
        <Route path='/profile' element={ <ProfilePage />}/>
        <Route path='/contact' element={ <ContactPage />}/>
      </Routes>
      <ProfileCard />
      
    </>
  )
}

export default App;
