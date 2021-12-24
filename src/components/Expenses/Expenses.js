import React, {useState} from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
    const expensesList = props.expenses;
    const expensesShowedList = props.expensesShowed;
    const [filteredYear, setFilteredYear] = useState("2020");
    let year;

    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
        const filtered = expensesList.filter((expense) => {
            year = expense.date.getFullYear();
            return year.toString() === selectedYear;
        });
        console.log(filtered)
        props.onFilter(filtered);
     };

    return(
    <div className="">
        <Card className="expenses">    
            <ExpensesFilter 
                selected={filteredYear} 
                onFilterChange={filterChangeHandler} 
            />
            {expensesShowedList.map((expense) => (
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