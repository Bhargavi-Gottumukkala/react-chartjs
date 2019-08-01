import React from 'react';
import './App.css';
import CustomChart from './components/Chart';

function App() {
  const barData = [95, 110, 130, 150, 158, 169];
  const lineData = [100, 120, 140, 150, 160, 170];
  const lineLabel = 'Line Chart';
  const barLabel = 'Bar Chart';
  const borderWidth = 2;
  const borderColor='gray';
  
  return (
    <CustomChart 
    barData={barData} 
    lineData={lineData} 
    lineLabel={lineLabel} 
    barLabel={barLabel} 
    borderWidth={borderWidth}
    borderColor={borderColor}
    width={500} height={300} normal={'green'} warning={'orange'} critical={'red'}/>
  )
}

export default App;