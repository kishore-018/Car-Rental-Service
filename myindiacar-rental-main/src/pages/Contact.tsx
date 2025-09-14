import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 83414 78962", "+91 83414 78963"],
      description: "Call us 24/7 for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["kishore@carrentalservice.in", "booking@carrentalservice.in"],
      description: "We'll respond within 2 hours"
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: ["MVP Colony", "visakhapatnam, Andhra Pradesh 533408"],
      description: "Visit us Monday to Saturday, 9 AM - 7 PM"
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: ["24/7 Services Provided", "Email: 6 AM - 11 PM IST"],
      description: "We're here whenever you need us"
    }
  ];

  const offices = [
    { city: "Mumbai", address: "Andheri East, Mumbai 400069", phone: "+91 83414 78950" },
    { city: "Delhi", address: "Connaught Place, New Delhi 110001", phone: "+91 83414 78951" },
    { city: "Bangalore", address: "Koramangala, Bangalore 560034", phone: "+91 83414 78952" },
    { city: "Chennai", address: "T. Nagar, Chennai 600017", phone: "+91 83414 78953" },
    { city: "Pune", address: "Koregaon Park, Pune 411001", phone: "+91 83414 78954" },
    { city: "Hyderabad", address: "Banjara Hills, Hyderabad 500034", phone: "+91 83414 78955" }
  ];

  return (
    <div className="min-h-screen bg-car-rental-grey">
      {/* Header Section */}
      <div className="bg-card border-b">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our car rental services? We're here to help you 
            24/7 across all major Indian cities.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Send us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <Card className="car-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                  Contact Form
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+91 98765 43210" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input placeholder="What's this about?" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us how we can help you..." 
                    rows={5}
                  />
                </div>

                <Button className="btn-primary w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                Reach out to us through any of these channels for immediate assistance.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="car-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                        <div className="space-y-1 mb-2">
                          {info.details.map((detail, idx) => (
                            <div key={idx} className="text-foreground font-medium">
                              {detail}
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Offices</h2>
            <p className="text-muted-foreground">
              We have offices in major Indian cities to serve you better
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="car-card text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{office.city}</h3>
                  <p className="text-muted-foreground mb-3">{office.address}</p>
                  <p className="text-primary font-medium">{office.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">24/7 Emergency Support</h3>
          <p className="text-muted-foreground mb-6">
            For urgent assistance or roadside support, call our emergency hotline
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="btn-primary text-lg px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              Emergency: +91 83414 78962
            </Button>
            <Button variant="outline" className="text-lg px-8 py-3">
              <MessageSquare className="h-5 w-5 mr-2" />
              WhatsApp: +91 83414 78962
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;