import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Countries from './Components/Countries/Countries';
import CountriesCard from './Components/CountriesCard/CountriesCard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/countries" element={<CountriesCard/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Countries/>
    </div>
  );
}

export default App;
