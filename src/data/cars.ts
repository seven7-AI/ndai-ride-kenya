
import { Car } from '../types';

export const cars: Car[] = [
  // Saloon Cars
  {
    id: '1',
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'Silver',
    transmission: 'Automatic',
    seats: 5,
    withDriver: false,
    costPerDay: 5000,
    category: 'Basic',
    type: 'Saloon',
    images: ['https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=800&auto=format&fit=crop'],
    location: 'Nairobi CBD',
    available: true,
    rating: 4.7,
    features: ['Air Conditioning', 'Bluetooth', 'Reverse Camera', 'GPS'],
    description: 'Reliable and fuel-efficient Toyota Corolla. Perfect for city driving and short trips.',
    owner: {
      id: 'o1',
      name: 'John Kamau',
      rating: 4.8
    },
    insurance: {
      provider: 'Jubilee Insurance',
      coverageType: 'Comprehensive',
      expiryDate: '2025-06-15'
    }
  },
  {
    id: '2',
    make: 'Honda',
    model: 'Accord',
    year: 2021,
    color: 'White',
    transmission: 'Automatic',
    seats: 5,
    withDriver: true,
    costPerDay: 6500,
    category: 'Basic',
    type: 'Saloon',
    images: ['https://images.unsplash.com/photo-1629293348422-63c8fb3f704e?q=80&w=800&auto=format&fit=crop'],
    location: 'Westlands, Nairobi',
    available: true,
    rating: 4.5,
    features: ['Air Conditioning', 'Leather Seats', 'Sunroof', 'Bluetooth', 'Cruise Control'],
    description: 'Comfortable and spacious Honda Accord with professional driver included.',
    owner: {
      id: 'o2',
      name: 'Sarah Wanjiku',
      rating: 4.9
    },
    insurance: {
      provider: 'APA Insurance',
      coverageType: 'Comprehensive',
      expiryDate: '2025-08-22'
    }
  },
  // SUVs
  {
    id: '3',
    make: 'Toyota',
    model: 'RAV4',
    year: 2022,
    color: 'Blue',
    transmission: 'Automatic',
    seats: 5,
    withDriver: false,
    costPerDay: 8000,
    category: 'Basic',
    type: 'SUV',
    images: ['https://images.unsplash.com/photo-1581540222194-0def2dda95b8?q=80&w=800&auto=format&fit=crop'],
    location: 'Karen, Nairobi',
    available: true,
    rating: 4.8,
    features: ['4x4', 'Air Conditioning', 'Bluetooth', 'Reverse Camera', 'USB Ports'],
    description: 'Versatile and comfortable SUV perfect for city driving and weekend getaways.',
    owner: {
      id: 'o3',
      name: 'Daniel Ochieng',
      rating: 4.7
    },
    insurance: {
      provider: 'Britam',
      coverageType: 'Comprehensive',
      expiryDate: '2025-04-10'
    }
  },
  {
    id: '4',
    make: 'Land Rover',
    model: 'Discovery',
    year: 2021,
    color: 'Black',
    transmission: 'Automatic',
    seats: 7,
    withDriver: true,
    costPerDay: 15000,
    category: 'Luxury',
    type: 'SUV',
    images: ['https://images.unsplash.com/photo-1561344640-1eb6b0d71ecc?q=80&w=800&auto=format&fit=crop'],
    location: 'Runda, Nairobi',
    available: true,
    rating: 4.9,
    features: ['4x4', 'Leather Seats', 'Panoramic Roof', 'Navigation', 'Premium Sound System'],
    description: 'Luxury 7-seater SUV with driver, perfect for family trips and executive transport.',
    owner: {
      id: 'o4',
      name: 'Elizabeth Njeri',
      rating: 4.9
    },
    insurance: {
      provider: 'UAP Old Mutual',
      coverageType: 'Comprehensive Premium',
      expiryDate: '2025-09-01'
    }
  },
  // Hatchbacks
  {
    id: '5',
    make: 'Mazda',
    model: 'Demio',
    year: 2019,
    color: 'Red',
    transmission: 'Automatic',
    seats: 5,
    withDriver: false,
    costPerDay: 4000,
    category: 'Basic',
    type: 'Hatchback',
    images: ['https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=800&auto=format&fit=crop'],
    location: 'Kilimani, Nairobi',
    available: true,
    rating: 4.6,
    features: ['Air Conditioning', 'Bluetooth', 'Economic Fuel Consumption'],
    description: 'Compact and fuel-efficient Mazda Demio, ideal for city navigating and small families.',
    owner: {
      id: 'o5',
      name: 'Brian Mwangi',
      rating: 4.7
    },
    insurance: {
      provider: 'Madison Insurance',
      coverageType: 'Comprehensive',
      expiryDate: '2025-03-15'
    }
  },
  // Luxury cars
  {
    id: '6',
    make: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2022,
    color: 'Silver',
    transmission: 'Automatic',
    seats: 5,
    withDriver: true,
    costPerDay: 20000,
    category: 'Luxury',
    type: 'Saloon',
    images: ['https://images.unsplash.com/photo-1549925862-990918131e85?q=80&w=800&auto=format&fit=crop'],
    location: 'Muthaiga, Nairobi',
    available: true,
    rating: 5.0,
    features: ['Leather Seats', 'Navigation', 'Heated Seats', 'Premium Sound System', 'Executive Package'],
    description: 'Luxury Mercedes-Benz E-Class with professional chauffeur for executive transport and special occasions.',
    owner: {
      id: 'o6',
      name: 'Robert Karanja',
      rating: 4.9
    },
    insurance: {
      provider: 'ICEA Lion',
      coverageType: 'Comprehensive Premium',
      expiryDate: '2025-10-05'
    }
  },
  // Pickups
  {
    id: '7',
    make: 'Toyota',
    model: 'Hilux',
    year: 2020,
    color: 'White',
    transmission: 'Manual',
    seats: 5,
    withDriver: false,
    costPerDay: 9000,
    category: 'Basic',
    type: 'Pick up',
    images: ['https://images.unsplash.com/photo-1659359148124-2687697a4039?q=80&w=800&auto=format&fit=crop'],
    location: 'Industrial Area, Nairobi',
    available: true,
    rating: 4.7,
    features: ['4x4', 'Air Conditioning', 'Bluetooth', 'Heavy Duty Suspension'],
    description: 'Reliable Toyota Hilux pickup truck perfect for carrying cargo and off-road adventures.',
    owner: {
      id: 'o7',
      name: 'Michael Kariuki',
      rating: 4.8
    },
    insurance: {
      provider: 'CIC Insurance',
      coverageType: 'Comprehensive',
      expiryDate: '2025-05-20'
    }
  },
  // Vans
  {
    id: '8',
    make: 'Toyota',
    model: 'HiAce',
    year: 2021,
    color: 'White',
    transmission: 'Manual',
    seats: 14,
    withDriver: true,
    costPerDay: 12000,
    category: 'Basic',
    type: 'Vans',
    images: ['https://images.unsplash.com/photo-1616455546586-887837111bbd?q=80&w=800&auto=format&fit=crop'],
    location: 'South B, Nairobi',
    available: true,
    rating: 4.6,
    features: ['Air Conditioning', 'Spacious Interior', 'PA System'],
    description: '14-seater van with driver, perfect for group transportation and tours.',
    owner: {
      id: 'o8',
      name: 'George Otieno',
      rating: 4.7
    },
    insurance: {
      provider: 'Heritage Insurance',
      coverageType: 'Comprehensive',
      expiryDate: '2025-07-12'
    }
  },
  // Farm machines
  {
    id: '9',
    make: 'John Deere',
    model: '5403 Tractor',
    year: 2019,
    color: 'Green',
    transmission: 'Manual',
    seats: 1,
    withDriver: true,
    costPerDay: 15000,
    category: 'Basic',
    type: 'Farm Machines',
    images: ['https://images.unsplash.com/photo-1658449635268-4d633b03797a?q=80&w=800&auto=format&fit=crop'],
    location: 'Nakuru',
    available: true,
    rating: 4.8,
    features: ['55 HP Engine', 'Hydraulic System', 'PTO'],
    description: 'Powerful John Deere tractor with experienced operator, ideal for farming operations.',
    owner: {
      id: 'o9',
      name: 'William Kipchoge',
      rating: 4.9
    },
    insurance: {
      provider: 'APA Insurance',
      coverageType: 'Commercial Equipment',
      expiryDate: '2025-06-30'
    }
  },
  // Souped up car
  {
    id: '10',
    make: 'Subaru',
    model: 'Impreza WRX STI',
    year: 2020,
    color: 'Blue',
    transmission: 'Manual',
    seats: 5,
    withDriver: false,
    costPerDay: 18000,
    category: 'Souped up',
    type: 'Saloon',
    images: ['https://images.unsplash.com/photo-1638618164682-12b986ec2a90?q=80&w=800&auto=format&fit=crop'],
    location: 'Lavington, Nairobi',
    available: true,
    rating: 4.9,
    features: ['Turbo Engine', 'Sport Suspension', 'Racing Seats', 'Custom Exhaust', 'Performance Brakes'],
    description: 'Modified Subaru Impreza WRX STI with enhanced performance for enthusiasts.',
    owner: {
      id: 'o10',
      name: 'Alex Maina',
      rating: 4.8
    },
    insurance: {
      provider: 'Directline Insurance',
      coverageType: 'Comprehensive Plus',
      expiryDate: '2025-08-15'
    }
  }
];

// Function to get more cars by duplicating and modifying existing ones
export const generateMoreCars = (quantity: number): Car[] => {
  const moreCars: Car[] = [];
  const baseColors = ['Red', 'Blue', 'Black', 'White', 'Silver', 'Gray', 'Green', 'Yellow', 'Orange', 'Brown'];
  const baseLocations = ['Nairobi CBD', 'Westlands', 'Karen', 'Kilimani', 'Lavington', 'South B', 'South C', 'Upperhill', 'Parklands', 'Kiambu Road'];
  
  // Set of car images to use for generated cars
  const carImages = [
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618093279252-9f15d7eac1e5?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop',
  ];
  
  for (let i = 0; i < quantity; i++) {
    const baseCar = cars[i % cars.length];
    const randomYear = 2015 + Math.floor(Math.random() * 9); // 2015-2023
    const randomPrice = 3000 + Math.floor(Math.random() * 15000); // 3000-18000
    const randomRating = 3.5 + Math.random() * 1.5; // 3.5-5.0
    const randomImage = carImages[Math.floor(Math.random() * carImages.length)];
    
    moreCars.push({
      ...baseCar,
      id: `ex${i + 11}`,
      year: randomYear,
      color: baseColors[Math.floor(Math.random() * baseColors.length)],
      costPerDay: randomPrice,
      location: baseLocations[Math.floor(Math.random() * baseLocations.length)],
      rating: Math.round(randomRating * 10) / 10,
      withDriver: Math.random() > 0.5,
      images: [randomImage],
      owner: {
        ...baseCar.owner,
        id: `eo${i + 11}`,
      }
    });
  }
  
  return moreCars;
};

// Generate additional cars to reach 100 total
export const allCars = [...cars, ...generateMoreCars(90)];
