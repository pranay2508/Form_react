import React, { useState } from "react";
// ../ (DOUBLE DOTS MEANS TO GO UP ONE LEVEL )
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props ) => {
  const [enteredUsername, setEnteredUsername] = useState(" ");
  const [enteredAge, setEnteredAge] = useState(" ");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    //here + means that it will the take the input of age as an (number)
    if (+enteredAge < 1) {
      return;
    }
    // console.log(enteredUsername , enteredAge)
    props.onAddUser(enteredUsername , enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };


//   useEffect(()=>{
// console.log(enteredAge,enteredUsername)
//   },[enteredUsername,enteredAge])


//react doesn not rendered addjacent components 

  return (
    <div>
   <ErrorModal title =" An error occured!" message ="somthing went wrong"/>
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age"> Age </label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={AgeChangeHandler}
        />
        <Button type="submit"> Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
