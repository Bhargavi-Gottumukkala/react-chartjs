import React from 'react';
import { Bar } from 'react-chartjs-2';

const CustomChart = props => {
    const barData = props.barData;
    // array of colors based on the array of barData values.
    const colors = barData.map(value => (value <= 95) ? props.normal : (((value > 95) && (value < 140)) ? props.warning : props.critical));
    const chartData = {
        labels: ['data1', 'data2', 'data3', 'data4', 'data5', 'data6'],
        datasets: [{
            type: 'line',
            label: props.lineLabel,
            borderColor: props.borderColor,
            borderWidth: props.borderWidth,
            fill: false,
            data: props.lineData
        }, {
            type: 'bar',
            label: props.barLabel,
            data: barData,
            backgroundColor: colors,
            borderWidth: props.borderWidth
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