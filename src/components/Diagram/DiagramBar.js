import './DiagramBar.css'
const DiagramBar = (props) => {

    let barFiledHeight = '0%'

    if (props.maxValue > 0) {
        barFiledHeight = Math.round(props.value / props.allMoneyPerYear * 100) +'%'
    }

        return <div className='diagram-bar'>
            <div className='diagram-bar__inner'>
                    <div className='diagram-bar__fill'
                         style={{height: barFiledHeight}}>
                    </div>
            </div>
            <div className='diagram-bar__label'>
                {props.label}
            </div>
        </div>
}

export default DiagramBar