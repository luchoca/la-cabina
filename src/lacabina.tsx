import React, { useState, useEffect } from 'react';
import { Camera, Music, Heart, Sparkles, MapPin, Clock, Users, ArrowRight, Menu, X, Palette } from 'lucide-react';

const CoworkLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [theme, setTheme] = useState('terracota');

  const themes: { [key: string]: {
    name: string;
    bg: string;
    bgAlt: string;
    bgDark: string;
    bgHero: string;
    bgCta: string;
    text: string;
    textLight: string;
    textMuted: string;
    accent: string;
    accentHover: string;
    accentText: string;
    border: string;
    borderHover: string;
    card: string;
    icon: string;
    iconText: string;
    badge: string;
    galleryFrom: string;
    galleryTo: string;
    galleryIcon: string;
    galleryText: string;
    galleryOverlay: string;
  }} = {
    terracota: {
      name: 'Terracota',
      bg: 'bg-orange-50',
      bgAlt: 'bg-white',
      bgDark: 'bg-orange-100',
      bgHero: 'from-orange-50 via-amber-50 to-green-50',
      bgCta: 'from-green-50 via-orange-50 to-amber-50',
      text: 'text-stone-900',
      textLight: 'text-stone-700',
      textMuted: 'text-stone-600',
      accent: 'bg-orange-700',
      accentHover: 'hover:bg-orange-600',
      accentText: 'text-orange-700',
      border: 'border-orange-200',
      borderHover: 'hover:border-orange-400',
      card: 'bg-orange-50',
      icon: 'bg-orange-700',
      iconText: 'text-orange-50',
      badge: 'bg-green-600',
      galleryFrom: 'from-orange-200',
      galleryTo: 'to-green-200',
      galleryIcon: 'text-orange-700',
      galleryText: 'text-stone-700',
      galleryOverlay: 'from-stone-900/70'
    },
    navy: {
      name: 'Navy',
      bg: 'bg-slate-50',
      bgAlt: 'bg-white',
      bgDark: 'bg-slate-100',
      bgHero: 'from-slate-50 via-blue-50 to-rose-50',
      bgCta: 'from-rose-50 via-slate-50 to-blue-50',
      text: 'text-slate-900',
      textLight: 'text-slate-700',
      textMuted: 'text-slate-600',
      accent: 'bg-blue-900',
      accentHover: 'hover:bg-blue-800',
      accentText: 'text-blue-900',
      border: 'border-slate-200',
      borderHover: 'hover:border-slate-400',
      card: 'bg-slate-50',
      icon: 'bg-blue-900',
      iconText: 'text-blue-50',
      badge: 'bg-rose-500',
      galleryFrom: 'from-blue-200',
      galleryTo: 'to-rose-200',
      galleryIcon: 'text-blue-900',
      galleryText: 'text-slate-700',
      galleryOverlay: 'from-slate-900/70'
    },
    dark: {
      name: 'Dark',
      bg: 'bg-neutral-900',
      bgAlt: 'bg-neutral-800',
      bgDark: 'bg-black',
      bgHero: 'from-neutral-900 via-neutral-800 to-neutral-900',
      bgCta: 'from-neutral-800 via-neutral-900 to-neutral-800',
      text: 'text-neutral-100',
      textLight: 'text-neutral-300',
      textMuted: 'text-neutral-400',
      accent: 'bg-neutral-100',
      accentHover: 'hover:bg-neutral-300',
      accentText: 'text-neutral-100',
      border: 'border-neutral-700',
      borderHover: 'hover:border-neutral-500',
      card: 'bg-neutral-800',
      icon: 'bg-neutral-100',
      iconText: 'text-neutral-900',
      badge: 'bg-amber-500',
      galleryFrom: 'from-neutral-700',
      galleryTo: 'to-neutral-600',
      galleryIcon: 'text-neutral-300',
      galleryText: 'text-neutral-300',
      galleryOverlay: 'from-black/70'
    }
  };

  const currentTheme = themes[theme];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cycleTheme = () => {
    const themeKeys = ['terracota', 'navy', 'dark'];
    const currentIndex = themeKeys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setTheme(themeKeys[nextIndex]);
  };

  const spaces = [
    {
      icon: Heart,
      title: "Yoga & Pilates",
      description: "Espacio luminoso con pisos de madera y amplitud perfecta para tu práctica",
      features: ["Luz natural abundante", "Mats y bloques", "Acústica ideal"]
    },
    {
      icon: Camera,
      title: "Fotografía & Video",
      description: "Salones versátiles con techos altos y ventanales perfectos para producción",
      features: ["Luz natural premium", "Espacios amplios", "Backdrops incluidos"]
    },
    {
      icon: Music,
      title: "Música & DJ",
      description: "Espacio acústico con carácter histórico para sesiones y clases",
      features: ["Equipamiento disponible", "Acústica natural", "Ambiente único"]
    },
    {
      icon: Sparkles,
      title: "Danza & Movimiento",
      description: "Pisos profesionales en espacio con arquitectura inspiradora",
      features: ["Techos altos", "Espejos disponibles", "Ventilación natural"]
    }
  ];

  const gallery = [
  { src: process.env.PUBLIC_URL + "/salon1.jpeg", label: "Salón 1" },
  { src: process.env.PUBLIC_URL + "/salon2.jpeg", label: "Salón 2" },
  { src: process.env.PUBLIC_URL + "/salon3.jpeg", label: "Salón 3" },
  { src: process.env.PUBLIC_URL + "/salon4.jpeg", label: "Salón 4" },
  { src: process.env.PUBLIC_URL + "/salon5.jpeg", label: "Salón 5" },
  { src: process.env.PUBLIC_URL + "/salon6.jpeg", label: "Salón 6" }]

  return (
    <div className={`min-h-screen ${currentTheme.bg} ${currentTheme.text}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${theme === 'dark' ? 'bg-neutral-900 border-neutral-800' : 'bg-white'} shadow-md border-b ${currentTheme.border}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className={`w-16 h-16 ${currentTheme.icon} rounded-2xl flex items-center justify-center shadow-lg border-2 border-white/80 hover:scale-105 transition-transform duration-300`}>
                <img src={process.env.PUBLIC_URL + "/logo-cabina.jpeg"} alt="La Cabina logo" className="w-14 h-14 object-contain drop-shadow-lg transition-transform duration-300" />
              </div>
              <span className={`text-2xl font-bold ${currentTheme.text}`}>
                LA CABINA
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#espacios" className={`${currentTheme.text} ${currentTheme.textLight} transition-colors font-semibold`}>Espacios</a>
              <a href="#galeria" className={`${currentTheme.text} ${currentTheme.textLight} transition-colors font-semibold`}>Galería</a>
              <a href="#precios" className={`${currentTheme.text} ${currentTheme.textLight} transition-colors font-semibold`}>Tarifas</a>
              <a href="#contacto" className={`${currentTheme.text} ${currentTheme.textLight} transition-colors font-semibold`}>Contacto</a>
              
              {/* Theme Toggle Button */}
              <button
                onClick={cycleTheme}
                className={`flex items-center gap-2 px-5 py-2.5 ${currentTheme.accent} ${theme === 'dark' ? 'text-neutral-900' : 'text-white'} rounded-lg ${currentTheme.accentHover} transition-all shadow-lg hover:shadow-xl font-medium`}
              >
                <Palette className="w-5 h-5" />
                <span className="text-sm">{currentTheme.name}</span>
              </button>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-neutral-800' : 'hover:bg-stone-100'} transition-colors ${currentTheme.text}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${theme === 'dark' ? 'bg-neutral-900' : 'bg-white'} border-t ${currentTheme.border}`}>
            <div className="px-4 py-4 space-y-3">
              <a href="#espacios" className={`block py-2 ${currentTheme.textLight} transition-colors`}>Espacios</a>
              <a href="#galeria" className={`block py-2 ${currentTheme.textLight} transition-colors`}>Galería</a>
              <a href="#precios" className={`block py-2 ${currentTheme.textLight} transition-colors`}>Tarifas</a>
              <a href="#contacto" className={`block py-2 ${currentTheme.textLight} transition-colors`}>Contacto</a>
              
              {/* Mobile Theme Button */}
              <button
                onClick={cycleTheme}
                className={`w-full flex items-center justify-center gap-2 px-4 py-2 ${currentTheme.accent} ${theme === 'dark' ? 'text-neutral-900' : 'text-white'} rounded-lg ${currentTheme.accentHover} transition-all mt-3`}
              >
                <Palette className="w-4 h-4" />
                <span className="text-sm font-medium">Tema: {currentTheme.name}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${currentTheme.bgHero}`}>
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-10 w-96 h-96 ${theme === 'terracota' ? 'bg-orange-200' : theme === 'navy' ? 'bg-blue-200' : 'bg-neutral-700'} rounded-full blur-3xl opacity-30`}></div>
          <div className={`absolute bottom-20 right-10 w-96 h-96 ${currentTheme.bgDark} rounded-full blur-3xl opacity-40`}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div className={`inline-block mb-6 px-4 py-2 ${currentTheme.accent} ${theme === 'dark' ? 'text-neutral-900' : 'text-white'} rounded-full`}>
            <span className="text-sm font-medium">Paysandú, Uruguay</span>
          </div>
          
          <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight ${currentTheme.text}`}>
            Tu espacio creativo
            <br />
            <span className={currentTheme.textLight}>
              con historia y alma
            </span>
          </h1>
          
          <p className={`text-xl sm:text-2xl ${currentTheme.textLight} mb-12 max-w-3xl mx-auto leading-relaxed`}>
            Salones luminosos con arquitectura histórica perfectos para yoga, fotografía, música, danza y más
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contacto"
              className={`group px-8 py-4 ${currentTheme.accent} ${theme === 'dark' ? 'text-neutral-900' : 'text-white'} rounded-full font-semibold text-lg ${currentTheme.accentHover} transition-all duration-300 flex items-center space-x-2 shadow-lg`}
            >
              <span>Reservá tu espacio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#galeria"
              className={`px-8 py-4 border-2 ${currentTheme.accent.replace('bg-', 'border-')} ${currentTheme.text} rounded-full font-semibold text-lg hover:${currentTheme.accent} ${theme === 'dark' ? 'hover:text-neutral-900' : 'hover:text-white'} transition-all duration-300`}
            >
              Ver espacios
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className={`text-3xl font-bold ${currentTheme.accentText} mb-2`}>6+</div>
              <div className={currentTheme.textLight}>Salones</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${currentTheme.accentText} mb-2`}>100m²</div>
              <div className={currentTheme.textLight}>Por sala</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${currentTheme.accentText} mb-2`}>4m</div>
              <div className={currentTheme.textLight}>Altura</div>
            </div>
          </div>
        </div>
      </div>

      {/* Espacios Section */}
      <div id="espacios" className={`py-24 px-4 sm:px-6 lg:px-8 ${currentTheme.bgAlt}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${currentTheme.text}`}>
              Espacios versátiles para
              <span className={`block ${currentTheme.textLight}`}>
                tu creatividad
              </span>
            </h2>
            <p className={`text-xl ${currentTheme.textLight} max-w-2xl mx-auto`}>
              Arquitectura histórica con luz natural y carácter único
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {spaces.map((space, idx) => (
              <div 
                key={idx}
                className={`group relative ${currentTheme.card} rounded-2xl p-8 border ${currentTheme.border} ${currentTheme.borderHover} transition-all duration-300 hover:shadow-xl overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${theme === 'terracota' ? 'from-orange-100' : theme === 'navy' ? 'from-blue-100' : 'from-neutral-700'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 ${currentTheme.icon} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <space.icon className={`w-7 h-7 ${currentTheme.iconText}`} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-3 ${currentTheme.text}`}>
                    {space.title}
                  </h3>
                  
                  <p className={`${currentTheme.textLight} mb-6 leading-relaxed`}>
                    {space.description}
                  </p>

                  <div className="space-y-2">
                    {space.features.map((feature, i) => (
                      <div key={i} className={`flex items-center space-x-2 ${currentTheme.textMuted}`}>
                        <div className={`w-1.5 h-1.5 ${currentTheme.accent} rounded-full`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div id="galeria" className={`py-24 px-4 sm:px-6 lg:px-8 ${currentTheme.bgDark}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${currentTheme.text}`}>
              Conocé nuestros
              <span className={`block ${currentTheme.textLight}`}>
                espacios únicos
              </span>
            </h2>
            <p className={`text-xl ${currentTheme.textLight}`}>
              Techos históricos, luz natural y pisos de parquet auténtico
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setActiveImage(idx)}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 py-2 px-3">
                  <p className="text-white font-semibold text-center text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={`py-24 px-4 sm:px-6 lg:px-8 ${currentTheme.bgAlt}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className={`w-16 h-16 ${currentTheme.icon} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <Clock className={`w-8 h-8 ${currentTheme.iconText}`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${currentTheme.text}`}>Flexibilidad total</h3>
              <p className={currentTheme.textLight}>Alquilá por hora, día o mes según tus necesidades</p>
            </div>

            <div className="text-center p-8">
              <div className={`w-16 h-16 ${currentTheme.icon} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <MapPin className={`w-8 h-8 ${currentTheme.iconText}`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${currentTheme.text}`}>Ubicación céntrica</h3>
              <p className={currentTheme.textLight}>En el corazón de Montevideo, fácil acceso</p>
            </div>

            <div className="text-center p-8">
              <div className={`w-16 h-16 ${currentTheme.icon} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <Users className={`w-8 h-8 ${currentTheme.iconText}`} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${currentTheme.text}`}>Comunidad creativa</h3>
              <p className={currentTheme.textLight}>Conectá con otros profesionales y artistas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="precios" className={`py-24 px-4 sm:px-6 lg:px-8 ${currentTheme.bgDark}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${currentTheme.text}`}>
              Tarifas accesibles
              <span className={`block ${currentTheme.textLight}`}>
                para todos
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`${currentTheme.bgAlt} rounded-2xl p-8 border ${currentTheme.border} shadow-lg hover:shadow-xl transition-shadow`}>
              <h3 className={`text-2xl font-bold mb-2 ${currentTheme.text}`}>Por hora</h3>
              <div className={`text-4xl font-bold ${currentTheme.accentText} mb-6`}>$XXX<span className={`text-xl ${currentTheme.textLight}`}>/hora</span></div>
              <p className={`${currentTheme.textLight} mb-6`}>Ideal para sesiones cortas y pruebas</p>
              <a href="#contacto" className={`block w-full text-center py-3 ${currentTheme.bgDark} ${currentTheme.text} rounded-lg transition-colors font-medium hover:opacity-80`}>
                Consultar
              </a>
            </div>

            <div className={`${currentTheme.accent} rounded-2xl p-8 border-2 ${currentTheme.accent.replace('bg-', 'border-')} relative shadow-xl transform md:scale-105`}>
              <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 ${currentTheme.badge} text-white rounded-full text-sm font-semibold`}>
                Más popular
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-neutral-900' : 'text-white'}`}>Por día</h3>
              <div className={`text-4xl font-bold ${theme === 'dark' ? 'text-neutral-900' : 'text-white'} mb-6`}>$XXX<span className={`text-xl ${theme === 'dark' ? 'text-neutral-700' : 'text-white/80'}`}>/día</span></div>
              <p className={`${theme === 'dark' ? 'text-neutral-700' : 'text-white/90'} mb-6`}>Perfecto para workshops y eventos</p>
              <a href="#contacto" className={`block w-full text-center py-3 ${theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-white text-stone-900'} rounded-lg transition-all font-medium hover:opacity-90`}>
                Consultar
              </a>
            </div>

            <div className={`${currentTheme.bgAlt} rounded-2xl p-8 border ${currentTheme.border} shadow-lg hover:shadow-xl transition-shadow`}>
              <h3 className={`text-2xl font-bold mb-2 ${currentTheme.text}`}>Mensual</h3>
              <div className={`text-4xl font-bold ${currentTheme.accentText} mb-6`}>$XXX<span className={`text-xl ${currentTheme.textLight}`}>/mes</span></div>
              <p className={`${currentTheme.textLight} mb-6`}>Para uso regular y clases continuas</p>
              <a href="#contacto" className={`block w-full text-center py-3 ${currentTheme.bgDark} ${currentTheme.text} rounded-lg transition-colors font-medium hover:opacity-80`}>
                Consultar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="contacto" className={`py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${currentTheme.bgCta}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${currentTheme.text}`}>
            ¿Listo para crear algo increíble?
          </h2>
          <p className={`text-xl ${currentTheme.textLight} mb-12`}>
            Reservá tu espacio hoy y comenzá tu próximo proyecto
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/59899999999" 
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 ${currentTheme.accent} ${theme === 'dark' ? 'text-neutral-900' : 'text-white'} rounded-full font-semibold text-lg ${currentTheme.accentHover} shadow-lg transition-all duration-300`}
            >
              WhatsApp
            </a>
            <a 
              href="tel:+59899999999"
              className={`px-8 py-4 border-2 ${currentTheme.accent.replace('bg-', 'border-')} ${currentTheme.text} rounded-full font-semibold text-lg hover:${currentTheme.accent} ${theme === 'dark' ? 'hover:text-neutral-900' : 'hover:text-white'} transition-all duration-300`}
            >
              Llamar ahora
            </a>
          </div>

          <div className={`mt-12 pt-12 border-t ${currentTheme.border}`}>
            <p className={`${currentTheme.textLight} mb-4`}>📍 Paysandú, Uruguay</p>
            <p className={currentTheme.textLight}>✉️ info@lacabina.uy</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${currentTheme.border} ${currentTheme.bgAlt}`}>
        <div className={`max-w-7xl mx-auto text-center ${currentTheme.textMuted}`}>
          <p>© 2025 La Cabina. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default CoworkLanding;