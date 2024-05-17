
import { RootState } from '../../store';
import CartItem from '../CartItem/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../../features/cart/cartSlice';

interface CartProps {
  onClose: () => void;
}

const Cart = ({ onClose }: CartProps) => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
      <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Cart</h2>
        </div>

        <div className="p-4">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>

        <div className="p-4">
          <button className="w-full bg-red-400 text-white font-semibold px-4 py-2 rounded-lg">
            Go to pay
          </button>
          <button
            className="w-full bg-stone-400 text-white font-semibold px-4 py-2 rounded-lg mt-4"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <button className="w-full bg-stone-400 text-white font-semibold px-4 py-2 rounded-lg mt-4" onClick={onClose}>
            Close
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Cart;
