import { Calendar, Fuel, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarProps {
  id: string;
  name: string;
  brand: string;
  image: string;
  pricePerDay: number;
  available: boolean;
  fuelType: string;
  seats: number;
  location: string;
}

const CarCard = ({ car }: { car: CarProps }) => {
  return (
    <div className="car-card group cursor-pointer">
      {/* Car Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 h-48">
        <img
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Availability Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={
              car.available
                ? "status-available"
                : "status-unavailable"
            }
          >
            {car.available ? "Available" : "Unavailable"}
          </span>
        </div>
      </div>

      {/* Car Details */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-foreground mb-1">
            {car.brand} {car.name}
          </h3>
          <div className="flex items-center text-sm text-muted-foreground mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            {car.location}
          </div>
        </div>

        {/* Car Features */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Fuel className="h-4 w-4 mr-2 text-primary" />
            {car.fuelType}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2 text-primary" />
            {car.seats} Seats
          </div>
        </div>

        {/* Price and Book Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="price-tag">₹{car.pricePerDay}</span>
            <span className="text-sm text-muted-foreground ml-1">/day</span>
          </div>
          
          <Button 
            disabled={!car.available} 
            className="btn-primary flex items-center"
          >
            <Calendar className="h-4 w-4 mr-2" />
            {car.available ? "Book Now" : "Unavailable"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;