import React, { useState, useContext } from 'react';
import ProductCard from '../Components/ProductCard';
import Cart from '../Components/Cart';
import { CartContext } from '../Components/CartContext';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import cart from "../Components/Cart";

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

const Shop: React.FC = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [page, setPage] = useState(1);
    const [cartOpen, setCartOpen] = useState(false);
    const { addToCart } = useContext(CartContext);
    const productsPerPage = 8;

    const products: Product[] = [
        {
            id: 1,
            name: "Product 1",
            price: 10.99,
            imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F3a5ce2a3-3f38-414f-9724-5cead37da903.2a44fbcacd1b7e68a403a37ec0d0afda.jpeg&f=1&nofb=1&ipt=d6af2207b7124e2f9217b08a1e25b8e2348f7c23f67d2395b94b84d0a4fd4649&ipo=images",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            category: "Category 1",
            deliveryDate: "2023-06-15",
            rating: 4.5,
            inStock: true,
        },
        {
            id: 2,
            name: "Product 2",
            price: 19.99,
            imageUrl: "https://example.com/product2.jpg",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            category: "Category 2",
            deliveryDate: "2023-06-16",
            rating: 3.8,
            inStock: true,
        },
        {
            id: 3,
            name: "Product 3",
            price: 15.99,
            imageUrl: "https://example.com/product3.jpg",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            category: "Category 1",
            deliveryDate: "2023-06-17",
            rating: 4.2,
            inStock: false,
        },
        {
            id: 4,
            name: "Product 4",
            price: 9.99,
            imageUrl: "https://example.com/product4.jpg",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            category: "Category 3",
            deliveryDate: "2023-06-18",
            rating: 4.7,
            inStock: true,
        },
        {
            id: 5,
            name: "Product 5",
            price: 12.99,
            imageUrl: "https://example.com/product5.jpg",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            category: "Category 2",
            deliveryDate: "2023-06-19",
            rating: 4.0,
            inStock: true,
        },
        {
            id: 6,
            name: "Product 6",
            price: 8.99,
            imageUrl: "https://example.com/product6.jpg",
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
            category: "Category 1",
            deliveryDate: "2023-06-20",
            rating: 4.9,
            inStock: true,
        },
        {
            id: 7,
            name: "Product 7",
            price: 16.99,
            imageUrl: "https://example.com/product7.jpg",
            description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
            category: "Category 3",
            deliveryDate: "2023-06-21",
            rating: 3.5,
            inStock: true,
        },
        {
            id: 8,
            name: "Product 8",
            price: 14.99,
            imageUrl: "https://example.com/product8.jpg",
            description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
            category: "Category 2",
            deliveryDate: "2023-06-22",
            rating: 4.6,
            inStock: true,
        },
        {
            id: 9,
            name: "Product 9",
            price: 11.99,
            imageUrl: "https://example.com/product9.jpg",
            description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
            category: "Category 1",
            deliveryDate: "2023-06-23",
            rating: 3.9,
            inStock: true,
        },
        {
            id: 10,
            name: "Product 10",
            price: 13.99,
            imageUrl: "https://example.com/product10.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
            category: "Category 3",
            deliveryDate: "2023-06-24",
            rating: 4.8,
            inStock: false,
        },
        {
            id: 11,
            name: "Product 11",
            price: 9.99,
            imageUrl: "https://example.com/product11.jpg",
            description: "Et harum quidem rerum facilis est et expedita distinctio.",
            category: "Category 2",
            deliveryDate: "2023-06-25",
            rating: 4.1,
            inStock: true,
        },
        {
            id: 12,
            name: "Product 12",
            price: 17.99,
            imageUrl: "https://example.com/product12.jpg",
            description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
            category: "Category 1",
            deliveryDate: "2023-06-26",
            rating: 4.4,
            inStock: true,
        },
        {
            id: 13,
            name: "Product 13",
            price: 10.99,
            imageUrl: "https://example.com/product13.jpg",
            description: "Omnis voluptas assumenda est, omnis dolor repellendus.",
            category: "Category 3",
            deliveryDate: "2023-06-27",
            rating: 3.7,
            inStock: true,
        },
        {
            id: 14,
            name: "Product 14",
            price: 15.99,
            imageUrl: "https://example.com/product14.jpg",
            description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.",
            category: "Category 2",
            deliveryDate: "2023-06-28",
            rating: 4.3,
            inStock: true,
        },
        {
            id: 15,
            name: "Product 15",
            price: 11.99,
            imageUrl: "https://example.com/product15.jpg",
            description: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias.",
            category: "Category 1",
            deliveryDate: "2023-06-29",
            rating: 4.6,
            inStock: false,
        },
        {
            id: 16,
            name: "Product 16",
            price: 13.99,
            imageUrl: "https://example.com/product16.jpg",
            description: "Ut autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
            category: "Category 3",
            deliveryDate: "2023-06-30",
            rating: 4.0,
            inStock: true,
        },
        {
            id: 17,
            name: "Product 17",
            price: 8.99,
            imageUrl: "https://example.com/product17.jpg",
            description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
            category: "Category 2",
            deliveryDate: "2023-07-01",
            rating: 4.9,
            inStock: true,
        },
        {
            id: 18,
            name: "Product 18",
            price: 16.99,
            imageUrl: "https://example.com/product18.jpg",
            description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
            category: "Category 1",
            deliveryDate: "2023-07-02",
            rating: 3.5,
            inStock: true,
        },
        {
            id: 19,
            name: "Product 19",
            price: 14.99,
            imageUrl: "https://example.com/product19.jpg",
            description: "Omnis voluptas assumenda est, omnis dolor repellendus.",
            category: "Category 3",
            deliveryDate: "2023-07-03",
            rating: 4.7,
            inStock: true,
        },
        {
            id: 20,
            name: "Product 20",
            price: 9.99,
            imageUrl: "https://example.com/product20.jpg",
            description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.",
            category: "Category 2",
            deliveryDate: "2023-07-04",
            rating: 3.9,
            inStock: false,
        },
        {
            id: 21,
            name: "Product 21",
            price: 11.99,
            imageUrl: "https://example.com/product21.jpg",
            description: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias.",
            category: "Category 1",
            deliveryDate: "2023-07-05",
            rating: 4.4,
            inStock: true,
        },
        {
            id: 22,
            name: "Product 22",
            price: 13.99,
            imageUrl: "https://example.com/product22.jpg",
            description: "Ut autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
            category: "Category 3",
            deliveryDate: "2023-07-06",
            rating: 4.2,
            inStock: true,
        }

    ];

    const categories = ['All', ...Array.from(new Set(products.map((product) => product.category)))];

    const handleCategoryChange = (selectedCategory: string) => {
        setCategory(selectedCategory);
        setPage(1);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setPage(1);
    };

    const filteredProducts = products
        .filter((product) => (category === 'All' ? true : product.category === category))
        .filter((product) => {
            const searchTerm = search.toLowerCase();
            return (
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm) ||
                product.deliveryDate.toLowerCase().includes(searchTerm)
            );
        });

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const displayedProducts = filteredProducts.slice((page - 1) * productsPerPage, page * productsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber);
    };

    const addToCartWithValidation = (product: Product) => {
        try {
            addToCart(product);
            alert('Product added to cart');
        } catch (error) {
            alert('An error occurred while adding the product to the cart');
        }
    };

    return (
        <div className="mx-auto px-4">
            <div className="flex justify-between items-center my-1">
                <div className="relative">
                    <label htmlFor="search" className="sr-only">
                        Search:
                    </label>
                    <input
                        type="text"
                        id="search"
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search"
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <svg
                        className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l6-6m0 0l-6-6m6 6H3" />
                    </svg>
                </div>
                <button onClick={() => setCartOpen(true)}>Open cart ({cart.length} items)</button>
                <div>
                    <label htmlFor="category" className="mr-2">
                        Category:
                    </label>
                    <select
                        id="category"
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={category}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
                {displayedProducts.map((product, index) => (
                    <div key={product.id} className={`${index === 0 && displayedProducts.length === 1 ? 'sm:col-span-2' : ''} animate-fade-in-down`}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-4 fixed bottom-4 left-0 right-0">
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <a
                        href="#"
                        className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                            page === 1 ? 'pointer-events-none opacity-50' : ''
                        }`}
                        onClick={() => handlePageChange(page - 1)}
                    >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <a
                            key={index}
                            href="#"
                            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                                index + 1 === page ? 'bg-indigo-600 text-white' : 'text-gray-900'
                            } ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </a>
                    ))}
                    <a
                        href="#"
                        className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                            page === totalPages ? 'pointer-events-none opacity-50' : ''
                        }`}
                        onClick={() => handlePageChange(page + 1)}
                    >
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </a>
                </nav>
            </div>

            <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
    );
};

export default Shop;
