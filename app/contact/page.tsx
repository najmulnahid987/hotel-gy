"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container py-8 sm:py-12 px-4">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 font-mono">Contact Us</h1>
        <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-mono">
          Get in touch with us for reservations, inquiries, or any assistance you may need
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Contact Information */}
        <div className="space-y-6 sm:space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-mono text-lg sm:text-xl">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 font-mono text-sm sm:text-base">
                Hotel Zy Rangamati Residential
                <br />
                J5pq+q6j, Officers Colony, Tabalchari
                <br />
                Rangamati, Rangamati Hill District
                <br />
                Bangladesh, 4500
              </p>
              <div className="relative bg-muted/50 rounded-lg overflow-hidden h-48 sm:h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.123456789!2d92.18814774602325!3d22.638474542643124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM4JzE4LjUiTiA5MsKwMTEnMTcuMyJF!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-mono text-lg sm:text-xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 sm:space-y-6">
                {/* Phone Section */}
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium font-mono text-sm sm:text-base">Phone</p>
                    <p className="text-muted-foreground font-mono text-sm sm:text-base">01558441880</p>
                    <p className="text-xs sm:text-sm text-muted-foreground font-mono">
                      Available 24/7 for reservations
                    </p>
                  </div>
                </div>

                {/* Email Section */}
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium font-mono text-sm sm:text-base">Email</p>
                    <p className="text-muted-foreground font-mono text-sm sm:text-base">info@hotelzy.com</p>
                    <p className="text-muted-foreground font-mono text-sm sm:text-base">booking@hotelzy.com</p>
                  </div>
                </div>

                {/* WhatsApp Section */}
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-green-500">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium font-mono text-sm sm:text-base">WhatsApp</p>
                    <p className="text-muted-foreground font-mono text-sm sm:text-base">+880 1558441880</p>
                    <Button
                      size="sm"
                      className="mt-2 bg-green-600 hover:bg-green-700 text-white font-mono text-xs sm:text-sm"
                      onClick={() => window.open("https://wa.me/8801558441880", "_blank")}
                    >
                      <MessageCircle className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>

                {/* Messenger Section */}
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 mt-1 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-blue-500">
                      <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.732 8.1l3.13 3.259L19.752 8.1l-6.559 6.863z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium font-mono text-sm sm:text-base">Messenger</p>
                    <p className="text-muted-foreground font-mono text-sm sm:text-base">Facebook Messenger</p>
                    <Button
                      size="sm"
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs sm:text-sm"
                      onClick={() => window.open("https://m.me/hotelzy", "_blank")}
                    >
                      <MessageCircle className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Chat on Messenger
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-mono text-lg sm:text-xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-mono text-sm">
                      First Name
                    </Label>
                    <Input id="firstName" placeholder="John" className="text-sm" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-mono text-sm">
                      Last Name
                    </Label>
                    <Input id="lastName" placeholder="Doe" className="text-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono text-sm">
                    Email
                  </Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" className="text-sm" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-mono text-sm">
                    Phone Number
                  </Label>
                  <Input id="phone" type="tel" placeholder="01XXXXXXXXX" className="text-sm" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-mono text-sm">
                    Subject
                  </Label>
                  <Input id="subject" placeholder="Reservation Inquiry" className="text-sm" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-sm">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Please let us know how we can help you..."
                    className="min-h-[100px] sm:min-h-[120px] text-sm"
                  />
                </div>

                <Button type="submit" className="w-full font-mono text-sm sm:text-base">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 sm:p-6">
              <h3 className="font-semibold mb-4 font-mono text-lg sm:text-xl">Quick Booking</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 font-mono">
                Ready to book? Call us directly for immediate assistance with your reservation.
              </p>
              <Button
                className="w-full font-mono text-sm sm:text-base"
                onClick={() => (window.location.href = "tel:01558441880")}
              >
                <Phone className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Call Now: 01558441880
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
