import { Routes, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import HomePage from './pages/HomePage';
import BeersList from './pages/BeersList';
import Navbar from './components/Navbar';
import BeerDetail from './pages/BeerDetail';
import RandomBeer from './pages/RandomBeer';

function App() {
  return (
    <div className="App justify-content-center">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/beers' element={[<Navbar />,<BeersList />]}/>
        <Route path='/beers/:id' element={[<Navbar />,<BeerDetail />]}/>
        <Route path='/beers/random-beer' element={[<Navbar />,<RandomBeer />]}/>
      </Routes>
    </div>
  );
}

export default App;
