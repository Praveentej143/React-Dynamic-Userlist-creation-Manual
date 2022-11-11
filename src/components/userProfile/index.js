import './index.css'

const UserListComp = (props) =>{
    const {users} = props;
    const{uniqueNo,imageUrl,name,role} = users
    return <li className='cards'>
        <div className='card-container'>
            <img src={imageUrl} className="avatar" alt="avatar"/>
            <div className='user-desc'>
            <h1 className='name'>{name}</h1>
            <p className='desc'>{role}</p>
            </div>
        </div>

    </li>
}

export default UserListComp;