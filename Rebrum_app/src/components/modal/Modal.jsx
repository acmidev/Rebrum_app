
import './modal.css'


function Modal(props) {
    

    return (
        <div className="modalContainer">
            <div className="modal">
                <h3>My Income</h3>
                <form action="">
                    <div className="labelLine"><label htmlFor="mainIncome">Main Income:</label><input type="number"  placeholder="1 Million a day?"/> <button >Update</button></div>
                    <div className="labelLine"><label htmlFor="addBonus">Add 1 Time Bonus:</label><input type="number"  placeholder="Congrats for the Bonus"/> <button >Add</button></div>
                    <div className="labelLine"><label htmlFor="secondaryIncome">Secondary Income streams:</label><input type="number"  placeholder="1 Million a day?"/> <button >Update</button></div>
                </form>

                <p>This Month Gross Income(Include Bonus) <span>1000€</span></p>
            </div>
        </div>
    )
}

export default Modal