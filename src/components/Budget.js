import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);

    const totalExp = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (evt) => {
        if(evt.target.value < totalExp) {
            alert("Amount Lower than Current Amount Spent")
        }
        else if (evt.target.value > 20000) {
            alert("Max Budget is 20,000")
        }
        else {
            dispatch({type: "SET_BUDGET", payload: evt.target.value})  
        }      
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input 
            type="number" 
            step={10} 
            value={budget} 
            onChange={handleBudgetChange}/>
        </div>
    );
};
export default Budget;