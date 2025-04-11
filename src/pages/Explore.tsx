
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { MobileNav } from "@/components/MobileNav";
import { CarCard } from "@/components/CarCard";
import { allCars } from "@/data/cars";
import { Car, CarCategory, BasicCarType, TransmissionType } from "@/types";
import { 
  Search, 
  Filter, 
  ChevronDown, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [selectedCategory, setSelectedCategory] = useState<CarCategory | "all">("all");
  const [selectedType, setSelectedType] = useState<BasicCarType | "all">("all");
  const [withDriver, setWithDriver] = useState<boolean | null>(null);
  const [transmission, setTransmission] = useState<TransmissionType | "all">("all");
  const [filteredCars, setFilteredCars] = useState<Car[]>(allCars);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  // Apply filters whenever filter criteria change
  useEffect(() => {
    let result = allCars;
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(car => 
        `${car.make} ${car.model}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply price range filter
    result = result.filter(car => 
      car.costPerDay >= priceRange[0] && car.costPerDay <= priceRange[1]
    );
    
    // Apply category filter
    if (selectedCategory && selectedCategory !== "all") {
      result = result.filter(car => car.category === selectedCategory);
    }
    
    // Apply type filter
    if (selectedType && selectedType !== "all") {
      result = result.filter(car => car.type === selectedType);
    }
    
    // Apply driver preference filter
    if (withDriver !== null) {
      result = result.filter(car => car.withDriver === withDriver);
    }
    
    // Apply transmission filter
    if (transmission && transmission !== "all") {
      result = result.filter(car => car.transmission === transmission);
    }
    
    setFilteredCars(result);
    
    // Calculate active filters for display
    const filters: string[] = [];
    if (selectedCategory && selectedCategory !== "all") filters.push(`Category: ${selectedCategory}`);
    if (selectedType && selectedType !== "all") filters.push(`Type: ${selectedType}`);
    if (withDriver !== null) filters.push(`${withDriver ? 'With Driver' : 'Self Drive'}`);
    if (transmission && transmission !== "all") filters.push(`Transmission: ${transmission}`);
    if (priceRange[0] > 0 || priceRange[1] < 20000) {
      filters.push(`Price: KSh ${priceRange[0]} - KSh ${priceRange[1]}`);
    }
    
    setActiveFilters(filters);
    
  }, [searchTerm, priceRange, selectedCategory, selectedType, withDriver, transmission]);
  
  const clearFilters = () => {
    setSearchTerm("");
    setPriceRange([0, 20000]);
    setSelectedCategory("all");
    setSelectedType("all");
    setWithDriver(null);
    setTransmission("all");
  };
  
  const removeFilter = (filter: string) => {
    if (filter.startsWith("Category:")) {
      setSelectedCategory("all");
    } else if (filter.startsWith("Type:")) {
      setSelectedType("all");
    } else if (filter === "With Driver" || filter === "Self Drive") {
      setWithDriver(null);
    } else if (filter.startsWith("Transmission:")) {
      setTransmission("all");
    } else if (filter.startsWith("Price:")) {
      setPriceRange([0, 20000]);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pb-16 md:pb-0">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Explore Cars</h1>
          
          {/* Search bar and filter button */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search by make, model, or description..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="md:w-auto">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h3 className="font-medium">Filters</h3>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Price Range (KSh)</h4>
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        min={0}
                        max={20000}
                        step={1000}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex justify-between mt-2 text-sm">
                        <span>{priceRange[0].toLocaleString()}</span>
                        <span>{priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Category</h4>
                    <Select 
                      value={selectedCategory} 
                      onValueChange={(value) => setSelectedCategory(value as CarCategory)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="Basic">Basic</SelectItem>
                        <SelectItem value="Luxury">Luxury</SelectItem>
                        <SelectItem value="Souped up">Souped Up</SelectItem>
                        <SelectItem value="Jets">Jets</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Vehicle Type</h4>
                    <Select 
                      value={selectedType} 
                      onValueChange={(value) => setSelectedType(value as BasicCarType)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="Saloon">Saloon</SelectItem>
                        <SelectItem value="SUV">SUV</SelectItem>
                        <SelectItem value="Hatchback">Hatchback</SelectItem>
                        <SelectItem value="Pick up">Pick up</SelectItem>
                        <SelectItem value="Vans">Vans</SelectItem>
                        <SelectItem value="Farm Machines">Farm Machines</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">With Driver</h4>
                    <div className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="driver-yes" 
                          checked={withDriver === true}
                          onCheckedChange={() => setWithDriver(true)}
                        />
                        <label htmlFor="driver-yes" className="text-sm">Yes</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="driver-no" 
                          checked={withDriver === false}
                          onCheckedChange={() => setWithDriver(false)}
                        />
                        <label htmlFor="driver-no" className="text-sm">No</label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Transmission</h4>
                    <Select 
                      value={transmission} 
                      onValueChange={(value) => setTransmission(value as TransmissionType)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select transmission" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Transmissions</SelectItem>
                        <SelectItem value="Automatic">Automatic</SelectItem>
                        <SelectItem value="Manual">Manual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={clearFilters}
                  >
                    Clear All Filters
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Active filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {activeFilters.map((filter, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="flex items-center gap-1 px-3 py-1"
                >
                  {filter}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => removeFilter(filter)} 
                  />
                </Badge>
              ))}
              <Button 
                variant="link" 
                className="text-sm h-7 px-2" 
                onClick={clearFilters}
              >
                Clear All
              </Button>
            </div>
          )}
          
          {/* Results count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredCars.length} {filteredCars.length === 1 ? 'car' : 'cars'}
            </p>
          </div>
          
          {/* Cars grid */}
          {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCars.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No cars found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters to find what you're looking for.</p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          )}
        </div>
      </main>
      
      <MobileNav />
    </div>
  );
};

export default Explore;
