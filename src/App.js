import "./styles.css";
import { useState } from "react";

export default function App() {
  const [ListOfFruits, setListOfFruits] = useState([
    "Orange",
    "Apple",
    "Banana",
    "Grapes",
    "Pomogranate",
  ]);
  const handleSwap = () => {
    const listOfItems = [...ListOfFruits];
    for (let i = listOfItems.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      [listOfItems[i], listOfItems[j]] = [listOfItems[j], listOfItems[i]];
      setListOfFruits(listOfItems);
    }
  };
  return (
    <div className="App">
      <h1>List of Items</h1>
      <ul className="list_items">
        {ListOfFruits.map((friut, i) => (
          <li key={i}>{friut}</li>
        ))}
      </ul>
      <button className="Items_shuffle" type="submit" onClick={handleSwap}>
        Shuffle
      </button>
    </div>
  );
}
