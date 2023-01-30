
import { FiPlus } from "react-icons/fi";
import './userCreateBudgets.css'
import React, { useState, useEffect } from 'react'
import UserTools from '../userTools/UserTools'
import FormBudget from '../formBudget/FormBudget'
import { animated, useTransition  } from "@react-spring/web";

//Para las animaciones con react spring, lo mejor es buscar la documentación porque es un poco lio por ahora.
function UserCreateBudgets (props) {
   
    console.log(props.userToolsOpen)
    const [openForm, setOpenForm] = useState(false)

    const transition = useTransition(props.userToolsOpen, {
        from: {y: -100, opacity: 0},
        enter: {y: 0, opacity: 1},
        leave: {y: -100, opacity: 0},
       

    })
    
   
    
    console.log(transition)

    
    
    const handleForm = () => {
        setOpenForm(prev => !prev);
        console.log(openForm)
      };
   
    

    
    return (
        <div className="createBudgetContainer">
        {transition((style, item ) => item ?
        <animated.div style={style} ><UserTools/></animated.div> : '')}
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