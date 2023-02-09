import './userTools.css'


function UserTools (props){

    const handleClick = () => {
        props.setModalOpen(true)
    }
    return(
        <div className="userTools">
            <p className="userToolsTitle">User Options</p>
            <ul>
                <li>My Profile</li>
                <li onClick={handleClick}>My Income</li>
                <li>My Budgets</li>
                <li>Reports</li>
            </ul>

        </div>
    )

}

export default UserTools