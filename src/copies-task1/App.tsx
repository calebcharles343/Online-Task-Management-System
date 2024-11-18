import "./App.css";
import React, { useState, useEffect } from "react";
import ShoppingList from "./ShoppingList";
import AddItemForm from "./AddItemForm";

// Define the shape of a shopping list item
interface ShoppingItem {
  name: string;
  quantity: number;
  notes?: string;
}

const App: React.FC = () => {
  const [items, setItems] = useState<ShoppingItem[]>([]);

  // Load items from localStorage when the component mounts
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("shoppingList") || "[]");
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
  }, [items]);

  // Add a new item to the shopping list
  const addItem = (item: ShoppingItem) => {
    setItems([...items, item]);
  };

  // Remove an item from the shopping list
  const removeItem = (index: number) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmation) {
      const newItems = [...items];
      newItems.splice(index, 1);
      setItems(newItems);
    }
  };

  // Update an existing item in the shopping list
  const updateItem = (index: number, updatedItem: ShoppingItem) => {
    const newItems = [...items];
    newItems[index] = updatedItem;
    setItems(newItems);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <AddItemForm onAddItem={addItem} />
      <ShoppingList
        items={items}
        onRemoveItem={removeItem}
        onUpdateItem={updateItem}
      />
    </div>
  );
};

export default App;
