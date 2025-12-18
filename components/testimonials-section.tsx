import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    location: "Guatemala City",
    text: "El mejor café que he probado en Guatemala. El ambiente es perfecto para trabajar o simplemente relajarse. ¡Totalmente recomendado!",
    rating: 5,
  },
  {
    name: "Carlos Méndez",
    location: "Antigua Guatemala",
    text: "Café Volcán se ha convertido en mi lugar favorito. Los croissants están increíbles y el café es de otro nivel.",
    rating: 5,
  },
  {
    name: "Andrea Rodríguez",
    location: "San Salvador",
    text: "Visito Antigua frecuentemente y siempre paso por Café Volcán. La atención es excelente y la comida deliciosa.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Experiencias que nos inspiran a seguir mejorando cada día
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={testimonial.name}
              className="animate-fade-in-up hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
