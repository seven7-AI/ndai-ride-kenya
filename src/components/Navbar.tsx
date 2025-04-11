
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Car, User } from "@/components/ui/avatar";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-6 w-6 text-ndai-600" />
            <span className="font-bold text-xl text-ndai-800">Ndai</span>
          </Link>
        </div>
        
        <div className="hidden md:flex md:flex-1 md:justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/explore">
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  )}>
                    Explore Cars
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Car Types</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/car-type/saloon" title="Saloon">
                      Comfortable saloon cars for everyday use
                    </ListItem>
                    <ListItem href="/car-type/suv" title="SUVs">
                      Spacious SUVs for family trips and adventures
                    </ListItem>
                    <ListItem href="/car-type/hatchback" title="Hatchback">
                      Compact and fuel-efficient hatchbacks
                    </ListItem>
                    <ListItem href="/car-type/pickup" title="Pick Up">
                      Tough pickup trucks for work and off-road
                    </ListItem>
                    <ListItem href="/car-type/vans" title="Vans">
                      Spacious vans for group transportation
                    </ListItem>
                    <ListItem href="/car-type/farm-machines" title="Farm Machines">
                      Specialized equipment for agricultural needs
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/category/basic" title="Basic">
                      Standard vehicles for everyday needs
                    </ListItem>
                    <ListItem href="/category/luxury" title="Luxury">
                      Premium vehicles for special occasions
                    </ListItem>
                    <ListItem href="/category/souped-up" title="Souped Up">
                      Modified vehicles with enhanced performance
                    </ListItem>
                    <ListItem href="/category/jets" title="Jets">
                      Air transportation services
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/become-host">
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  )}>
                    List Your Car
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          {loggedIn ? (
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-6 w-6" />
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-ndai-500 hover:bg-ndai-600">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
