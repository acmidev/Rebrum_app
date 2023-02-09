import { useState, useEffect } from 'react'
import './modal.css'


function Modal(props) {
   

    const [mainIncome, setMainIncome] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [secondIncome, setSecondIncome] = useState(0)
    const [sum,setSum] = useState(0)
    const salary = {
        main: mainIncome,
        bonus: bonus,
        second: secondIncome
    }

  
   

    useEffect(()=> {
        const retrieveSalary = JSON.parse(localStorage.getItem('Salary'))
        if(retrieveSalary != null) {

            setMainIncome(parseInt(retrieveSalary.main))
            setBonus(parseInt(retrieveSalary.bonus))
            setSecondIncome(parseInt(retrieveSalary.second))
                    
            const sumArray = [mainIncome, secondIncome, bonus]
            setSum(sumArray.reduce((acum, current) => acum + current))       
            
        }
     },[])

   

     

    const handleChange = (event) => {
        const eventType = event.target.id
        switch (eventType) {
            case 'mainIncome':
                setMainIncome(event.target.value)
                break;
            case 'addBonus':
                setBonus(event.target.value)
                break;
            case 'secondIncome':
                setSecondIncome(event.target.value)
        }
    }
    const handleSalary = (event) => {
        event.preventDefault()
        localStorage.setItem('Salary', JSON.stringify(salary))

        
        

    }
    const handleCloseModal = (e) => {
        if(e.target.className == "modalContainer") {
            props.setModalOpen(false)
        }
    }
    

    return (
        
        <div className="modalContainer" onClick={handleCloseModal}>
            <div className="modal">
                <h3>My Income</h3>
                <form action="">
                    <div className="labelLine"><label htmlFor="mainIncome">Main Income:</label> <input onChange={handleChange} type="number" name="mainIncome" id="mainIncome"  placeholder="1 Million a day?"/> <button  onClick={handleSalary} >Set Income</button></div>
                    <div className="labelLine"><label htmlFor="addBonus">Add 1 Time Bonus:</label><input onChange={handleChange} type="number" name="addBonus" id="addBonus"  placeholder="Congrats for the Bonus"/> <button onClick={handleSalary} >Add Bonus</button></div>
                    <div className="labelLine"><label htmlFor="secondaryIncome">Secondary Income streams:</label><input onChange={handleChange} type="number" name='secondIncome' id='secondIncome'  placeholder="1 Million a day?"/> <button onClick={handleSalary} >Add Second Income</button></div>
                </form>

                <p>This Month Gross Income(Include Bonus) <span>{sum}$</span></p>
                <p>Your Info: <span>Your Salary is: {mainIncome} $ </span> <br /> <span>Your Last Bonus: {bonus}</span> <br /> <span>Your Secondary Income:{secondIncome}</span>   </p>
            </div>
        </div>
    )
}

export default Modal