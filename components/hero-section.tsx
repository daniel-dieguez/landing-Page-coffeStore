"use client"

import { Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
  }

  const title = "Café Volcán"
  const letters = title.split("")

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-200 ease-out"
        style={{
          backgroundImage: "url('/cozy-coffee-shop-interior-antigua-guatemala-warm-l.jpg')",
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.1)`,
        }}
      >

      </div>

      <div className="absolute inset-0 pointer-events-none">
        {mounted &&
          [1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent/30 rounded-full animate-float"
              style={{
                left: `${20 * i}%`,
                top: `${15 * i}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`,
              }}
            />
          ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <div
            className={`transform transition-all duration-1000 ${
              mounted ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-180 opacity-0"
            }`}
          >
            <Coffee className="h-20 w-20 text-accent drop-shadow-lg animate-pulse-slow" strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-6 text-balance flex flex-wrap justify-center gap-1 md:gap-2">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`inline-block transform transition-all duration-700 hover:scale-125 hover:text-accent hover:-rotate-12 cursor-default ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 80}ms`,
                textShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

        <p
          className={`text-xl md:text-2xl text-primary-foreground/90 mb-10 text-pretty leading-relaxed transform transition-all duration-1000 delay-500 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Una experiencia única de café y sabor en el corazón de Antigua Guatemala
        </p>

        <div
          className={`transform transition-all duration-1000 delay-700 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Button
            size="lg"
            onClick={scrollToMenu}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-7 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-accent/50 relative overflow-hidden group"
          >
            <span className="relative z-10">Explorar Menú</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </Button>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-7 h-12 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2 shadow-lg backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-primary-foreground/70 rounded-full animate-scroll-down shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        </div>
      </div>
    </section>
  )
}
