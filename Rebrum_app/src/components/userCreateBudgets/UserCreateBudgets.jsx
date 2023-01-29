
import { FiPlus, FiTrash } from "react-icons/fi";
import './userCreateBudgets.css'
import { useState, useEffect } from 'react'



function UserCreateBudgets () {
    const [openForm, setOpenForm] = useState(true)
    
    
    const handleForm = () => {
        setOpenForm(prev => !prev);
        console.log(openForm)
      };
   
    

    
    return (
        
        <div className="createBudgets">
            <hr ></hr>
            <h3>Create Budgets</h3>
            <div   className="createbudgetContainer">
                <div onClick={handleForm} className="defaultBudget">
                    {openForm === true ?
                    <p>Cancel</p> : 
                    <p>Create new Default Budget</p>
                    
                     }
                </div>
                <div className="createNewBudget"><p>Create Personalized Budget</p> <FiPlus /></div>
                
                {openForm === true &&
                <div id="budgetForm">
                    <span onClick={handleForm} ><FiTrash  /></span>
                <form id="newBudgetForm" action="">
                    <div><label htmlFor="budgetName">Car Budget  </label> <input id="budgetName" type="text"  placeholder="Change Name"/></div>
                    <div><label htmlFor="budgetDate">Date to End </label> <input id="budgetDate" type="date"  /></div>
                    <div><label htmlFor="budgetCost">Cost</label> <input id="budgetCost" type="number"  placeholder="12000€"/></div>
                    <div><label htmlFor="budgetInsurance">Insurance cost Monthly</label> <input id="budgetInsurance"type="number"  placeholder="100€"/></div>
                    <div><label htmlFor="budgetMaintenance">Maintenance cost Yearly</label> <input id="budgetMaintenance" type="number"  placeholder="600€"/></div>
                    <button type="submit">Add</button>
                </form>
                    
                </div>
                }
            </div>

        </div>
    ) 
}

export default UserCreateBudgets