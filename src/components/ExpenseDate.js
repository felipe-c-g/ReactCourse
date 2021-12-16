import './ExpenseDate.css';

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
}


function ExpenseDate(props) {
    const day = props.date.toLocaleString('pt-BR', { day: '2-digit'})
    const month = props.date.toLocaleString('pt-BR', { month: 'long'})
    const finalMonthName = capitalize(month)
    const year = props.date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{finalMonthName}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;