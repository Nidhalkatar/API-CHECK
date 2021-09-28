import axios from 'axios'
import { useEffect,useState } from 'react';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [userlist,setuserlist]= useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>setuserlist(res.data))
    .catch(err=>alert(err))
  },[])
  return (
    <div className="App">
      <UserList userlist={userlist}/>
    </div>
  )
}

export default App;
