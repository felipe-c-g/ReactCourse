import React, {useState} from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
    const expensesList = props.expenses;
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
    };

    const filtered = expensesList.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return(
    <div className="">
        <Card className="expenses">    
            <ExpensesFilter 
                selected={filteredYear} 
                onFilterChange={filterChangeHandler} 
            />
            {filtered.map((expense) => (
                <ExpenseItem 
                    key={expense.id} 
                    item={expense} 
                />
            ))}
        </Card >
    </div>
    );
}

export default Expenses;