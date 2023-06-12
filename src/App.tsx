import React from 'react';
import './App.css';
import Menu from './Components/Menu';
import { CartProvider } from './Components/CartContext';

const App = () => {
    return (
        <div className="overflow-x-hidden">
            <CartProvider>
                <Menu />
            </CartProvider>
        </div>
    );
}

export default App;
