import { Dropdown } from "bootstrap";
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
const CurrDropDown = () => {

    const { currency, dispatch } = useContext(AppContext);

    const currLabels = [
        { symbol: "$", label: "Dollar" },
        { symbol: "£", label: "Pound" },
        { symbol: "€", label: "Euro" },
        { symbol: "₹", label: "Rupee" },
    ]    

    const handleChangeCurrency = (value)=>{
        dispatch({type:"CHG_CURRENCY", payload: value});
    }

    return (

        <div className="dropdown">
            <button 
            className="btn btn-secondary dropdown-toggle" 
            type="button" data-bs-toggle="dropdown" 
            aria-expanded="false" 
            style={{ background: "#93e499", borderColor: "#93e499", height:"4em" }}>
            Currency ({currency} {currLabels.find((currVal)=> {return currVal.symbol === currency}).label})
            </button>
            <ul className="dropdown-menu" style={{ background: "#93e499"}}>
                {currLabels.map((item, index) => {
                    return (
                        <li 
                        key={index} 
                        onClick={()=>{handleChangeCurrency(item.symbol)}}>
                            <a className="dropdown-item" href="#">{item.symbol} {item.label}</a>
                        </li>
                    )
                })}
            </ul>
        </div>

    );
};
export default CurrDropDown;