import React from 'react' ; 
import classes from './Card.module.css';

const Card = props => {

// here props.children accessing the content of AddUser.js file 
// content (form) which is wrapped in the <card> </card>
return <div className={`${classes.card} ${props.className}`}>
    {props.children}
</div>
};

export default Card ; 