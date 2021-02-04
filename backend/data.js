import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Illes',
            email: 'illestothvisualz@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'Donald',
            email: 'user@example.com',
            password: bcrypt.hashSync('password', 8),
            isAdmin: false
        },
    ],
    products: [
        {
            name: 'Shoe 1',
            category: 'Shoes',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Salamander',
            rating: 4.5,
            numReviews: 11,
            description: 'high quality product',
        },
        {
            name: 'Shoe 2',
            category: 'Shoes',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Tamaris',
            rating: 3.5,
            numReviews: 8,
            description: 'high quality product',
        },
        {
            name: 'Shoe 3',
            category: 'Shoes',
            image: '/images/p3.jpg',
            price: 130,
            countInStock: 0,
            brand: 'Martens',
            rating: 4,
            numReviews: 15,
            description: 'high quality product',
        },
        {
            name: 'Shoe 4',
            category: 'Shoes',
            image: '/images/p4.jpg',
            price: 105,
            countInStock: 15,
            brand: 'Nike',
            rating: 5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Shoe 5',
            category: 'Shoes',
            image: '/images/p5.jpg',
            price: 120,
            countInStock: 5,
            brand: 'Vans',
            rating: 4.5,
            numReviews: 16,
            description: 'high quality product',
        },
        {
            name: 'Shoe 6',
            category: 'Shoes',
            image: '/images/p6.jpg',
            price: 135,
            countInStock: 12,
            brand: 'Lacoste',
            rating: 4,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'Shoe 7',
            category: 'Shoes',
            image: '/images/p7.jpg',
            price: 145,
            countInStock: 10,
            brand: 'DC',
            rating: 4.5,
            numReviews: 13,
            description: 'high quality product',
        }
    ],
};

export default data;
