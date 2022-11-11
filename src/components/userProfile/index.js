import './index.css'

const UserListComp = (props) =>{
    const {users,deleteUser} = props;
    const{uniqueNo,imageUrl,name,role} = users

    const onDelete = () =>{
        deleteUser(uniqueNo)
    }
    return <li className='cards'>
        <div className='card-container'>
            <img src={imageUrl} className="avatar" alt="avatar"/>
            <div className='user-desc'>
            <h1 className='name'>{name}</h1>
            <p className='desc'>{role}</p>
            </div>
            <div>
                <button className='delete-btn' type='button'onClick={onDelete} >
                <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="delete-img"
        />
                </button>
            </div>
        </div>

    </li>
}

export default UserListComp;