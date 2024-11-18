import React, { useState } from "react";

// Interface for a shopping item
interface ShoppingItem {
  name: string;
  quantity: number;
  notes?: string;
}

// Define the props for the EditItemModal component
interface EditItemModalProps {
  item: ShoppingItem;
  onClose: () => void;
  onUpdate: (updatedItem: ShoppingItem) => void;
}

const EditItemModal: React.FC<EditItemModalProps> = ({
  item,
  onClose,
  onUpdate,
}) => {
  const [name, setName] = useState<string>(item.name);
  const [quantity, setQuantity] = useState<number>(item.quantity);
  const [notes, setNotes] = useState<string>(item.notes || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedItem: ShoppingItem = { name, quantity, notes };
    onUpdate(updatedItem);
  };

  return (
    <div className="modal">
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
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditItemModal;
