import logo from './logo.svg';
import './App.css';
import REACT , {useEffect, useState} from "react"
import axios from 'axios';
import UserList from './componed/UserList';

function App() {
     
  const [list , setList] = useState([]) ;
    console.log(list);
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res)=>setList(res.data))
      .catch((err)=>console.error(err))
  
    },[])
  

  return (
    <>
    <UserList list={list}/>
    </>
  );
}

export default App;
