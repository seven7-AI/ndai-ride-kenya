
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Signup = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    idNumber: "",
    driversLicense: "",
    accountType: "renter" as "renter" | "carOwner" | "driver" | "carpooler" // Add explicit type annotation here
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ 
      ...prev, 
      accountType: value as "renter" | "carOwner" | "driver" | "carpooler" 
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would connect to an authentication service
    toast({
      title: "Account created successfully!",
      description: `Your Ndai ${getAccountTypeDisplay(formData.accountType)} account has been created. You can now log in.`,
    });
    
    // Redirect to login page
    navigate("/login");
  };
  
  const getAccountTypeDisplay = (type: string): string => {
    switch (type) {
      case "carOwner": return "Car Owner";
      case "renter": return "Car Renter";
      case "driver": return "Driver/Chauffeur";
      case "carpooler": return "Carpooler";
      default: return "User";
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ndai-100 mb-4">
              <Car className="h-8 w-8 text-ndai-600" />
            </div>
            <h1 className="text-2xl font-bold">Create Your Ndai Account</h1>
            <p className="text-gray-600 mt-2">
              Join our car hiring platform to rent or list vehicles
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="accountType">Account Type</Label>
              <RadioGroup 
                defaultValue="renter" 
                value={formData.accountType}
                onValueChange={handleRadioChange}
                className="grid grid-cols-1 gap-2 sm:grid-cols-2"
              >
                <div className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted">
                  <RadioGroupItem value="carOwner" id="carOwner" />
                  <Label htmlFor="carOwner" className="flex-1 cursor-pointer">Individual/Company (Car Owner)</Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted">
                  <RadioGroupItem value="renter" id="renter" />
                  <Label htmlFor="renter" className="flex-1 cursor-pointer">Car Hirer</Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted">
                  <RadioGroupItem value="driver" id="driver" />
                  <Label htmlFor="driver" className="flex-1 cursor-pointer">Chauffeur/Driver</Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-3 hover:bg-muted">
                  <RadioGroupItem value="carpooler" id="carpooler" />
                  <Label htmlFor="carpooler" className="flex-1 cursor-pointer">Carpooler</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="e.g. 07XX-XXX-XXX"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            {(formData.accountType === "carOwner" || formData.accountType === "renter" || formData.accountType === "driver") && (
              <div className="space-y-2">
                <Label htmlFor="idNumber">ID Number / Passport</Label>
                <Input
                  id="idNumber"
                  name="idNumber"
                  placeholder="Enter your ID number"
                  value={formData.idNumber}
                  onChange={handleChange}
                  required={formData.accountType !== "carpooler"}
                />
              </div>
            )}
            
            {(formData.accountType === "renter" || formData.accountType === "driver") && (
              <div className="space-y-2">
                <Label htmlFor="driversLicense">Driver's License Number</Label>
                <Input
                  id="driversLicense"
                  name="driversLicense"
                  placeholder="Enter your driver's license number"
                  value={formData.driversLicense}
                  onChange={handleChange}
                  required={formData.accountType === "renter" || formData.accountType === "driver"}
                />
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="pt-2">
              <Button type="submit" className="w-full bg-ndai-500 hover:bg-ndai-600">
                Create Account
              </Button>
            </div>
            
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-ndai-600 hover:underline">
                Log in
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;
