import './Diagram.css'
import DiagramBar from "./DiagramBar";

const Diagram = (props) => {
    const dataSetsValue = props.dataSets.map(
        dataSet => dataSet.value
    )

    const allMoneyPerYear = dataSetsValue.reduce((sum, cur)=> sum+cur, 0)

    return <div className='diagram'>
        {props.dataSets.map((dataSet)=> (
            <DiagramBar
                key={dataSet.label}
                value={dataSet.value}
                allMoneyPerYear={allMoneyPerYear}
                label={dataSet.label}
            />
        ))}
        </div>
}

export default Diagram