
import UserBudgets from '../userBudgets/UserBudgets'
import UserCreateBudgets from '../userCreateBudgets/UserCreateBudgets'
import './mainSection.css'


function MainSection () {
    return (
        <section className="mainSection" >
            <UserBudgets />
            <UserCreateBudgets />            
        </section>
    )
}

export default MainSection