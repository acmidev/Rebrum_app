import Budget from '../budget/Budget'
import Sink from '../sink/Sink'
import Expenses from '../expenses/Expenses'
import './userBudgets.css'


function UserBudgets () {
    
    return (
        <div className="budgets">
        <h3 >My Budgets</h3>
        <Budget name="Presupuesto coche" />
        <Sink name="Sink" />
        <Expenses name ="Expenses" />
        </div>
    )
}

export default UserBudgets