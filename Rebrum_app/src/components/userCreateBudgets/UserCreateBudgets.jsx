
import { FiPlus, FiTrash } from "react-icons/fi";
import './userCreateBudgets.css'
import React, { useState, useEffect } from 'react'
import AdminTools from "../userTools/UserTools";
import FormBudget from '../formBudget/FormBudget'


function UserCreateBudgets (props) {
    const [openForm, setOpenForm] = useState(false)
    
    
    const handleForm = () => {
        setOpenForm(prev => !prev);
        console.log(openForm)
      };
   
    

    
    return (
        <div className="createBudgetContainer">
        {props.userToolsOpen === true &&
        <AdminTools />}
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
            </div>
    ) 
}

export default UserCreateBudgets