import { Star } from "lucide-react";

const AboutClarissaSection = () => {
  const testimonials = [
    {
      name: "Roberto Silva",
      text: "A Clarissa foi essencial para me ajudar a escolher o plano perfeito de consórcio. Graças a ela, consegui ser contemplado em apenas 8 meses!",
      rating: 5,
    },
    {
      name: "Márcia Oliveira",
      text: "Profissionalismo e atenção são as marcas da Clarissa. Ela me acompanhou em todo o processo e me ajudou a realizar o sonho da casa própria.",
      rating: 5,
    },
    {
      name: "Carlos Eduardo",
      text: "Excelente consultora! Explicou todas as minhas dúvidas com paciência e encontrou um plano que se encaixou perfeitamente no meu orçamento.",
      rating: 5,
    },
  ];

  return (
    <section id="porque-clarissa" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/3 mb-10 lg:mb-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-embracon-red">
                <img
                  src="/lovable-uploads/d13febb8-58fa-4d05-8ef4-b603d7650533.png"
                  alt="Clarissa Mendes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-embracon-red text-white py-2 px-4 rounded-lg shadow-lg">
                @consultoraclarissa
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 lg:pl-16">
            <h2 className="section-title">
              Por que escolher a Clarissa Mendes?
            </h2>
            <p className="text-lg mb-8">
              Com experiência no mercado de consórcios, Clarissa Mendes se
              destaca pelo atendimento personalizado e pela capacidade de
              encontrar a solução ideal para cada cliente. Sua missão é ajudar
              pessoas a conquistarem seus bens e realizarem seus sonhos através
              de um planejamento financeiro inteligente e seguro.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-embracon-red animate-fade-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#E30613" color="#E30613" />
                    ))}
                  </div>
                  <p className="italic text-gray-600 mb-4">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClarissaSection;
