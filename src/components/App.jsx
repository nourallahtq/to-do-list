import React, { useState } from "react";
import ToDoItem from "./To-Do-Item";
import InputArea from "./InputArea";



function App() {
    const [items, setItems] = useState([]);


    function addItem(inputText) {
      setItems( (prevItem) => {
          return [ ...prevItem, inputText];
      });
  }

    function deleteItem(id) {
      setItems((prevItem) => {
        return prevItem.filter(
          (item, index) => {
            return index !== id;
          }
        )

      }); 
    }

    return (
        <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <InputArea 
            onAdd= {addItem}
          />
          <div>
            <ul>
              {items.map((toDoItem, index) => 
              <ToDoItem 
                key= {index}
                id= {index}
                text= {toDoItem}
                onChecked= {deleteItem}
              />
              )}
            </ul>
          </div>
        </div>
      );

}


export default App;