import {Component} from 'react';
import './App.css';
import UserListComp from './components/userProfile'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer'
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer'
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer'
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer'
  }
]

class App extends Component{
  state={searchInput:"",userDetailsList:initialUserDetailsList}

  onSearch = (Event) =>{
      this.setState({searchInput:Event.target.value})
  }
  deleteUser = (uniqueNo) =>{
    const {userDetailsList} = this.state
    const filteredUserData = userDetailsList.filter(each => each.uniqueNo !== uniqueNo)
    this.setState({userDetailsList:filteredUserData})
  }


  render(){
    const{searchInput,userDetailsList} = this.state
    const searchResults = userDetailsList.filter((eachItem) => eachItem.name.includes(searchInput))

    return <div className='bg-container'>
      <div className='container'>
        <h1 className='heading'>Users List</h1>
        <input type="search" onChange={this.onSearch} />
        <ul className='userlist'>
          {searchResults.map((eachUser)=> <UserListComp users={eachUser} key={eachUser.uniqueNo} deleteUser = {this.deleteUser} />)}
        </ul>
      </div>
    </div>
  }
}
export default App;
