import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export default function ExperienceSection() {
  const testimonials = [
    {
      name: "María González",
      position: "Gerente General, Empresa ABC",
      content: "Haris nos brinda seguridad desde hace 3 años. Su profesionalismo y atención al detalle son excepcionales.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      position: "Director de Eventos",
      content: "Confiamos en Haris para todos nuestros eventos corporativos. Siempre superan nuestras expectativas.",
      rating: 5
    },
    {
      name: "Ana Martín",
      position: "Propietaria Residencial",
      content: "La tranquilidad que nos da tener a Haris cuidando nuestro hogar no tiene precio. Excelente servicio.",
      rating: 5
    }
  ];

  const certifications = [
    "Certificación ISO 9001",
    "RENAR Autorizado",
    "Personal Habilitado",
    "Tecnología Certificada"
  ];

  return (
    <section id="experiencia" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Certificaciones */}
        <div className="text-center mb-16">
          <Badge className="mb-4">Experiencia y Confianza</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Avalados por la Experiencia
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Nuestra trayectoria nos respalda. Contamos con todas las certificaciones necesarias y la confianza de cientos de clientes.
          </p>

          {/* Certificaciones */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                {cert}
              </Badge>
            ))}
          </div>
        </div>

        {/* Testimonios */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">
            Lo que dicen nuestros clientes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  
                  {/* Estrellas */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-slate-600 mb-6 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.position}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
