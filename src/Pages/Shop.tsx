// Shop.tsx
import React, { useState, useContext } from "react";
import ProductCard from "../Components/ProductCard";
import Cart from '../Components/Cart';
import { CartContext } from '../Components/CartContext';

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
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [page, setPage] = useState(1);
    const [cartOpen, setCartOpen] = useState(false);
    const { cart } = useContext(CartContext);
    const productsPerPage = 5;

    const products: Product[] = [
        {
            id: 1,
            name: "Product 1",
            price: 10.99,
            imageUrl: "https://example.com/product1.jpg",
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
        }    ];

    const categories = ["All", ...Array.from(new Set(products.map((product) => product.category)))];

    const handleCategoryChange = (selectedCategory: string) => {
        setCategory(selectedCategory);
        setPage(1);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setPage(1);
    };

    const filteredProducts = products
        .filter((product) => (category === "All" ? true : product.category === category))
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

    return (
        <div className="container mx-auto px-4">
            <button onClick={() => setCartOpen(true)}>Open cart ({cart.length} items)</button>

            <div className="flex justify-between items-center my-4">
                <div>
                    <label htmlFor="search">Search:</label>
                    <input
                        type="text"
                        id="search"
                        value={search}
                        onChange={handleSearchChange}
                    />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {displayedProducts.map((product, index) => (
                    <div
                        key={product.id}
                        className={`${
                            index === 0 && displayedProducts.length === 1 ? "sm:col-span-2" : ""
                        } animate-fade-in-down`}
                    >
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-4 fixed bottom-4 left-0 right-0">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-2 px-4 py-2 bg-blue-500 text-white rounded ${
                            index + 1 === page ? "bg-blue-700" : ""
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
    );
};

export default Shop;
