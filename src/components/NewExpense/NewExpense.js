import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [addFormState, setAddFormState] = useState(false);
    
    
    const formButtonHandler = () => {
        console.log("CHanged Form State")
        setAddFormState(true);
    }

    const cancelButtonHandler = () => {
        console.log("Changed Form State")
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

    let newElementFormContent = <button onClick={formButtonHandler}>Add New</button>
    if (addFormState){
        newElementFormContent = <ExpenseForm onCancel={cancelButtonHandler} onSaveExpenseData={saveExpenseDataHandler} /> 
    }

    return (
        <div className="new-expense">
            {newElementFormContent}    
        </div>
    )
};

export default NewExpense;

