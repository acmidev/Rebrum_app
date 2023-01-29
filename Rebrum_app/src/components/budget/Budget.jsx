
import './budget.css'


function Budget(props) {
    return (
        <div className="budget">
            <p className="cardTitle">{props.name}</p>
            <p>Cost: <span>12000€</span></p>
            <p>Date: <span>11/02/2024</span></p>
            <p>Insurance: <span>100€ <span> per Month</span></span></p>
            <p>Maintenance: <span>600  <span>per Year</span></span></p>

        </div>
    )
}

export default Budget