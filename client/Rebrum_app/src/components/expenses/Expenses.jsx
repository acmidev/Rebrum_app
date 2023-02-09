
import './expenses.css'


function Expenses(props) {
    return (
        <div className="expenses">
            <p className="cardTitle">{props.name}</p>
        </div>
    )
}

export default Expenses