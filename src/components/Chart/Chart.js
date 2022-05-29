import "./Chart.css";
import ChartBar from "./ChartBar";
export default function Chart(props) {
    const values = props.dataPoints.map(value => value.value)
    const max = Math.max(...values)
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={max}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
}
