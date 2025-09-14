import { Car, Users, Shield, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Car,
      title: "Wide Selection",
      description: "Choose from over 500+ cars including premium Indian brands like Tata, Mahindra, and Maruti Suzuki"
    },
    {
      icon: Users,
      title: "Trusted Service",
      description: "Over 50,000+ happy customers across India trust us for their car rental needs"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "All cars are thoroughly inspected and insured for your safety and peace of mind"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you whenever and wherever you need help"
    }
  ];

  return (
    <div className="min-h-screen bg-car-rental-grey">
      {/* Hero Section */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Car Rental Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            India's premier car rental platform, connecting travelers with the best vehicles 
            across the country since 2020.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020 with a vision to revolutionize car rentals in India, 
                  Car Rental Service has grown from a small Mumbai-based startup to the 
                  country's most trusted car rental platform.
                </p>
                <p>
                  We recognized the growing need for reliable, affordable, and convenient 
                  car rental solutions for India's expanding urban population. Today, we 
                  proudly serve customers in over 25 cities across India.
                </p>
                <p>
                  Our commitment to quality, safety, and customer satisfaction has made us 
                  the preferred choice for both leisure travelers and business professionals.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl p-8 text-center">
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-primary">50,000+</div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">Cars Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-muted-foreground">Cities Covered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">4.8★</div>
                  <div className="text-muted-foreground">Average Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="car-card p-8 text-center hover:shadow-car-hover transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Section */}
          <div className="text-center bg-card rounded-2xl p-12 shadow-car-card">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              To make car rentals accessible, affordable, and hassle-free for every Indian, 
              while supporting local communities and promoting sustainable transportation solutions 
              across the country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;