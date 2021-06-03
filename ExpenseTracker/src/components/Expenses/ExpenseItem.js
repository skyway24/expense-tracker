import React from 'react';
import logo from './delete.png';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import {useState} from 'react';
const ExpenseItem = (props) => {
  const [isShown, setIsShown] = useState('hideButton');

function imageHandler(){

props.onDelete(props.unique);
}
function showButtonHandler(){
  setIsShown("showButton")
}
function hideButtonHandler(){
  setIsShown("hideButton")
}


  return (
    <li>
      <div onMouseOver={showButtonHandler} onMouseOut={hideButtonHandler}>
      <Card className='expense-item' >
        <ExpenseDate date={props.date}  />
        <div className='expense-item__description' >
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
          <div className={isShown}>
           
            <img src={logo} alt="Logo"  width="20" height="20"   onClick={imageHandler} />
             
              
            </div>
        </div>
      </Card>
      </div>
    </li>
  );
};

export default ExpenseItem;
