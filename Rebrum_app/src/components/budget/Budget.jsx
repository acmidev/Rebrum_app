
import './budget.css'
import { useEffect } from 'react'
    


function Budget(props) {
    var lastBudget = JSON.parse(localStorage.getItem('budget'))
    const budgetName =lastBudget[0].name
    const budgetDate =lastBudget[1].date
    const budgetCost =lastBudget[2].cost
    const budgetInsurance =lastBudget[3].insurance
    const budgetMaintenance =lastBudget[4].maintenance
        
          

    
    return (
        <div className="budget">
            <p className="cardTitle">Presupuesto {budgetName}</p>
            <p>Cost: <span>{budgetCost}</span></p>
            <p>Date: <span>{budgetDate}</span></p>
            <p>Insurance: <span>{budgetInsurance}€ <span> per Month</span></span></p>
            <p>Maintenance: <span>{budgetMaintenance} € <span>per Year</span></span></p>

        </div>
    )
}

export default Budget