import Forexpic from '../components/Myimages/Forexpic.png';
import Finest2 from '../components/Myimages/final1.jpg'
import Finest3 from '../components/Myimages/final15.jpg'

export const MyShop = [
  
  
  {
    id: 1,
    title: 'Deriv Killer 1.0',
    price: 105000,
    description: 'This is a great tool for traders who want to capitalize on the opportunities in the financial markets. With its user-friendly interface, advanced trading features, and reliable performance, it is a great choice for traders of all levels.',
    category: 'Binary',
    image: Finest2,
    rating: 3.8,
    reviews: 5,
    isNew: true,
  },
  {
    id: 2,
    title: 'Deriv Killer 2.0',
    price: 105000,
    description: 'This is a great tool for traders who want to capitalize on the opportunities in the financial markets. With its user-friendly interface, advanced trading features, and reliable performance, it is a great choice for traders of all levels.',
    category: 'Binary',
    image: Finest2,
    rating: 3.8,
    reviews: 5,
    isNew: true,
  },
  {
    id: 3,
    title: 'Deriv Killer 2.0',
    price: 15000,
    description: 'This is a great tool for traders who want to capitalize on the opportunities in the financial markets. With its user-friendly interface, advanced trading features, and reliable performance, it is a great choice for traders of all levels.',
    category: 'Binary',
    image: Finest3,
    rating: 3.8,
    reviews: 5,
    isNew: true,
  },
  {
    id: 4,
    title: 'Deriv Killer 1.0',
    price: 10000,
    description: 'This is a great tool for traders who want to capitalize on the opportunities in the financial markets. With its user-friendly interface, advanced trading features, and reliable performance, it is a great choice for traders of all levels.',
    category: 'Binary',
    image: Finest3,
    rating: 3.8,
    reviews: 5,
    isNew: true,
  },

  {
    id: 5,
    title: 'Deriv Killer 2.0',
    price: 12000,
    description: 'This is a great tool for traders who want to capitalize on the opportunities in the financial markets. With its user-friendly interface, advanced trading features, and reliable performance, it is a great choice for traders of all levels.',
    category: 'Binary',
    image: Finest2,
    rating: 3.8,
    reviews: 5,
    isNew: true,
  },

  {
    id: 6,
    title: 'Deriv Killer 3.0',
    price: 15000,
    description: 'This is a great tool for traders who want to capitalize on the opportunities in the financial markets. With its user-friendly interface, advanced trading features, and reliable performance, it is a great choice for traders of all levels.',
    category: 'Binary',
    image: Forexpic,
    rating: 3.8,
    reviews: 5,
    isNew: true,
  },
  
  
  
  // Add more products as needed
];


MyShop.forEach((item) => {
  item.price = Number(item.price);
});

 