
import { Car } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Calendar, CircleDollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

interface CarCardProps {
  car: Car;
}

export const CarCard = ({ car }: CarCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Card className="car-card h-full flex flex-col">
      <div className="relative">
        <AspectRatio ratio={isMobile ? 4/3 : 16/9}>
          <img 
            src={car.images[0]} 
            alt={`${car.make} ${car.model}`} 
            className="w-full h-full object-cover rounded-t-xl"
          />
        </AspectRatio>
        <Badge className="absolute top-2 right-2 bg-ndai-500">{car.category}</Badge>
      </div>
      
      <CardHeader className="pb-2 flex-initial">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{car.make} {car.model}</h3>
            <p className="text-sm text-muted-foreground">{car.type}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{car.rating}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2 flex-1">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1 text-ndai-500" />
            <span>{car.seats} Seats</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-ndai-500" />
            <span>{car.year}</span>
          </div>
          <div className="col-span-2 flex items-center mt-1">
            <CircleDollarSign className="h-4 w-4 mr-1 text-ndai-500" />
            <span className="font-semibold">KSh {car.costPerDay.toLocaleString()}/day</span>
          </div>
        </div>
        
        <div className="mt-3">
          <p className="text-xs text-muted-foreground line-clamp-2">{car.description}</p>
        </div>
        
        <div className="flex mt-3">
          <Badge variant="outline" className="mr-1 text-xs">
            {car.transmission}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {car.withDriver ? 'With Driver' : 'Self Drive'}
          </Badge>
        </div>
      </CardContent>
      
      <CardFooter className="flex-initial">
        <Link to={`/car/${car.id}`} className="w-full">
          <Button className="w-full bg-ndai-500 hover:bg-ndai-600">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
