
import UserBudgets from '../userBudgets/UserBudgets'
import UserCreateBudgets from '../userCreateBudgets/UserCreateBudgets'
import Modal from '../modal/Modal'
import './mainSection.css'
import { useState } from 'react'


function MainSection (props) {
    const [modalOpen,setModalOpen] = useState(false)
    return (
        <section className="mainSection" >
            {modalOpen ==true ?

            <Modal setModalOpen={setModalOpen} />:
            ''
            }
            <UserBudgets  />
            <UserCreateBudgets userToolsOpen={props.userToolsOpen} setModalOpen={setModalOpen} />            
        </section>
    )
}

export default MainSection