"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Wifi, Tv, Lightbulb, Wind, Sparkles, Users, MessageCircle } from "lucide-react"

export default function HomePage() {
  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hotel-exterior-main.jpg"
          alt="Hotel ZY Exterior"
          fill
          className="object-cover"
          priority
          unoptimized
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white space-y-4 sm:space-y-6 max-w-4xl mx-auto px-4 font-mono">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-mono">Welcome to Hotel ZY</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 font-mono">
            Experience luxury and comfort in Rangamati
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 font-mono bg-green-600 hover:bg-green-700 text-white border-green-600"
              onClick={() => window.open("https://wa.me/8801558441880", "_blank")}
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Contact on WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 bg-white/10 border-white text-white hover:bg-white hover:text-black font-mono"
              asChild
            >
              <Link href="/rooms">View Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-mono">Why Choose Hotel ZY?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm sm:text-base">
              Discover the perfect blend of luxury, comfort, and exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card>
              <CardContent className="p-4 sm:p-6 text-center">
                <Star className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 font-mono">5-Star Service</h3>
                <p className="text-muted-foreground font-mono text-sm sm:text-base">
                  Experience world-class hospitality with our dedicated staff
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 sm:p-6 text-center">
                <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 font-mono">Modern Amenities</h3>
                <p className="text-muted-foreground font-mono text-sm sm:text-base">
                  Enjoy premium facilities and contemporary comfort
                </p>
              </CardContent>
            </Card>

            <Card className="sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6 text-center">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 font-mono">Prime Location</h3>
                <p className="text-muted-foreground font-mono text-sm sm:text-base">
                  Located in the heart of Rangamati with easy access to attractions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-12 sm:py-16">
        <div className="container px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-mono">Hotel Amenities</h2>
            <p className="text-muted-foreground font-mono text-sm sm:text-base">
              Everything you need for a perfect stay
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Wifi, label: "Free WiFi" },
              { icon: Tv, label: "Smart TV" },
              { icon: Wind, label: "Air Conditioning" },
              { icon: Lightbulb, label: "Beautiful Lighting" },
              { icon: Sparkles, label: "Clean Rooms" },
              { icon: Users, label: "Couple Friendly" },
              { icon: Users, label: "Suitable For Children" },
              { icon: Users, label: "Bachelors Allowed" },
            ].map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <amenity.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2" />
                <span className="text-xs sm:text-sm font-medium font-mono text-center">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-mono">Our Rooms</h2>
            <p className="text-muted-foreground font-mono text-sm sm:text-base">
              Choose from our selection of comfortable and luxurious rooms
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                name: "Standard Single Room",
                price: "2688 TK",
                image: "/images/room-standard-1.jpg",
                features: ["Couple Friendly", "Suitable For Children", "Bachelors Allowed"],
              },
              {
                name: "Deluxe Room",
                price: "4032 TK",
                image: "/images/room-deluxe-twin.jpg",
                features: ["Couple Friendly", "Suitable For Children", "Bachelors Allowed"],
              },
              {
                name: "Premium Room",
                price: "5040 TK",
                image: "/images/room-deluxe-premium.jpg",
                features: ["Couple Friendly", "Suitable For Children", "Bachelors Allowed"],
              },
              {
                name: "Family Suite",
                price: "5376 TK",
                image: "/images/room-family-multi.jpg",
                features: ["Couple Friendly", "Suitable For Children", "Bachelors Allowed"],
              },
            ].map((room, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-40 sm:h-48">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={room.name}
                    fill
                    className="object-cover"
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 text-xs sm:text-sm px-2 sm:px-3 py-1 font-mono">{`${room.price}/night`}</Badge>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 font-mono">{room.name}</h3>
                  <ul className="space-y-1 mb-4">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-muted-foreground font-mono">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full font-mono text-sm sm:text-base" asChild>
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white font-mono w-full sm:w-auto"
            >
              <Link href="/rooms">View All Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 sm:py-16">
        <div className="container px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-mono">What Our Guests Say</h2>
            <p className="text-muted-foreground font-mono text-sm sm:text-base">
              Read reviews from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                comment:
                  "Excellent service and beautiful rooms. The staff was very helpful and the location is perfect.",
                date: "2 weeks ago",
              },
              {
                name: "Ahmed Rahman",
                rating: 5,
                comment:
                  "Clean, comfortable, and modern. The lighting in the rooms is amazing and the AC works perfectly.",
                date: "1 month ago",
              },
              {
                name: "Maria Garcia",
                rating: 4,
                comment: "Great value for money. The hotel is well-maintained and the smart TVs are a nice touch.",
                date: "3 weeks ago",
              },
            ].map((reviewItem, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 sm:h-4 sm:w-4 ${i < reviewItem.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-xs sm:text-sm text-muted-foreground font-mono">{reviewItem.date}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 italic font-mono text-sm sm:text-base">
                    "{reviewItem.comment}"
                  </p>
                  <p className="font-semibold font-mono text-sm sm:text-base">{reviewItem.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="py-12 sm:py-16 bg-primary text-primary-foreground">
        <div className="container text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-mono">Ready to Book Your Stay?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 font-mono">
            Experience the best hospitality at Hotel ZY
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="font-mono w-full sm:w-auto"
              onClick={() => (window.location.href = "tel:01558441880")}
            >
              Call Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white hover:bg-white hover:text-primary text-black font-mono w-full sm:w-auto"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
