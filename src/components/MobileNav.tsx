
import React from "react";
import { Link } from "react-router-dom";
import { Home, Search, User, Car } from "lucide-react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const MobileNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
      <div className="flex justify-around">
        <NavItem 
          to="/" 
          icon={<Home size={20} />} 
          label="Home" 
          isActive={isActive("/")} 
        />
        <NavItem 
          to="/explore" 
          icon={<Search size={20} />} 
          label="Explore" 
          isActive={isActive("/explore")} 
        />
        <NavItem 
          to="/bookings" 
          icon={<Car size={20} />} 
          label="Bookings" 
          isActive={isActive("/bookings")} 
        />
        <NavItem 
          to="/profile" 
          icon={<User size={20} />} 
          label="Profile" 
          isActive={isActive("/profile")} 
        />
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const NavItem = ({ to, icon, label, isActive }: NavItemProps) => {
  return (
    <Link 
      to={to} 
      className="flex flex-col items-center justify-center py-2 w-full"
    >
      <div className={cn(
        "flex flex-col items-center justify-center",
        isActive ? "text-ndai-600" : "text-gray-500"
      )}>
        {icon}
        <span className="text-xs mt-1">{label}</span>
      </div>
    </Link>
  );
};
