import React from 'react';
import './App.css';
import NavMenu from './assets/Components/NavMenu';
import FirstIngredient from './assets/Components/FirstIngredient';

function App() {

  return (
    <div className="App">
      <NavMenu />

      <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lf:items-start items-center'>
        <h1 className='mt-32 text-4xl text:4xl font-bold text-cyan-500'>Cooking Timer</h1>
      </div>

      <FirstIngredient />

    </div>
  )
}

export default App;
