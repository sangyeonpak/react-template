import React from "react";
import GroceryListItemClass from "./GroceryListItemClass.jsx";



const GroceryListItem = (props) => (

  // let onListItemClick = (event) => {
  //   console.log('I got clicked');
  // }
  // return (
  //   <ul>
  //   <li onClick={onListItemClick}>{props.item[0]}</li>
  //   <li>{props.item[1]}</li>
  //   <li>{props.item[2]}</li>
  // </ul>
  <ul>
    {props.item.map(item =>
      <GroceryListItemClass item={item} />
    )}
  </ul>
)


export default GroceryListItem