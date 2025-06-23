import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t font-mono">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hotel ZY</h3>
            <p className="text-sm text-muted-foreground font-mono">
              Experience luxury and comfort in the heart of the city. Your perfect stay awaits.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/gallery" className="block text-sm text-muted-foreground hover:text-primary">
                Gallery
              </Link>
              <Link href="/rooms" className="block text-sm text-muted-foreground hover:text-primary">
                Rooms
              </Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground font-mono">
                <MapPin className="h-4 w-4" />
                <span>123 Hotel Street, City Center</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground font-mono">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground font-mono">
                <Mail className="h-4 w-4" />
                <span>info@hotelzy.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="font-mono">&copy; 2024 Hotel ZY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
