
import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";

const PlansSection = () => {
  const plans = [
    {
      title: "Imóveis",
      description: "Realize o sonho da casa própria, apartamento, terreno ou imóvel comercial",
      value: "A partir de R$ 100 mil",
      installments: "Parcelas a partir de R$ 699,00",
      term: "Prazos de até 200 meses",
      benefits: [
        "Sem comprovação de renda",
        "Imóvel novo ou usado",
        "Aceita FGTS para lance",
        "Use para compra, reforma ou construção"
      ],
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
    },
    {
      title: "Veículos",
      description: "Adquira carros, motos, caminhões novos ou usados com parcelas que cabem no seu bolso",
      value: "A partir de R$ 30 mil",
      installments: "Parcelas a partir de R$ 389,00",
      term: "Prazos de até 84 meses",
      benefits: [
        "Veículos novos ou usados",
        "Facilidade na aprovação",
        "Sem juros",
        "Modelos à sua escolha"
      ],
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=2936&ixlib=rb-4.0.3"
    },
    {
      title: "Serviços",
      description: "Planeje viagens, procedimentos estéticos, festas e outros serviços dos seus sonhos",
      value: "A partir de R$ 5 mil",
      installments: "Parcelas a partir de R$ 129,00",
      term: "Prazos de até 60 meses",
      benefits: [
        "Versatilidade de uso",
        "Planejamento financeiro",
        "Valores personalizados",
        "Contemplação rápida"
      ],
      image: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?auto=format&fit=crop&q=80&w=2881&ixlib=rb-4.0.3"
    }
  ];
  
  return (
    <section id="planos" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-center mx-auto">Nossos Planos</h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Escolha a modalidade ideal para realizar seus sonhos através do consórcio Embracon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="plan-card overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${plan.image})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-embracon-dark">{plan.title}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <div className="text-lg font-semibold text-embracon-red">{plan.value}</div>
                  <div className="text-sm text-gray-600">{plan.installments}</div>
                  <div className="text-sm text-gray-600 mb-4">{plan.term}</div>
                </div>
                <div className="mb-6">
                  {plan.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center mb-2">
                      <CheckCheck className="h-4 w-4 text-embracon-red mr-2" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full bg-embracon-red hover:bg-embracon-darkred"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Quero este plano
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
