import React from 'react'
import Footer from './components/footers/Footer';
import Header from "./components/headers/Header";
import PokemonList from './components/lists/PokemonList';

function App() {
  return (
    <>
      <Header/>
        <PokemonList/>
      <Footer/>
    </>
  );
}

export default App;
