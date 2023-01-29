
import { FiPlus, FiTrash } from "react-icons/fi";
import './userCreateBudgets.css'
import { useState, useEffect } from 'react'
import FormBudget from '../formBudget/FormBudget'


function UserCreateBudgets (props) {
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
                <FormBudget   />
                }
            </div>

        </div>
    ) 
}

export default UserCreateBudgets