
const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Contato Inicial",
      description: "Entre em contato com a consultora Clarissa para entender suas necessidades e objetivos."
    },
    {
      number: "02",
      title: "Escolha do Plano",
      description: "Juntos, encontramos o plano de consórcio ideal para o seu perfil financeiro e objetivo."
    },
    {
      number: "03",
      title: "Adesão Simplificada",
      description: "Processo de adesão rápido e descomplicado, com documentação mínima necessária."
    },
    {
      number: "04",
      title: "Contemplação",
      description: "Acompanhamento das assembleias mensais e estratégias para aumentar suas chances de contemplação."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-embracon-red text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block relative">
            Como Funciona o Consórcio?
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-white"></span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Entenda o passo a passo para realizar seu sonho com o consórcio Embracon e a consultoria da Clarissa Mendes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-white/10 rounded-lg p-8 h-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl font-bold opacity-50 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="white">
          <path d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,80C672,75,768,53,864,48C960,43,1056,53,1152,56C1248,59,1344,53,1392,50.7L1440,48L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HowItWorksSection;
