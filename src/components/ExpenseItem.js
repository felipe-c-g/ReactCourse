import ExpenseDate from './ExpenseDate';
import Card from './Card.js';
import './ExpenseItem.css';



function ExpenseItem(props) {
    // All variables and constants used in this componet
    const id = props.item.id;
    const expenseDate = props.item.date;
    const expenseTitle = props.item.title;
    const expenseAmount = props.item.amount;

    return (
        <Card className="expense-item">
            <ExpenseDate date={expenseDate}/>
            <div className="expense-item__description">
                <h2 className="expense-item__title">{expenseTitle} </h2>
                <h2 className="expense-item__id">| ID: {id}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </Card>
    );
}


export default ExpenseItem;