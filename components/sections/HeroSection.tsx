"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 opacity-0-initial animate-fade-in-down animate-delay-hero-logo">
            <Image 
              src="/logo.png" 
              alt="Grupo Haris S.A." 
              width={120} 
              height={80}
              className="mx-auto mb-4 h-20 w-auto"
              priority
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight opacity-0-initial animate-slide-up animate-delay-hero-title">
            Protección Profesional
            <span className="text-primary block animate-glow">de Confianza</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto opacity-0-initial animate-slide-up animate-delay-hero-subtitle">
            Servicios de seguridad privada con más de 10 años de experiencia. 
            Tecnología avanzada y personal altamente capacitado para tu tranquilidad.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0-initial animate-bounce-in animate-delay-hero-buttons">
            <Link href="#contacto">
              <Button size="lg" className="text-lg px-8 py-3 w-full sm:w-auto">
                Solicitar Cotización
              </Button>
            </Link>
            <Link href="#servicios">
              <Button size="lg" variant="navy" className="text-lg px-8 py-3 w-full sm:w-auto">
                Conocer Servicios
              </Button>
            </Link>
          </div>

          {/* Características destacadas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 opacity-0-initial animate-fade-in-up animate-delay-hero-features">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-lg">Personal Certificado</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-lg">Tecnología Avanzada</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-lg">Disponibilidad 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
