import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function GalleryPage() {
  const galleryImages = [
    // Exterior Views
    {
      src: "/images/hotel-exterior-main.jpg",
      alt: "Hotel ZY Rangamati Residential Main Entrance",
      category: "Exterior",
    },
    {
      src: "/images/hotel-exterior-day-front.jpg",
      alt: "Hotel Front View During Day",
      category: "Exterior",
    },
    {
      src: "/images/hotel-exterior-night-lit.jpg",
      alt: "Hotel Exterior with Beautiful Night Lighting",
      category: "Exterior",
    },
    {
      src: "/images/hotel-exterior-street.jpg",
      alt: "Hotel Street View with Entrance",
      category: "Exterior",
    },

    // Interior Common Areas
    {
      src: "/images/reception-lobby.jpg",
      alt: "Modern Reception and Lobby Area",
      category: "Interior",
    },
    {
      src: "/images/lounge-seating.jpg",
      alt: "Comfortable Lounge Seating Area",
      category: "Interior",
    },
    {
      src: "/images/corridor-blue-lights.jpg",
      alt: "Elegant Corridor with Blue LED Lighting",
      category: "Interior",
    },

    // Room Types
    {
      src: "/images/room-standard-1.jpg",
      alt: "Standard Single Room with Modern Amenities",
      category: "Rooms",
    },
    {
      src: "/images/room-standard-2.jpg",
      alt: "Standard Double Room with Premium Features",
      category: "Rooms",
    },
    {
      src: "/images/room-modern-ceiling.jpg",
      alt: "Modern Room with Designer Ceiling",
      category: "Rooms",
    },
    {
      src: "/images/room-premium-ceiling.jpg",
      alt: "Premium Room with Beautiful Ceiling Lighting",
      category: "Rooms",
    },
    {
      src: "/images/room-twin-spacious.jpg",
      alt: "Spacious Twin Bed Room",
      category: "Rooms",
    },
    {
      src: "/images/room-deluxe-twin.jpg",
      alt: "Deluxe Twin Room with Yellow Accents",
      category: "Rooms",
    },
    {
      src: "/images/room-deluxe-premium.jpg",
      alt: "Premium Deluxe Room",
      category: "Rooms",
    },
    {
      src: "/images/room-family-multi.jpg",
      alt: "Family Suite with Multiple Beds",
      category: "Rooms",
    },
    {
      src: "/images/room-suite-seating.jpg",
      alt: "Executive Suite with Seating Area",
      category: "Rooms",
    },
    {
      src: "/images/room-multi-bed.jpg",
      alt: "Multi-Bed Family Room",
      category: "Rooms",
    },
    {
      src: "/images/room-tv-area.jpg",
      alt: "Room with Entertainment Area",
      category: "Rooms",
    },
    {
      src: "/images/room-tv-window.jpg",
      alt: "Room with TV and Window View",
      category: "Rooms",
    },

    // Amenities
    {
      src: "/images/bathroom-modern.jpg",
      alt: "Modern Bathroom with Blue Tiles",
      category: "Amenities",
    },
  ]

  // Group images by category
  const groupedImages = galleryImages.reduce(
    (acc, image) => {
      if (!acc[image.category]) {
        acc[image.category] = []
      }
      acc[image.category].push(image)
      return acc
    },
    {} as Record<string, typeof galleryImages>,
  )

  const categoryOrder = ["Exterior", "Interior", "Rooms", "Amenities"]

  return (
    <div className="container py-8 sm:py-12 px-4">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 font-mono">Gallery</h1>
        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-mono">
          Take a visual tour of Hotel ZY and discover the luxury and comfort that awaits you
        </p>
      </div>

      {categoryOrder.map((category) => (
        <div key={category} className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center font-mono">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {groupedImages[category]?.map((image, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 sm:p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-xs sm:text-sm font-mono">{image.alt}</h3>
                      <p className="text-xs text-muted-foreground font-mono">{image.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center mt-8 sm:mt-12">
        <p className="text-muted-foreground font-mono text-sm sm:text-base">
          Want to see more? Visit us in person to experience the full beauty of Hotel ZY
        </p>
      </div>
    </div>
  )
}
