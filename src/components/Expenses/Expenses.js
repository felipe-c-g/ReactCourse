import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'

function Expenses(props){
    const itemsList = props.expenses;

    return(
    <Card className="expenses">    
        <ExpenseItem item={itemsList[0]}></ExpenseItem>
        <ExpenseItem item={itemsList[1]}></ExpenseItem>
        <ExpenseItem item={itemsList[2]}></ExpenseItem>
        <ExpenseItem item={itemsList[3]}></ExpenseItem>
    </Card >
    );
}

export default Expenses;