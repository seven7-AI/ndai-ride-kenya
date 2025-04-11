
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CarCard } from "@/components/CarCard";
import { MobileNav } from "@/components/MobileNav";
import { cars } from "@/data/cars";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Index = () => {
  // Get some featured cars (first 4)
  const featuredCars = cars.slice(0, 4);
  
  // Group cars by category for displaying samples
  const luxuryCars = cars.filter(car => car.category === 'Luxury').slice(0, 4);
  const basicCars = cars.filter(car => car.category === 'Basic').slice(0, 4);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pb-16 md:pb-0">
        <Hero />
        
        {/* Featured Cars Section */}
        <section className="container py-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Cars</h2>
            <Link to="/explore">
              <Button variant="ghost" className="text-ndai-600 hover:text-ndai-700 hover:bg-ndai-50">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </section>
        
        {/* Car Categories Section */}
        <section className="bg-ndai-50 py-12">
          <div className="container">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Car Categories</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <CategoryCard 
                title="Basic" 
                description="Affordable everyday cars" 
                count={60} 
                path="/category/basic" 
              />
              <CategoryCard 
                title="Luxury" 
                description="Premium vehicles for special occasions" 
                count={25} 
                path="/category/luxury" 
              />
              <CategoryCard 
                title="Souped Up" 
                description="Modified performance vehicles" 
                count={10} 
                path="/category/souped-up" 
              />
              <CategoryCard 
                title="Jets" 
                description="Private air transportation" 
                count={5} 
                path="/category/jets" 
              />
            </div>
          </div>
        </section>
        
        {/* Luxury Cars Section */}
        <section className="container py-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <Badge className="mb-2 bg-ndai-500">Premium</Badge>
              <h2 className="text-2xl font-bold text-gray-800">Luxury Cars</h2>
            </div>
            <Link to="/category/luxury">
              <Button variant="ghost" className="text-ndai-600 hover:text-ndai-700 hover:bg-ndai-50">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {luxuryCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="bg-ndai-50 py-12">
          <div className="container">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">How Ndai Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StepCard 
                number={1} 
                title="Browse & Choose" 
                description="Browse through our extensive collection of vehicles and select one that suits your needs." 
              />
              <StepCard 
                number={2} 
                title="Book & Pay" 
                description="Complete your booking by selecting dates and making a secure payment." 
              />
              <StepCard 
                number={3} 
                title="Pick Up & Enjoy" 
                description="Collect your car and enjoy your journey with our reliable vehicles." 
              />
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="container py-16">
          <div className="bg-ndai-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Rent Your Perfect Car?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Join thousands of satisfied customers who have discovered the easiest way to rent a car in Kenya.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-ndai-600 hover:bg-gray-100">
                  Sign Up Now
                </Button>
              </Link>
              <Link to="/explore">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-ndai-500">
                  Explore Cars
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <MobileNav />
    </div>
  );
};

const CategoryCard = ({ title, description, count, path }: { 
  title: string; 
  description: string; 
  count: number;
  path: string;
}) => {
  return (
    <Link to={path}>
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <p className="text-ndai-600 font-medium mt-2">{count} vehicles</p>
      </div>
    </Link>
  );
};

const StepCard = ({ number, title, description }: { 
  number: number; 
  title: string; 
  description: string; 
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-ndai-600 text-white flex items-center justify-center text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Index;
