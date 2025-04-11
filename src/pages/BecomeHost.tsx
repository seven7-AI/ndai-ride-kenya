
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { MobileNav } from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Car, Upload, Check } from "lucide-react";
import { CarCategory, BasicCarType } from "@/types";

const BecomeHost = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [carData, setCarData] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    transmission: "",
    seats: "",
    category: "",
    type: "",
    costPerDay: "",
    location: "",
    description: "",
    withDriver: false,
    insuranceProvider: "",
    insuranceCoverage: "",
    insuranceExpiry: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCarData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setCarData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setCarData(prev => ({ ...prev, withDriver: checked }));
  };
  
  const nextStep = () => {
    setStep(prev => prev + 1);
  };
  
  const prevStep = () => {
    setStep(prev => prev - 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send the data to the server
    toast({
      title: "Vehicle Listed Successfully",
      description: "Your car has been added to our listings. You'll be notified when someone books it.",
    });
    
    // Reset form and go back to step 1
    setCarData({
      make: "",
      model: "",
      year: "",
      color: "",
      transmission: "",
      seats: "",
      category: "",
      type: "",
      costPerDay: "",
      location: "",
      description: "",
      withDriver: false,
      insuranceProvider: "",
      insuranceCoverage: "",
      insuranceExpiry: "",
    });
    setStep(1);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pb-16 md:pb-0">
        <div className="bg-ndai-50 py-10">
          <div className="container">
            <h1 className="text-3xl font-bold">List Your Car on Ndai</h1>
            <p className="text-gray-600 mt-2">
              Earn extra income by renting out your vehicle when you're not using it
            </p>
          </div>
        </div>
        
        <div className="container py-8">
          <div className="max-w-3xl mx-auto">
            {/* Progress steps */}
            <div className="flex justify-between mb-8">
              <Step 
                number={1} 
                title="Car Details" 
                active={step === 1} 
                completed={step > 1} 
              />
              <div className="flex-1 flex items-center justify-center px-4">
                <div className={`h-1 w-full ${step > 1 ? 'bg-ndai-500' : 'bg-gray-200'}`}></div>
              </div>
              <Step 
                number={2} 
                title="Photos & Description" 
                active={step === 2} 
                completed={step > 2} 
              />
              <div className="flex-1 flex items-center justify-center px-4">
                <div className={`h-1 w-full ${step > 2 ? 'bg-ndai-500' : 'bg-gray-200'}`}></div>
              </div>
              <Step 
                number={3} 
                title="Pricing & Availability" 
                active={step === 3} 
                completed={step > 3} 
              />
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* Step 1: Car Details */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="make">Car Make</Label>
                      <Input
                        id="make"
                        name="make"
                        placeholder="e.g. Toyota, Honda, etc."
                        value={carData.make}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="model">Car Model</Label>
                      <Input
                        id="model"
                        name="model"
                        placeholder="e.g. Corolla, Accord, etc."
                        value={carData.model}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="year">Year of Manufacture</Label>
                      <Input
                        id="year"
                        name="year"
                        placeholder="e.g. 2019"
                        value={carData.year}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="color">Color</Label>
                      <Input
                        id="color"
                        name="color"
                        placeholder="e.g. Silver"
                        value={carData.color}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="seats">Number of Seats</Label>
                      <Input
                        id="seats"
                        name="seats"
                        type="number"
                        placeholder="e.g. 5"
                        value={carData.seats}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Transmission</Label>
                      <Select 
                        value={carData.transmission} 
                        onValueChange={(value) => handleSelectChange('transmission', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select transmission" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Automatic">Automatic</SelectItem>
                          <SelectItem value="Manual">Manual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Car Category</Label>
                      <Select 
                        value={carData.category} 
                        onValueChange={(value) => handleSelectChange('category', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Basic">Basic</SelectItem>
                          <SelectItem value="Luxury">Luxury</SelectItem>
                          <SelectItem value="Souped up">Souped Up</SelectItem>
                          <SelectItem value="Jets">Jets</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Vehicle Type</Label>
                    <Select 
                      value={carData.type} 
                      onValueChange={(value) => handleSelectChange('type', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Saloon">Saloon</SelectItem>
                        <SelectItem value="SUV">SUV</SelectItem>
                        <SelectItem value="Hatchback">Hatchback</SelectItem>
                        <SelectItem value="Pick up">Pick up</SelectItem>
                        <SelectItem value="Vans">Vans</SelectItem>
                        <SelectItem value="Farm Machines">Farm Machines</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="withDriver" 
                      checked={carData.withDriver}
                      onCheckedChange={handleCheckboxChange}
                    />
                    <label htmlFor="withDriver" className="text-sm font-medium">
                      This vehicle comes with a driver
                    </label>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      className="bg-ndai-500 hover:bg-ndai-600"
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 2: Photos & Description */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Car Photos</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                      <p className="text-sm text-gray-600 mb-2">
                        Drag and drop your photos here, or click to browse
                      </p>
                      <p className="text-xs text-gray-500 mb-4">
                        Add at least 4 photos. Include exterior, interior, and any special features.
                      </p>
                      <Button type="button" variant="outline" size="sm">
                        Upload Photos
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Car Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Describe your car, its features, condition, and any special notes for renters..."
                      rows={5}
                      value={carData.description}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="e.g. Westlands, Nairobi"
                      value={carData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="pt-4 flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={prevStep}
                    >
                      Previous Step
                    </Button>
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      className="bg-ndai-500 hover:bg-ndai-600"
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Pricing & Availability */}
              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="costPerDay">Daily Rate (KSh)</Label>
                    <Input
                      id="costPerDay"
                      name="costPerDay"
                      type="number"
                      placeholder="e.g. 5000"
                      value={carData.costPerDay}
                      onChange={handleChange}
                      required
                    />
                    <p className="text-xs text-gray-500">
                      Competitive pricing will help your car get booked more often
                    </p>
                  </div>
                  
                  <div className="bg-ndai-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Insurance Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="insuranceProvider">Insurance Provider</Label>
                        <Input
                          id="insuranceProvider"
                          name="insuranceProvider"
                          placeholder="e.g. Jubilee Insurance"
                          value={carData.insuranceProvider}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="insuranceCoverage">Coverage Type</Label>
                        <Input
                          id="insuranceCoverage"
                          name="insuranceCoverage"
                          placeholder="e.g. Comprehensive"
                          value={carData.insuranceCoverage}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <Label htmlFor="insuranceExpiry">Expiry Date</Label>
                      <Input
                        id="insuranceExpiry"
                        name="insuranceExpiry"
                        type="date"
                        value={carData.insuranceExpiry}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Submission Checklist</h3>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <p className="text-sm">
                          I confirm that all the information provided is accurate
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <p className="text-sm">
                          My car has valid insurance coverage
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <p className="text-sm">
                          I understand that Ndai will verify my details before listing my car
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={prevStep}
                    >
                      Previous Step
                    </Button>
                    <Button 
                      type="submit"
                      className="bg-ndai-500 hover:bg-ndai-600"
                    >
                      Submit Listing
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
      
      <MobileNav />
    </div>
  );
};

interface StepProps {
  number: number;
  title: string;
  active: boolean;
  completed: boolean;
}

const Step = ({ number, title, active, completed }: StepProps) => {
  return (
    <div className="flex flex-col items-center">
      <div 
        className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
          completed 
            ? 'bg-ndai-500 text-white' 
            : active 
              ? 'bg-ndai-100 text-ndai-800 border border-ndai-500' 
              : 'bg-gray-100 text-gray-500'
        }`}
      >
        {completed ? <Check className="h-4 w-4" /> : number}
      </div>
      <span className={`text-xs mt-2 ${active || completed ? 'text-ndai-800 font-medium' : 'text-gray-500'}`}>
        {title}
      </span>
    </div>
  );
};

export default BecomeHost;
