
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleDemoLogin = () => {
    // Set demo account credentials
    setFormData({
      email: "arapbiisubmissions@gmail.com",
      password: "4747"
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would authenticate with a server
    toast({
      title: "Login successful",
      description: "Welcome back to Ndai!",
    });
    
    // Redirect to home page
    navigate("/");
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
            <h1 className="text-2xl font-bold">Log in to Ndai</h1>
            <p className="text-gray-600 mt-2">
              Welcome back! Please enter your details
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-ndai-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="pt-2">
              <Button type="submit" className="w-full bg-ndai-500 hover:bg-ndai-600">
                Log in
              </Button>
            </div>
            
            <div className="mt-2">
              <Button 
                type="button" 
                variant="outline" 
                className="w-full border-ndai-500 text-ndai-600 hover:bg-ndai-50"
                onClick={handleDemoLogin}
              >
                Use Demo Account
              </Button>
            </div>
            
            <div className="text-center text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-ndai-600 hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
