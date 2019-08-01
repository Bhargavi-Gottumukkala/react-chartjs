import React from 'react';
import { Bar } from 'react-chartjs-2';

function CustomChart(props) {
    const barData = [95, 110, 130, 150, 158, 169];
    const colors = barData.map(value => (value <= 95) ? props.normal : (((value > 95) && (value < 140)) ? props.warning : props.critical));
    const chartData = {
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
    const options = {
        maintainAspectRatio: false,
        responsive: false
    }
    return (
        <Bar data={chartData} options={options} width={props.width} height={props.height} />
    )
}

export default CustomChart;