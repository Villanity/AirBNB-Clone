import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Cards from './components/Cards'
import Data from '../src/data';



function App() {
  const CardElements = Data.map(item => {
    return (
      <Cards 
         key = {item.id}
         item = {item}
      /> )}) 


  return (
    <>
    <Nav />
    <Hero />
    <section className='Cards-List'>
      {CardElements}
    </section>
    </>
  );
}

export default App;
