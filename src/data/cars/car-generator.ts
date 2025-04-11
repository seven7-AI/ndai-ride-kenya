
import { Car } from '../../types';
import { cars } from './demo-cars';

// Additional car images for generated cars
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

// Base data for car generation
const baseColors = ['Red', 'Blue', 'Black', 'White', 'Silver', 'Gray', 'Green', 'Yellow', 'Orange', 'Brown'];
const baseLocations = [
  'Nairobi CBD', 'Westlands', 'Karen', 'Kilimani', 'Lavington', 
  'South B', 'South C', 'Upperhill', 'Parklands', 'Kiambu Road'
];

// Function to generate additional cars based on the demo cars
export const generateMoreCars = (quantity: number): Car[] => {
  const moreCars: Car[] = [];
  
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

// Generate the full list of cars
export const allCars = [...cars, ...generateMoreCars(90)];
