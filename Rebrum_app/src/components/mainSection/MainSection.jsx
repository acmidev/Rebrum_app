
import UserBudgets from '../userBudgets/UserBudgets'
import UserCreateBudgets from '../userCreateBudgets/UserCreateBudgets'
import './mainSection.css'


function MainSection (props) {
    
    return (
        <section className="mainSection" >
            <UserBudgets  />
            <UserCreateBudgets userToolsOpen={props.userToolsOpen} />            
        </section>
    )
}

export default MainSection