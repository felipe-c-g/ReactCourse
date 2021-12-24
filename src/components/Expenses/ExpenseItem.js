import React, {useState} from 'react'

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';



function ExpenseItem(props) {

    console.log("ExpenseItem evaluated by React");
    // All variables and constants used in this componet
    const id = props.item.id;
    const expenseDate = props.item.date;
    const [title, setTitle]= useState(props.item.title);
    const [expenseAmount, setAmount] = useState(props.item.amount);

    // Functions
    const clickHandler = () => {
        console.log("Clicked!");
        // This function will call the component again, updating the value
        // Evaluating again
        setTitle("Teste"); 
        setAmount("100.00");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={expenseDate}/>
            <div className="expense-item__description">
                <h2 className="expense-item__title">{title} </h2>
                <h2 className="expense-item__id">| ID: {id}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
            <button onClick= {clickHandler}>OK</button>
        </Card>
    );
}


export default ExpenseItem;