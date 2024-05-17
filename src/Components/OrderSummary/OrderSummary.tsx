import CartItem from '../CartItem/CartItem';
import { CartState } from '../../interfaces/cartInterfaces';


const OrderSummary = ({ items, total }: CartState) => (
  <div className='p-6 border border-stone-500 rounded-2xl'>
    <h2 className="text-stone-500 text-2xl font-bold font-['Poppins'] text-center underline mb-4">Order Summary</h2>
    {items.map((item) => (
      <CartItem key={item.id} item={item} />
    ))}
    <h3 className="text-xl text-red-400 font-semibold">Total: USD ${total}</h3>
  </div>
);

export default OrderSummary;
