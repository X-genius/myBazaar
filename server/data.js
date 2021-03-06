import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/image/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'High Quality Nike Brand Shirt',
    },
    {
      name: 'Adidas fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/image/p2.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.8,
      numReviews: 25,
      description: 'High Quality Adidas Brand Shirt',
    },
    {
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/image/p3.jpg',
      price: 420,
      countInStock: 14,
      brand: 'Nike',
      rating: 4.9,
      numReviews: 20,
      description: 'High Quality Nike Brand Pant',
    },
    {
      name: 'Adidas fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/image/p4.jpg',
      price: 600,
      countInStock: 22,
      brand: 'Adidas',
      rating: 4.6,
      numReviews: 6,
      description: 'High Quality Adidas Brand Pant',
    },
  ],
};

export default data;
