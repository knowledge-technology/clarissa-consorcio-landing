
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center relative text-white bg-embracon-red"
      style={{
        backgroundImage: `linear-gradient(rgba(227, 6, 19, 0.8), rgba(227, 6, 19, 0.7)), url('/lovable-uploads/d13febb8-58fa-4d05-8ef4-b603d7650533.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-embracon-darkred/60 to-embracon-red/30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-7/12 mb-12 md:mb-0 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Realize seus sonhos com o Consórcio Embracon!
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Com a consultoria personalizada da Clarissa Mendes, seu sonho está mais próximo do que você imagina.
            </p>
            <div className="flex space-x-4">
              <Button 
                size="lg" 
                className="bg-white text-embracon-red hover:bg-embracon-gray font-bold transition-all duration-300"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Simule Agora
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/20 font-bold transition-all duration-300"
                onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Como Funciona
              </Button>
            </div>
          </div>
          <div className="md:w-5/12 md:pl-12 animate-fade-in">
            {/* Placeholder for additional hero content or image */}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="white">
          <path d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,80C672,75,768,53,864,48C960,43,1056,53,1152,56C1248,59,1344,53,1392,50.7L1440,48L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
