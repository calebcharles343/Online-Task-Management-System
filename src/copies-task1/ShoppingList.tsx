import React, { useState } from "react";
import EditItemModal from "./EditItemModal";

// Interface for a shopping item
interface ShoppingItem {
  name: string;
  quantity: number;
  notes?: string;
}

// Define the props for the ShoppingList component
interface ShoppingListProps {
  items: ShoppingItem[];
  onRemoveItem: (index: number) => void;
  onUpdateItem: (index: number, updatedItem: ShoppingItem) => void;
}

const ShoppingList: React.FC<ShoppingListProps> = ({
  items,
  onRemoveItem,
  onUpdateItem,
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Handles the update action
  const handleUpdate = (updatedItem: ShoppingItem) => {
    if (editingIndex !== null) {
      onUpdateItem(editingIndex, updatedItem);
      setEditingIndex(null); // Close the edit modal
    }
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>
              {item.name} - Quantity: {item.quantity}{" "}
              {item.notes && `(${item.notes})`}
            </span>
            <button onClick={() => setEditingIndex(index)}>Edit</button>
            <button onClick={() => onRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      {editingIndex !== null && (
        <EditItemModal
          item={items[editingIndex]}
          onClose={() => setEditingIndex(null)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default ShoppingList;
