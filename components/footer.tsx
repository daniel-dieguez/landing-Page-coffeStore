import { Coffee } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center gap-2">
            <Coffee className="h-8 w-8" strokeWidth={1.5} />
            <span className="text-2xl font-bold">Café Volcán</span>
          </div>
          <p className="text-primary-foreground/80 max-w-md text-pretty">
            Donde cada taza cuenta una historia y cada momento es una experiencia única
          </p>
          <div className="pt-4 text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Café Volcán. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
