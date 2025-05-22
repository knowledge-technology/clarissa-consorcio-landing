
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Vantagens", href: "#vantagens" },
    { name: "Por que Clarissa", href: "#porque-clarissa" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Planos", href: "#planos" },
    { name: "Fale com Clarissa", href: "#contato" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/89cb11d0-d194-4bdb-af8c-1008fcbeac29.png" 
                alt="Embracon Consórcio" 
                className="h-10 md:h-12" 
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-embracon-red ${isScrolled ? 'text-embracon-dark' : 'text-white'}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className={`p-2 rounded-md focus:outline-none ${isScrolled ? 'text-embracon-dark' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white mt-2 rounded-lg shadow-lg py-4 absolute left-4 right-4 animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-embracon-dark text-sm font-medium block hover:text-embracon-red"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
