import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [addFormState, setAddFormState] = useState(false);  
    
    const startFormHandler = () => {
        console.log("Changed Form State",true)
        setAddFormState(true);
    }

    const cancelFormHandler = () => {
        console.log("Changed Form State",false)
        setAddFormState(false);
    }
    
    // This handler will be executed inside the component ExpenseForm
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)

    };

    let newElementFormContent = <button onClick={startFormHandler}>Add New</button>
    if (addFormState){
        newElementFormContent = 
        <ExpenseForm 
            onCancel={cancelFormHandler} 
            onSaveExpenseData={saveExpenseDataHandler} 
        /> 
    }

    return (
        <div className="new-expense">
            {newElementFormContent}    
        </div>
    )
};

export default NewExpense;

