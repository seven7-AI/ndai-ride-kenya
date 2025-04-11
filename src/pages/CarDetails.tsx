
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { MobileNav } from "@/components/MobileNav";
import { allCars } from "@/data/cars";
import { 
  Calendar, 
  User, 
  Star, 
  Shield, 
  Users, 
  Battery, 
  Gauge, 
  Fuel,
  Check,
  MapPin,
  ArrowLeft
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [selectedDates, setSelectedDates] = useState({ start: "", end: "" });
  const [withDriver, setWithDriver] = useState(false);
  
  // Find the car with the matching ID
  const car = allCars.find(car => car.id === id);
  
  if (!car) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Car Not Found</h1>
        <p className="mb-6">The car you're looking for doesn't exist or has been removed.</p>
        <Link to="/explore">
          <Button>Back to Explore</Button>
        </Link>
      </div>
    );
  }
  
  const handleBooking = () => {
    // In a real app, this would validate dates and process the booking
    toast({
      title: "Booking Request Submitted",
      description: `Your request to book the ${car.make} ${car.model} has been received.`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pb-16 md:pb-0">
        {/* Back button */}
        <div className="container py-4">
          <Link to="/explore" className="inline-flex items-center text-ndai-600 hover:text-ndai-700">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Cars
          </Link>
        </div>
        
        {/* Car images */}
        <div className="container">
          <div className="aspect-video bg-muted rounded-xl overflow-hidden">
            <img 
              src={car.images[0]} 
              alt={`${car.make} ${car.model}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Car details */}
        <div className="container py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main details */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Badge className="bg-ndai-500">{car.category}</Badge>
                    <Badge variant="outline">{car.type}</Badge>
                  </div>
                  <h1 className="text-3xl font-bold">{car.make} {car.model}</h1>
                  <div className="flex items-center mt-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{car.location}</span>
                    
                    <div className="flex items-center ml-4">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span>{car.rating} (32 reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-ndai-600">
                    KSh {car.costPerDay.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">per day</div>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <Tabs defaultValue="details">
                <TabsList>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="owner">Owner</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="mt-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <DetailItem icon={<Calendar />} label="Year" value={car.year.toString()} />
                    <DetailItem icon={<Users />} label="Seats" value={`${car.seats} people`} />
                    <DetailItem icon={<Gauge />} label="Transmission" value={car.transmission} />
                    <DetailItem icon={<Battery />} label="Color" value={car.color} />
                    <DetailItem 
                      icon={<User />} 
                      label="Driver" 
                      value={car.withDriver ? "Included" : "Self-drive"} 
                    />
                    <DetailItem 
                      icon={<Shield />} 
                      label="Insurance" 
                      value={car.insurance.coverageType} 
                    />
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-semibold mb-2">Description</h3>
                    <p className="text-gray-700">{car.description}</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="features" className="mt-4">
                  <div className="grid grid-cols-2 gap-2">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-ndai-500 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="owner" className="mt-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-ndai-100 rounded-full flex items-center justify-center text-ndai-700 mr-4">
                      {car.owner.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold">{car.owner.name}</h3>
                      <div className="flex items-center text-sm">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{car.owner.rating} · Car Owner</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-gray-700">
                    Experienced car owner with well-maintained vehicles. Quick to respond and flexible with pickup arrangements.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Booking card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border p-6 shadow-sm sticky top-20">
                <h3 className="font-semibold text-xl mb-4">Book this car</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Pick-up Date</label>
                    <input 
                      type="date" 
                      className="input-field"
                      value={selectedDates.start}
                      onChange={(e) => setSelectedDates({...selectedDates, start: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Return Date</label>
                    <input 
                      type="date" 
                      className="input-field"
                      value={selectedDates.end}
                      onChange={(e) => setSelectedDates({...selectedDates, end: e.target.value})}
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox"
                      id="withDriver"
                      checked={withDriver}
                      onChange={() => setWithDriver(!withDriver)}
                      className="mr-2"
                    />
                    <label htmlFor="withDriver">Include driver (+KSh 2,000/day)</label>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-medium">
                    <span>Base rate</span>
                    <span>KSh {car.costPerDay.toLocaleString()}/day</span>
                  </div>
                  
                  {withDriver && (
                    <div className="flex justify-between">
                      <span>Driver fee</span>
                      <span>KSh 2,000/day</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>KSh {(car.costPerDay + (withDriver ? 2000 : 0)).toLocaleString()}/day</span>
                  </div>
                  
                  <Button 
                    onClick={handleBooking} 
                    className="w-full bg-ndai-500 hover:bg-ndai-600"
                  >
                    Book Now
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500">
                    You won't be charged yet. We'll verify availability first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <MobileNav />
    </div>
  );
};

const DetailItem = ({ icon, label, value }: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
}) => {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 bg-ndai-100 rounded-full flex items-center justify-center text-ndai-700 mr-3">
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
};

export default CarDetails;
