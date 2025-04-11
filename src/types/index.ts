
export type CarCategory = 'Basic' | 'Luxury' | 'Souped up' | 'Jets';
export type BasicCarType = 'Saloon' | 'Hatchback' | 'SUV' | 'Pick up' | 'Vans' | 'Farm Machines';
export type TransmissionType = 'Automatic' | 'Manual';

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  transmission: TransmissionType;
  seats: number;
  withDriver: boolean;
  costPerDay: number;
  category: CarCategory;
  type: BasicCarType | string;
  images: string[];
  location: string;
  available: boolean;
  rating?: number;
  features: string[];
  description: string;
  owner: {
    id: string;
    name: string;
    rating: number;
  };
  insurance: {
    provider: string;
    coverageType: string;
    expiryDate: string;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  isVerified: boolean;
  isCarOwner: boolean;
  driversLicense?: {
    number: string;
    expiryDate: string;
    isVerified: boolean;
  };
  idNumber?: string;
  profileImage?: string;
}

export interface Booking {
  id: string;
  carId: string;
  userId: string;
  startDate: string;
  endDate: string;
  totalCost: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  withDriver: boolean;
  paymentStatus: 'pending' | 'completed';
  createdAt: string;
}
