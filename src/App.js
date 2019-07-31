
import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }

  componentWillMount() {
    this.getChartData();
  }


  getChartData() {
    const barData = [95, 110, 130, 150, 158, 169];
    const colors = barData.map(value => (value <= 95) ? 'green' : (((value > 90) && (value < 140)) ? 'orange' : 'red'));
    this.setState({
      chartData: {
        labels: ['data1', 'data2', 'data3', 'data4', 'data5', 'data6'],
        datasets: [{
          type: 'line',
          label: 'Line Chart',
          borderColor: 'gray',
          borderWidth: 2,
          fill: false,
          data: [100, 120, 140, 150, 160, 170]
        }, {
          type: 'bar',
          label: 'Bar Chart',
          data: barData,
          borderColor: 'white',
          backgroundColor: colors,
          borderWidth: 2
        }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartData} />
      </div>
    );
  }
}

export default App;
