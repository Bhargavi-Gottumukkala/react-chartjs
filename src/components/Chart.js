import React from 'react';
import {Bar} from 'react-chartjs-2';

function Chart(props) {
    return <Bar data={props.chartData} width={1060} height={360} />
}

export default Chart;