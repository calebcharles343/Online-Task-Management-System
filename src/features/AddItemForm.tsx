import React, { useState } from "react";

// Define the props for the AddItemForm component
interface AddItemFormProps {
  onAddItem: (item: ShoppingItem) => void;
}

// Interface for a shopping item
interface ShoppingItem {
  name: string;
  quantity: number;
  notes?: string;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onAddItem }) => {
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [notes, setNotes] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      const newItem: ShoppingItem = { name, quantity, notes };
      onAddItem(newItem);
      setName("");
      setQuantity(1);
      setNotes("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item Name"
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        placeholder="Quantity"
        min="1"
      />
      <input
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notes (Optional)"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
