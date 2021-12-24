import React, {useState} from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
    const itemsList = props.expenses;
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
     };

    return(
    <div className="">
        <Card className="expenses">    
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
            <ExpenseItem item={itemsList[0]}></ExpenseItem>
            <ExpenseItem item={itemsList[1]}></ExpenseItem>
            <ExpenseItem item={itemsList[2]}></ExpenseItem>
            <ExpenseItem item={itemsList[3]}></ExpenseItem>
        </Card >
    </div>
    );
}

export default Expenses;