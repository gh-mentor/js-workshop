import React, { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        return response.json();
      })
      .then(data => setItems(data))
      .catch(error => console.error("Error fetching items:", error));
  }, []);

  const addItem = () => {
    fetch("http://localhost:5000/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newItem }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to add item");
        }
        return response.json();
      })
      .then(data => setItems([...items, data]))
      .catch(error => console.error("Error adding item:", error));
  };

  const deleteItem = (id) => {
    fetch(`http://localhost:5000/api/items/${id}`, {
      method: "DELETE",
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to delete item");
        }
        setItems(items.filter(item => item.id !== id));
      })
      .catch(error => console.error("Error deleting item:", error));
  };

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default App;
