import React, {useState} from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    // Consts and Variables
    // Per value is a very good aproach
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Using one genral state aproach
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    // Handlers
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // Updating like that can use inconsistents values
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // More secure to operate at the latest values
        // setUserInput((preState) => {
        //     return { ...preState, enteredTitle: event.target.value}
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        value={enteredTitle} 
                        onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type="number" 
                        value={enteredAmount} 
                        min="0.01" 
                        step="0.01" 
                        onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type="date" 
                        value={enteredDate} 
                        min="2019-01-01" 
                        max="2022-01-01" 
                        onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>             
        </form>
    )
};

export default ExpenseForm;