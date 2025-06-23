"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Wifi, Tv, Wind, Bath, Users, Bed, Lightbulb, Sparkles } from "lucide-react"
import Link from "next/link"

export default function RoomsPage() {
  const rooms = [
    {
      id: 1,
      name: "Standard Single Room",
      price: 2688,
      image: "/images/room-standard-1.jpg",
      description: "Comfortable single room with modern amenities and beautiful lighting.",
      capacity: 1,
      bedType: "Single Bed",
      size: "20 sqm",
      amenities: ["Free WiFi", "Smart TV", "Air Conditioning", "Private Bathroom", "Beautiful Lighting"],
      features: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Tv, label: "Smart TV" },
        { icon: Wind, label: "AC" },
        { icon: Bath, label: "Private Bath" },
        { icon: Lightbulb, label: "Beautiful Lighting" },
      ],
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: 4032,
      image: "/images/room-deluxe-twin.jpg",
      description: "Elegant deluxe room with twin beds, premium wooden interiors and modern lighting.",
      capacity: 2,
      bedType: "Twin Beds",
      size: "30 sqm",
      amenities: [
        "Free WiFi",
        "Smart TV",
        "Air Conditioning",
        "Premium Bathroom",
        "Beautiful Lighting",
        "Wooden Interiors",
      ],
      features: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Tv, label: "Smart TV" },
        { icon: Wind, label: "AC" },
        { icon: Bath, label: "Premium Bath" },
        { icon: Lightbulb, label: "Premium Lighting" },
      ],
    },
    {
      id: 3,
      name: "Premium Room",
      price: 5040,
      image: "/images/room-deluxe-premium.jpg",
      description: "Premium deluxe room with beautiful yellow accents and modern amenities.",
      capacity: 2,
      bedType: "Twin Beds",
      size: "28 sqm",
      amenities: [
        "Free WiFi",
        "Smart TV",
        "Air Conditioning",
        "Private Bathroom",
        "Beautiful Lighting",
        "Clean Environment",
      ],
      features: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Tv, label: "Smart TV" },
        { icon: Wind, label: "AC" },
        { icon: Bath, label: "Private Bath" },
        { icon: Sparkles, label: "Clean" },
      ],
    },
    {
      id: 4,
      name: "Family Suite",
      price: 5376,
      image: "/images/room-family-multi.jpg",
      description: "Spacious family suite with multiple beds and premium amenities for families.",
      capacity: 4,
      bedType: "Multiple Beds",
      size: "40 sqm",
      amenities: [
        "Free WiFi",
        "Smart TV",
        "Air Conditioning",
        "Premium Bathroom",
        "Beautiful Lighting",
        "Family Space",
      ],
      features: [
        { icon: Wifi, label: "Free WiFi" },
        { icon: Tv, label: "Smart TV" },
        { icon: Wind, label: "AC" },
        { icon: Bath, label: "Premium Bath" },
        { icon: Users, label: "Family Room" },
      ],
    },
  ]

  return (
    <div className="container py-8 sm:py-12 px-4">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 font-mono">Our Rooms & Suites</h1>
        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-mono">
          Choose from our selection of 4 comfortable and luxurious accommodations, each designed to provide you with the
          perfect stay
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {rooms.map((room) => (
          <Card key={room.id} className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-48 sm:h-64 lg:h-auto">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  fill
                  className="object-cover"
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 text-sm sm:text-lg px-2 sm:px-3 py-1 font-mono">
                  {room.price} TK/night
                </Badge>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 font-mono">{room.name}</h2>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4 font-mono">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>Up to {room.capacity} guests</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bed className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{room.bedType}</span>
                      </div>
                      <span>{room.size}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 sm:mb-6 font-mono text-sm sm:text-base">{room.description}</p>

                <div className="mb-4 sm:mb-6">
                  <h3 className="font-semibold mb-3 font-mono text-sm sm:text-base">Room Features</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-4 font-mono">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                        <feature.icon className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                        <span>{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-4 sm:my-6" />

                <div className="mb-4 sm:mb-6">
                  <h3 className="font-semibold mb-3 font-mono text-sm sm:text-base">Amenities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 font-mono">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="text-xs sm:text-sm text-muted-foreground">
                        • {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full font-mono text-sm sm:text-base" asChild>
                  <Link href="/contact">Book Now - {room.price} TK/night</Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 sm:mt-12 text-center">
        <Card className="p-6 sm:p-8 bg-muted/50">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 font-mono">Need Help Choosing?</h3>
          <p className="text-muted-foreground mb-4 sm:mb-6 font-mono text-sm sm:text-base">
            Our friendly staff is here to help you find the perfect room for your stay
          </p>
          <Button className="font-mono w-full sm:w-auto" onClick={() => (window.location.href = "/contact")}>
            Contact Our Reservations Team
          </Button>
        </Card>
      </div>
    </div>
  )
}
