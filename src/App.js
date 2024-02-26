import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialuserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'rajesh',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'divya',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'madhumathi',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'hari',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchInput: '', userdetailslist: initialuserDetailsList}

  onchange = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  userdelete = uniqueNo => {
    const {userdetailslist} = this.state
    const filterresult = userdetailslist.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({userdetailslist: filterresult})
  }

  render() {
    const {searchInput, userdetailslist} = this.state

    const searchresult = userdetailslist.filter(earchperson =>
      earchperson.name.includes(searchInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" onChange={this.onchange} />
        <ul className="list-container">
          {searchresult.map(eachUser => (
            <UserProfile
              userdelete={this.userdelete}
              userDetails={eachUser}
              key={eachUser.uniqueNo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
