import { useState } from 'react';

type CartItemProps = {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };
  onRemove?: (id: number) => void;
  onUpdateQuantity?: (id: number, quantity: number) => void;
};

const CartItem = ({ item, onRemove, onUpdateQuantity }: CartItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value);
    onUpdateQuantity && onUpdateQuantity(item.id, value);
  };

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <h3 className="text-lg text-stone-500 font-bold font-['Poppins']">{item.name}</h3>
        <p className="text-stone-500">${item.price}</p>
      </div>
      <div className="flex items-center">
        {onUpdateQuantity && onRemove && (
          <>
            <input
            type="number"
            value={quantity}
            min={1}
            onKeyDown={(e) => e.preventDefault()}
            onChange={handleQuantityChange}
            className="w-16 py-1 px-2 border border-gray-300 rounded caret-transparent"
          />
          <button
          className="text-red-400 ml-2"
          onClick={() => onRemove(item.id)}
          >
            Remove
          </button>
          </>
        )}

        {!onUpdateQuantity && !onRemove && (
          <p className="text-stone-500 font-bold">{item.quantity}</p>
        )}
      </div>
    </div>

  );
};

export default CartItem;