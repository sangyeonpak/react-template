import Cucumbers from "./components/Cucumbers.jsx"
import Kale from "./components/Kale.jsx"
import GroceryListItem from "./components/GroceryListItem.jsx"

let groceryItems = [
  "cucumbers", "kale", "tomato", "potato", "beets"
]

function GroceryList() {

  let onListItemClick = (event) => {
    console.log('I got clicked');
  }

  return (
    <div className="App">
      <h1>Vegetables</h1>
      <ul>
        <li onClick={onListItemClick}>
          <Cucumbers />
        </li>
        <li>
          <Kale />
        </li>
      </ul>
      <h2>Grocery List</h2>
      <GroceryListItem item={groceryItems}/>
    </div>
  );
}

export default GroceryList;
