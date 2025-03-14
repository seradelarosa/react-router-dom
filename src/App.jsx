import { useState } from 'react';
import { Route, Routes } from 'react-router';
import PokemonList from './components/PokemonList/PokemonList';
import NavBar from './components/NavBar/NavBar.jsx';

const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);
  return (
    <>

      <h1>Pokemon!</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={ <h2> Home Page </h2> } />
        {/* passing state as a prop */}
        <Route path='/pokemon' element={<PokemonList pokemon={pokemon} />} />
      </Routes>
    </>
  );
};

export default App;

