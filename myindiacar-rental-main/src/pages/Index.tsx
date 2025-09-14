import { Link } from "react-router-dom";
import { Search, Calendar, Shield, Car, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBanner from "@/assets/hero-banner.jpg";
import tataNexonImg from "@/assets/tata-nexon.jpg";
import mahindraXuv700Img from "@/assets/mahindra-xuv700.jpg";
import marutiSwiftImg from "@/assets/maruti-swift.jpg";

const Index = () => {
  const features = [
    {
      icon: Search,
      title: "Easy Search",
      description: "Find the perfect car for your needs with our advanced search filters"
    },
    {
      icon: Calendar,
      title: "Quick Booking",
      description: "Book your car in just a few clicks with instant confirmation"
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "All cars are thoroughly inspected and fully insured for your safety"
    }
  ];

  const featuredCars = [
    {
      name: "Tata Nexon",
      price: 2500,
      image: tataNexonImg,
      rating: 4.8
    },
    {
      name: "Mahindra XUV700",
      price: 4500,
      image: mahindraXuv700Img,
      rating: 4.9
    },
    {
      name: "Maruti Swift",
      price: 1800,
      image: marutiSwiftImg,
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Rent Premium <br />
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Indian Cars
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Experience the best of India with our premium car rental service. 
              Book instantly from 500+ cars across 25+ cities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cars">
                <Button size="lg" className="btn-primary text-lg px-8 py-4">
                  <Search className="mr-2 h-5 w-5" />
                  Find Your Car
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="car-card p-8 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Book Your Car in 3 Simple Steps
            </h2>
            <p className="text-muted-foreground mb-8">Get on the road faster than ever before</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Choose Your Car</h3>
                <p className="text-sm text-muted-foreground">Browse our wide selection</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Select Dates</h3>
                <p className="text-sm text-muted-foreground">Pick your rental period</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Hit the Road</h3>
                <p className="text-sm text-muted-foreground">Enjoy your journey</p>
              </div>
            </div>
            
            <Link to="/cars" className="inline-block mt-8">
              <Button className="btn-primary text-lg px-8 py-4">
                Start Booking Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-car-rental-grey">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Car Rental Service?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make car rentals simple, safe, and affordable for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="car-card text-center hover:shadow-car-hover transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Indian Cars
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover our most popular vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredCars.map((car, index) => (
              <Card key={index} className="car-card group cursor-pointer overflow-hidden">
                <div className="relative">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="font-medium">{car.rating}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{car.name}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="price-tag">₹{car.price}</span>
                      <span className="text-muted-foreground ml-1">/day</span>
                    </div>
                    <Button className="btn-primary">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/cars">
              <Button className="btn-primary text-lg px-8 py-4">
                View All Cars
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Cars Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-primary-foreground/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-primary-foreground/80">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-primary-foreground/80">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of satisfied customers who trust us for their travel needs. 
              Book your perfect car today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button className="btn-primary text-lg px-8 py-4">
                  <Car className="mr-2 h-5 w-5" />
                  Get Started
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="text-lg px-8 py-4">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
