import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";


const  ExpensesList = props => {
    // Can create a variable to control the content and 
    // do all logic decisions out of the return
  
    if (props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
    }
    
    return(
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem 
                    key={expense.id} 
                    item={expense} 
                />
            ))}
        </ul>)
}

export default ExpensesList;