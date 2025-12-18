import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Croissant, Sandwich } from "lucide-react"

const menuItems = [
  {
    category: "Cafés Especiales",
    icon: Coffee,
    items: [
      {
        name: "Espresso Volcán",
        description: "Shot doble de nuestro blend exclusivo",
        price: "Q25",
        image: "/espresso-coffee-cup-steam.jpg",
      },
      {
        name: "Latte de Cardamomo",
        description: "Espresso con leche vaporizada y toque de cardamomo",
        price: "Q35",
        image: "/latte-coffee-with-latte-art.jpg",
      },
      {
        name: "Cold Brew Antigua",
        description: "Café frío de 12 horas con notas de chocolate",
        price: "Q32",
        image: "/cold-brew-coffee-glass.jpg",
      },
    ],
  },
  {
    category: "Panadería Artesanal",
    icon: Croissant,
    items: [
      {
        name: "Croissant de Mantequilla",
        description: "Horneado fresco cada mañana",
        price: "Q18",
        image: "/fresh-croissant-pastry.jpg",
      },
      {
        name: "Pan de Elote",
        description: "Tradicional guatemalteco con granos de maíz",
        price: "Q15",
        image: "/corn-bread-slice.jpg",
      },
      {
        name: "Cinnamon Roll",
        description: "Con glaseado de queso crema",
        price: "Q22",
        image: "/cinnamon-roll-glazed.jpg",
      },
    ],
  },
  {
    category: "Comida Fresca",
    icon: Sandwich,
    items: [
      {
        name: "Sandwich Chapín",
        description: "Aguacate, tomate, frijol y queso en pan artesanal",
        price: "Q45",
        image: "/gourmet-avocado-sandwich.jpg",
      },
      {
        name: "Ensalada Volcán",
        description: "Mix de lechugas, frutas de temporada y vinagreta de miel",
        price: "Q42",
        image: "/fresh-colorful-salad-bowl.jpg",
      },
      {
        name: "Tostada de Aguacate",
        description: "Pan de masa madre con aguacate, huevo poché y ajonjolí",
        price: "Q38",
        image: "/avocado-toast-poached-egg.png",
      },
    ],
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestro Menú</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cada platillo y bebida es preparado con ingredientes frescos y locales
          </p>
        </div>

        <div className="space-y-16">
          {menuItems.map((section, idx) => (
            <div key={section.category} className="animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="flex items-center gap-3 mb-8">
                <section.icon className="h-8 w-8 text-accent" />
                <h3 className="text-3xl font-bold text-foreground">{section.category}</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <Card
                    key={item.name}
                    className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-semibold text-foreground">{item.name}</h4>
                        <span className="text-xl font-bold text-accent">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
