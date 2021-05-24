import React from 'react';

import ChartBar from "./chartBar";
import "./chart.css";

const Chart = () => {

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => 
            <ChartBar 
            key = {dataPoint.label}
            value={dataPoint.value} 
            maxValue={null} 
            label={dataPoint.label} 

            />)}
        </div>
    )
}

export default Chart