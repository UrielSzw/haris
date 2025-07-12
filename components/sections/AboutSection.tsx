"use client"

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, MapPin } from "lucide-react";
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";

export default function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver();
  
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Clientes Satisfechos"
    },
    {
      icon: Award,
      number: "10+",
      label: "Años de Experiencia"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Disponibilidad"
    },
    {
      icon: MapPin,
      number: "15",
      label: "Zonas de Cobertura"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div>
            <Badge className="mb-4">Sobre Nosotros</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Líderes en Seguridad Privada
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              En Haris, somos una empresa especializada en servicios de seguridad privada con más de una década de experiencia en el mercado. Nos dedicamos a brindar soluciones integrales de protección para empresas, hogares y eventos especiales.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Nuestro equipo está formado por profesionales altamente capacitados que utilizan tecnología de vanguardia para garantizar la máxima seguridad y tranquilidad de nuestros clientes.
            </p>

            {/* Valores */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Nuestra Misión</h3>
                <p className="text-slate-600">
                  Proteger lo que más valoras mediante servicios de seguridad profesionales, confiables y personalizados.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Nuestra Visión</h3>
                <p className="text-slate-600">
                  Ser la empresa de seguridad privada más confiable y reconocida de la región.
                </p>
              </div>
            </div>
          </div>

          {/* Estadísticas */}
          <div ref={ref} className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const delayClass = `animate-delay-stats-${index + 1}`;
              return (
                <Card 
                  key={index} 
                  className={`text-center p-6 opacity-0-initial ${
                    isIntersecting ? `animate-fade-in-scale ${delayClass}` : ''
                  }`}
                >
                  <CardContent className="p-0">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-slate-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-slate-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
