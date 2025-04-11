
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-ndai-50 to-ndai-100 overflow-hidden">
      <div className="container px-4 py-16 sm:py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 tracking-tight">
          Rent the Perfect Car <br className="hidden sm:inline" />
          <span className="text-ndai-600">Anywhere in Kenya</span>
        </h1>
        
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
          Choose from hundreds of vehicles for any occasion. 
          From basic to luxury, we've got you covered. 
          With or without a driver, the choice is yours.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-lg">
          <Link to="/explore" className="flex-1">
            <Button size="lg" className="w-full bg-ndai-600 hover:bg-ndai-700 h-12 text-lg">
              <Search className="mr-2 h-5 w-5" />
              Find Cars
            </Button>
          </Link>
          <Link to="/become-host" className="flex-1">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full border-ndai-600 text-ndai-700 hover:bg-ndai-50 h-12 text-lg"
            >
              List Your Car
            </Button>
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-bold text-lg text-ndai-700">100+</h3>
            <p className="text-sm text-gray-600">Available Cars</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-bold text-lg text-ndai-700">10+</h3>
            <p className="text-sm text-gray-600">Car Categories</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-bold text-lg text-ndai-700">24/7</h3>
            <p className="text-sm text-gray-600">Customer Support</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="font-bold text-lg text-ndai-700">5000+</h3>
            <p className="text-sm text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};
