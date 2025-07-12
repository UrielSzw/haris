"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Camera, Users, Building, Car, Smartphone } from "lucide-react";
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";

export default function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Seguridad Física",
      description: "Personal de seguridad altamente capacitado para la protección de personas, bienes e instalaciones."
    },
    {
      icon: Camera,
      title: "Sistemas de Vigilancia",
      description: "Monitoreo 24/7 con cámaras de alta definición y tecnología de reconocimiento facial."
    },
    {
      icon: Building,
      title: "Seguridad Corporativa",
      description: "Soluciones integrales de seguridad para empresas, oficinas y centros comerciales."
    },
    {
      icon: Users,
      title: "Eventos Especiales",
      description: "Cobertura de seguridad para eventos corporativos, sociales y deportivos."
    },
    {
      icon: Car,
      title: "Escolta y Traslados",
      description: "Servicios de escolta personal y traslado seguro de valores y personas VIP."
    },
    {
      icon: Smartphone,
      title: "Monitoreo Digital",
      description: "Sistemas de alarma conectados y monitoreo remoto con respuesta inmediata."
    }
  ];

  const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    const { ref, isIntersecting } = useIntersectionObserver();
    const IconComponent = service.icon;
    const delay = index * 100; // 0ms, 100ms, 200ms, etc.
    
    return (
      <div 
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          isIntersecting 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}
        style={{
          transitionDelay: isIntersecting ? `${delay}ms` : '0ms'
        }}
      >
        <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
          <CardHeader>
            <div className="mb-4">
              <IconComponent className="h-12 w-12 text-primary" />
            </div>
            <CardTitle className="text-xl">{service.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-slate-600">
              {service.description}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <section id="servicios" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios de seguridad adaptados a las necesidades específicas de cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
