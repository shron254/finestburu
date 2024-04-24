import forexpic from '../components/Myimages/forexpic.png';
import Finest2 from '../components/Myimages/final15.jpg'
import Finest3 from '../components/Myimages/final1.jpg'

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
    title: 'Deriv Killer 2.0',
    price: 12000,
    description: 'Tailored for traders seeking to leverage market opportunities, this tool provides an intuitive solution. Packed with sophisticated trading functionalities and dependable performance, it stands out as the go-to choice for traders across skill levels.',
    category: 'Binary',
    image: Finest3,
    rating: 3.8,
    reviews: 5,
    isNew: true,
  },

  {
    id: 5,
    title: 'Deriv Killer 1.0',
    price: 10000,
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
    description: 'Ideal for traders aiming to seize the potential of financial markets, this tool offers a seamless experience. Boasting an intuitive interface, cutting-edge trading tools, and consistent reliability, it caters to traders at any stage of their journey.',
    category: 'Binary',
    image: forexpic,
    rating: 3.8,
    reviews: 5,
    isNew: true,
  },
  
  
  
  // Add more products as needed
];


MyShop.forEach((item) => {
  item.price = Number(item.price);
});

 