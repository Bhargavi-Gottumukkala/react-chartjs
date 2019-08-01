
import React from 'react';
import './App.css';
import CustomChart from './components/Chart';

function App() {
  return (
    <CustomChart width={500} height={300} normal={'green'} warning={'orange'} critical={'red'}/>
  )
}

export default App;
