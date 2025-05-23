import {
  Shield,
  CreditCard,
  CheckCheck,
  Percent,
  Lock,
  PiggyBank,
} from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      title: "Sem Juros",
      description:
        "Diferente de financiamentos, o consórcio não tem juros compostos, apenas taxa de administração.",
      icon: <Percent className="h-10 w-10 text-embracon-red" />,
    },
    {
      title: "Flexibilidade",
      description:
        "Diversos planos adaptados às suas necessidades financeiras e prazos.",
      icon: <CreditCard className="h-10 w-10 text-embracon-red" />,
    },
    {
      title: "Segurança",
      description:
        "Empresa consolidada com mais de 30 anos no mercado de consórcios.",
      icon: <Shield className="h-10 w-10 text-embracon-red" />,
    },
    {
      title: "Parcelas Acessíveis",
      description: "Valores que cabem no seu bolso, com planos personalizados.",
      icon: <PiggyBank className="h-10 w-10 text-embracon-red" />,
    },
    {
      title: "Contemplação",
      description:
        "Possibilidade de contemplação por sorteio ou lance, acelerando a conquista do seu bem.",
      icon: <CheckCheck className="h-10 w-10 text-embracon-red" />,
    },
    {
      title: "Proteção",
      description:
        "Todo o processo é regulamentado pelo Banco Central, garantindo segurança para o seu investimento.",
      icon: <Lock className="h-10 w-10 text-embracon-red" />,
    },
  ];

  return (
    <section id="vantagens" className="py-20 bg-embracon-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title text-center mx-auto">
            Vantagens do Consórcio Embracon
          </h2>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Conheça os benefícios que fazem do consórcio a melhor opção para
            realizar seus sonhos com planejamento financeiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="advantage-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
