export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Nuestra Historia</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              En Café Volcán, nos inspiran los majestuosos volcanes que rodean Antigua Guatemala. Cada taza de café es
              preparada con granos seleccionados de las fincas locales, tostados con pasión y servidos con dedicación.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro espacio acogedor combina la arquitectura colonial de Antigua con un toque moderno, creando el
              ambiente perfecto para disfrutar de un café excepcional y comida artesanal.
            </p>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Ubicación:</span> Calle del Arco #47, Antigua Guatemala
              </p>
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden animate-fade-in-up">
            <img
              src="/artisan-coffee-being-poured-latte-art.jpg"
              alt="Café artesanal"
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
