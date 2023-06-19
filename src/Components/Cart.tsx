import React, { useContext } from 'react';
import { CartContext } from './CartContext';

interface CartProps {
    open: boolean;
    onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ open, onClose }) => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className={`fixed right-0 top-0 bottom-0 w-64 bg-white p-4 overflow-auto transform transition-transform duration-200 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Cart</h2>
                <button onClick={onClose} className="text-gray-500">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>
            {cart.map((product) => (
                <div key={product.id} className="border-b pb-2 mb-2 hover:bg-gray-100 transition-colors duration-200">
                    <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
                    <p className="text-gray-500 mb-1">{product.quantity} x ${product.price}</p>
                    <button onClick={() => removeFromCart(product.id)} className="px-2 py-1 text-sm text-red-500 hover:text-red-700 transition-colors duration-200">
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Cart;
