import { useState } from "react";
import { Filter, Search } from "lucide-react";
import CarCard from "@/components/CarCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Import car images
import tataNexonImg from "@/assets/tata-nexon.jpg";
import mahindraXuv700Img from "@/assets/mahindra-xuv700.jpg";
import marutiSwiftImg from "@/assets/maruti-swift.jpg";
import hyundaiCretaImg from "@/assets/hyundai-creta.jpg";

const Cars = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [brandFilter, setBrandFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");

  // Sample Indian car data
  const cars = [
    {
      id: "1",
      name: "Nexon",
      brand: "Tata",
      image: tataNexonImg,
      pricePerDay: 2500,
      available: true,
      fuelType: "Petrol",
      seats: 5,
      location: "Mumbai, Maharashtra"
    },
    {
      id: "2",
      name: "Swift",
      brand: "Maruti Suzuki",
      image: marutiSwiftImg,
      pricePerDay: 1800,
      available: false,
      fuelType: "Petrol",
      seats: 4,
      location: "Bangalore, Karnataka"
    },
    {
      id: "3",
      name: "Creta",
      brand: "Hyundai",
      image: hyundaiCretaImg,
      pricePerDay: 3200,
      available: true,
      fuelType: "Petrol",
      seats: 5,
      location: "Pune, Maharashtra"
    },
    {
      id: "4",
      name: "Swift Dzire",
      brand: "Maruti Suzuki",
      image: marutiSwiftImg,
      pricePerDay: 2000,
      available: true,
      fuelType: "Diesel",
      seats: 4,
      location: "Chennai, Tamil Nadu"
    },
    {
      id: "5",
      name: "Harrier",
      brand: "Tata",
      image: tataNexonImg,
      pricePerDay: 3800,
      available: true,
      fuelType: "Diesel",
      seats: 5,
      location: "Kolkata, West Bengal"
    }
  ];

  // Filter cars based on search and filters
  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = brandFilter === "all" || car.brand === brandFilter;
    const matchesPrice = priceFilter === "all" || 
                        (priceFilter === "low" && car.pricePerDay < 2500) ||
                        (priceFilter === "medium" && car.pricePerDay >= 2500 && car.pricePerDay < 4000) ||
                        (priceFilter === "high" && car.pricePerDay >= 4000);
    const matchesAvailability = availabilityFilter === "all" || 
                               (availabilityFilter === "available" && car.available) ||
                               (availabilityFilter === "unavailable" && !car.available);

    return matchesSearch && matchesBrand && matchesPrice && matchesAvailability;
  });

  return (
    <div className="min-h-screen bg-car-rental-grey">
      {/* Header Section */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Your Perfect Car</h1>
          <p className="text-muted-foreground">Choose from our wide selection of Indian cars</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search cars by name or brand..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select value={brandFilter} onValueChange={setBrandFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  <SelectItem value="Tata">Tata</SelectItem>
                  <SelectItem value="Maruti Suzuki">Maruti Suzuki</SelectItem>
                  <SelectItem value="Hyundai">Hyundai</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under ₹2,500</SelectItem>
                  <SelectItem value="medium">₹2,500 - ₹4,000</SelectItem>
                  <SelectItem value="high">Above ₹4,000</SelectItem>
                </SelectContent>
              </Select>

              <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cars</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="unavailable">Unavailable</SelectItem>
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setBrandFilter("all");
                  setPriceFilter("all");
                  setAvailabilityFilter("all");
                }}
              >
                <Filter className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredCars.length} of {cars.length} cars
          </p>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {/* No Results */}
        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">No cars match your search criteria</p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setBrandFilter("all");
                setPriceFilter("all");
                setAvailabilityFilter("all");
              }}
              className="btn-primary"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cars;