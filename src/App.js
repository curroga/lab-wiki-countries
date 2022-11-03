import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <div id='country-container'>

      <Routes>
        <Route path='/' element={<CountriesList />} />
        <Route path='/country/:alpha3Code' element={<CountryDetails />} />
      </Routes>
      </div>

      
    </div>
  );
}

export default App;
