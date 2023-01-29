
import './budget.css'


function Budget(props) {
    return (
        <div className="budget">
            <p className="cardTitle">{props.name}</p>
        </div>
    )
}

export default Budget