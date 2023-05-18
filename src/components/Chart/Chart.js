
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value);//transform array of objects into array of numbers.
const totalMaximum=Math.max(...dataPointValues);//passed these no.s into Math.max() & pulled out no.s from array using spread operator.

    return (
    <div className='chart'>
            {props.dataPoints.map(dataPoint => 
                <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label} />)}
    </div>
    );



};

export default Chart