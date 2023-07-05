import React , {useState,useEffect} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
function App() {
const [usersList , setUsersList] = useState([]);


useEffect(()=>{
console.log(usersList);
},[usersList])

const addUserHandler = (uName , uAge) =>{
  setUsersList((prevUsersList) => {
return [...prevUsersList , {name:uName , age:uAge}];  

  });
};

  return (
    <div>
  <AddUser onAddUser={addUserHandler}/>
  <UserList users={usersList}/>
    </div>
  );
}

export default App;
