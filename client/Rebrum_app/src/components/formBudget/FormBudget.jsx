import { FiPlus, FiTrash } from "react-icons/fi";
import './formBudget.css'
import axios from "axios"




 async function formHandler(e) {
    e.preventDefault();
    const budgetName = e.currentTarget.elements.budgetName.value 
    const budgetDate = e.currentTarget.elements.budgetDate.value 
    const budgetCost = e.currentTarget.elements.budgetCost.value 
    const budgetInsurance = e.currentTarget.elements.budgetInsurance.value 
    const budgetMaintenance = e.currentTarget.elements.budgetMaintenance.value 
    const budget = [
        { name: budgetName},
        {date: budgetDate},
        {cost: budgetCost},
        {insurance: budgetInsurance},
        {maintenance: budgetMaintenance}
    ]
    localStorage.setItem("budget", JSON.stringify(budget))
    

    await axios.post("http://localhost:5000/budgets", budget)
    .then(response => console.log(response))

}



function FormBudget () {
   

    return (
        <div id="budgetForm">
                    <span ><FiTrash  /></span>
                <form onSubmit={formHandler} id="newBudgetForm" action="">
                    <div><label htmlFor="budgetName">Car Budget  </label> <input id="budgetName" type="text"  placeholder="Change Name"/></div>
                    <div><label htmlFor="budgetDate">Date to End </label> <input id="budgetDate" type="date"  /></div>
                    <div><label htmlFor="budgetCost">Cost</label> <input id="budgetCost" type="number"  placeholder="12000€"/></div>
                    <div><label htmlFor="budgetInsurance">Insurance cost Monthly</label> <input id="budgetInsurance"type="number"  placeholder="100€"/></div>
                    <div><label htmlFor="budgetMaintenance">Maintenance cost Yearly</label> <input id="budgetMaintenance" type="number"  placeholder="600€"/></div>
                    <button type="submit">Add</button>
                </form>
                    
                </div>
    )
}

export default FormBudget