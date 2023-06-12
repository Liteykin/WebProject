import React, { useContext } from 'react';
import { CartContext } from './CartContext';

interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    category: string;
    deliveryDate: string;
    rating: number;
    inStock: boolean;
}

const ProductCard: React.FC<Product> = (product) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="border border-gray-300 rounded p-4">
            <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover mb-4" />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-500 mb-2">{product.description}</p>
            <p className="text-gray-500 mb-2">Delivery date: {product.deliveryDate}</p>
            <p className="text-gray-500 mb-2">Rating: {product.rating}</p>
            <p className="text-gray-500 mb-2">In stock: {product.inStock ? 'Yes' : 'No'}</p>
            <p className="text-lg font-semibold mb-4">${product.price}</p>
            <button onClick={() => addToCart(product)} className="px-4 py-2 bg-blue-500 text-white rounded">Add to cart</button>
        </div>
    );
};

export default ProductCard;
