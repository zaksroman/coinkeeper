import './NewCost.css'
import CostForm from "./CostForm";
import React, {useState} from "react";

const NewCost =(props) => {

    const [isFormVisible, setFormVisible] =useState(false)

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            id: Math.random().toString(),
            ...inputCostData
        }
        props.onAddCost(costData)
        setFormVisible(false)
    }

    const inputCostDataHandler = (event) => {
        setFormVisible(true)
    }

    const cancelCostHandler = (event) => {
        setFormVisible(false)
    }

    return <div className='new-cost'>
        {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}
        {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler}/>}
    </div>
    
}

export default NewCost