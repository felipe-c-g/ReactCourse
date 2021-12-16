import './Expenses.css'
import ExpenseItem from './ExpenseItem';

function Expenses(props){
    const itemsList = props.expenses;

    return(
    <div className="expenses">    
        <ExpenseItem item={itemsList[0]}></ExpenseItem>
        <ExpenseItem item={itemsList[1]}></ExpenseItem>
        <ExpenseItem item={itemsList[2]}></ExpenseItem>
        <ExpenseItem item={itemsList[3]}></ExpenseItem>
    </div>
    );
}

export default Expenses