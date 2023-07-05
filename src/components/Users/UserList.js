import React from "react";
import Card from "../UI/Card.js";
import classes from './UserList.module.css';
const UsersList = (props) => {
 return (
    <Card className = {classes.users}>
      <ul>
        {props.users.map((user) => {
            return(

          <li>
            {user.name} ({user.age} years old)
          </li>
            )
        })}
      </ul>
    </Card>
  );
};

export default UsersList;

// to list down all the names and age we can do this with the help of map method
