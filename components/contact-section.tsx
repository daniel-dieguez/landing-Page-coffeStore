"use client"

import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Visítanos</h2>
          <p className="text-lg text-muted-foreground text-pretty">Te esperamos en el corazón de Antigua Guatemala</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-fade-in-up">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Ubicación</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Calle del Arco #47
                      <br />
                      Antigua Guatemala, Sacatepéquez
                      <br />
                      Guatemala
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Horario</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Lunes a Viernes: 7:00 AM - 8:00 PM
                      <br />
                      Sábados: 8:00 AM - 9:00 PM
                      <br />
                      Domingos: 8:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Contacto</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Teléfono: +502 7832-4567
                      <br />
                      Email: hola@cafevolcan.gt
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Card className="h-[500px] overflow-hidden animate-fade-in-up">
            <CardContent className="p-0 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4442626!2d-90.7342!3d14.5584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMzJzMwLjIiTiA5MMKwNDQnMDMuMSJX!5e0!3m2!1sen!2sgt!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Café Volcán"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
