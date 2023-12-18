import './App.css';
import { HashRouter , Routes , Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import PetMart from './components/PetMart/PetMart';
import About from './components/About/About';
import PetGuide from './components/PetGuide/PetGuide';
import Contact from './components/Contact/Contact';
import NoPage from './components/NoPage/NoPage';
import OrganicFood from './components/Foods/OrganicFood';
import GoodFood from './components/Foods/GoodFood';
import PetGrooming from './components/Foods/PetGrooming';

function App() {
  return (
    <div className="App">
     <HashRouter>
     <Routes>
      <Route path='/' element={<Layout/>}> 
      <Route index element={<Home/>}/>
      <Route path='petmart' element={<PetMart/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='petguide' element={<PetGuide/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='organicfood' element={<OrganicFood/>}/>
      <Route path='goodfood' element={<GoodFood/>}/>
      <Route path='petgrooming' element={<PetGrooming/>}/>
      <Route path='*' element={<NoPage/>}/>
      </Route>
     </Routes>
     </HashRouter>
    </div>
  );
}

export default App;
