import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";


const INITIAL_STATE = [
    {
        id: 'c1',
        date: new Date(2023, 10, 10),
        description: "Frige",
        amount: 999.99
    },
    {
        id: 'c3',
        date: new Date(2023, 10, 10),
        description: "IPhone",
        amount: 1000
    },
    {
        id: 'c2',
        date: new Date(2022, 8, 15),
        description: "TV",
        amount: 777.77
    }
]

function App() {

    const [costs, setCosts] = useState(INITIAL_STATE)

    const addCostHandler = (cost) => {
        setCosts(prevCosts => {
            return [cost, ...prevCosts]
        })
    }

    return (
    <div>
        <NewCost onAddCost={addCostHandler}/>
        <Costs  costs={costs} />
    </div>
  );
}

export default App;
