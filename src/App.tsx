import React, { useState, useEffect } from 'react';
import { Terminal, Circle, Heart, Sparkles, RotateCcw, ArrowLeft } from 'lucide-react';
import imgLogo from './assets/images/faboce2.png';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isReplaying, setIsReplaying] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowContent(true), 700);
      return () => clearTimeout(timer);
    }
    setShowContent(false);
  }, [isOpen]);

  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsReplaying(true);
    setShowContent(false);
    setTimeout(() => {
      setShowContent(true);
      setIsReplaying(false);
    }, 700);
  };

  const handleBack = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowContent(false);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen  from-blue-900 to-purple-900 flex items-center justify-center p-4" style={{backgroundColor: '#233746'}}>
      <div 
        className={`
          transition-all duration-700 transform perspective-1000
          ${isOpen ? 'rotate-y-180 w-full max-w-4xl' : 'cursor-pointer w-full max-w-lg hover:scale-105 transition-transform'}
        `}
        onClick={() => !isOpen && setIsOpen(true)}
      >
        {/* Card Front */}
        <div className={`
          bg-white rounded-xl shadow-2xl p-8 text-center relative
          ${isOpen ? 'hidden' : 'block'}
        `}>
          <img src={imgLogo} alt="" className='w-24 h-16 sm:w-48 sm:h-20 mx-auto mb-4 sm:mb-6 text-red-500 animate-float' />

          <h1 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">
          Para los Papás funcionales y los que todavía están en desarrollo
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-4 typing-effect">
            Haga click, para proceder a la felicitación
          </p>
          <div className="text-xs sm:text-sm text-gray-500 animate-glow">
            {'{'} Atentamente: <b>Sistemas y Desarrollo</b> {'}'}
          </div>
          <Sparkles className="absolute top-4 right-4 w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 animate-float" />
          <Sparkles className="absolute bottom-4 left-4 w-4 h-4 sm:w-6 sm:h-6 text-blue-400 animate-float" />
        </div>

        {/* Card Back (Terminal) */}
        <div className={`
          transform rotate-y-180 bg-[#252526] rounded-lg shadow-2xl overflow-hidden relative my-8
          ${isOpen ? 'block' : 'hidden'}
        `}>
          {/* Editor Top Bar */}
          <div className="bg-[#3c3c3c] p-2 flex items-center">
            <div className="flex space-x-2">
              <Circle size={12} className="text-red-500 animate-pulse" fill="currentColor" />
              <Circle size={12} className="text-yellow-500 animate-pulse delay-75" fill="currentColor" />
              <Circle size={12} className="text-green-500 animate-pulse delay-150" fill="currentColor" />
            </div>
            <div className="flex-1 text-center">
              <Terminal size={16} className="inline text-gray-400 mr-2 animate-glow" />
              <span className="text-gray-400 text-sm gradient-text">padreFaboce.js</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="absolute top-2 right-2 flex items-center space-x-2">
            <button
              onClick={handleBack}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              title="Volver a la tarjeta"
            >
              <ArrowLeft 
                size={20} 
                className="text-gray-400 hover:text-white transition-colors"
              />
            </button>
            <button
              onClick={handleReplay}
              disabled={isReplaying}
              className={`
                p-2 rounded-full
                hover:bg-white/10 transition-colors
                ${isReplaying ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
              title="Repetir animación"
            >
              <RotateCcw 
                size={20} 
                className={`
                  text-gray-400 hover:text-white transition-colors
                  ${isReplaying ? 'animate-spin' : ''}
                `}
              />
            </button>
          </div>

          {/* Line Numbers + Code Content */}
          <div className="flex">
            {/* Line Numbers */}
            <div className="hidden sm:block bg-[#1e1e1e] text-gray-600 p-4 text-right select-none">
              {Array.from({ length: 27 }).map((_, i) => (
                <div key={i} className="leading-6 hover:text-gray-400 transition-colors">{i + 1}</div>
              ))}
            </div>

            {/* Main Content */}
            <div className="flex-1 p-2 sm:p-4 font-mono text-xs sm:text-sm md:text-base overflow-x-auto">
              <div className={`space-y-4 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                <div className="hover:translate-x-2 transition-transform">
                  <span className="text-[#569cd6] animate-glow">class</span>
                  <span className="text-[#4ec9b0] animate-glow"> PadreFaboce</span>
                  <span className="text-white"> {`{`}</span>
                </div>

                <div className="pl-2 sm:pl-4 hover:translate-x-2 transition-transform">
                  <span className="text-[#569cd6]">constructor</span>
                  <span className="text-white">{`() {`}</span>
                  <div className="pl-2 sm:pl-4">
                    <span className="text-[#9cdcfe]">this</span>
                    <span className="text-white">.amor = </span>
                    <span className="text-[#ce9178] animate-pulse">"infinito"</span>
                    <span className="text-white">;</span>
                  </div>
                  <div className="pl-2 sm:pl-4">
                    <span className="text-[#9cdcfe]">this</span>
                    <span className="text-white">.area = </span>
                    <span className="text-[#ce9178] animate-pulse">"Sistemas"</span>
                    <span className="text-white">;</span>
                  </div>
                  <span className="text-white">{`}`}</span>
                </div>

                <div className="pl-2 sm:pl-4 hover:translate-x-2 transition-transform">
                  <span className="text-[#dcdcaa]">felicitar</span>
                  <span className="text-white">{`() {`}</span>
                  <div className="pl-2 sm:pl-4 space-y-2">
                    <div>
                      <span className="text-[#c586c0]">return</span>
                      <span className="text-white"> {`{`}</span>
                    </div>
                    <div className="pl-2 sm:pl-4 hover:scale-105 transition-transform">
                      <span className="text-[#9cdcfe]">mensaje</span>
                      <span className="text-white">: </span>
                      <span className="text-[#ce9178] gradient-text">"¡Feliz Día del Padre! Este mes te lo dedicamos con todo nuestro cariño"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-2 sm:pl-4 hover:scale-105 transition-transform">
                      <span className="text-[#9cdcfe]">razon</span>
                      <span className="text-white">: </span>
                      <span className="text-[#ce9178] gradient-text">"Porque su paciencia y sabiduría nos inspiran cada día"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-2 sm:pl-4 hover:scale-105 transition-transform">
                      <span className="text-[#9cdcfe]">gratitud</span>
                      <span className="text-white">: </span>
                      <span className="text-[#ce9178] gradient-text">"Te agradecemos profundamente por tus enseñanzas y tu amor"</span>
                    </div>
                    <div className="pl-2 sm:pl-4 hover:scale-105 transition-transform">
                      <span className="text-[#9cdcfe]">dedicacion</span>
                      <span className="text-white">: </span>
                      <span className="text-[#ce9178] gradient-text"> "Desde el área de "</span>
                      <span className="text-white"> + </span>
                      <span className="text-[#9cdcfe]">this</span>
                      <span className="text-white">.area  +</span>
                      <span className="text-[#ce9178] gradient-text"> ", celebramos tu esfuerzo y dedicación`"</span>
                    </div>
                    <span className="text-white">{`}`}</span>
                  </div>
                  <span className="text-white">{`}`}</span>
                </div>

                <div className="pl-2 sm:pl-4 hover:translate-x-2 transition-transform">
                  <span className="text-[#dcdcaa]">abrazar</span>
                  <span className="text-white">{`() {`}</span>
                  <div className="pl-2 sm:pl-4">
                    <span className="text-[#c586c0]">while</span>
                    <span className="text-white">{`(true) {`}</span>
                    <div className="pl-2 sm:pl-4">
                      <span className="text-[#9cdcfe]">this</span>
                      <span className="text-white">.amor++;</span>
                    </div>
                    <span className="text-white">{`}`}</span>
                  </div>
                  <span className="text-white">{`}`}</span>
                </div>

                <div className="text-white">{`}`}</div>

                <div className="mt-8 space-y-2">
                  <div className="hover:translate-x-2 transition-transform">
                    <span className="text-[#569cd6]">const</span>
                    <span className="text-[#4fc1ff] animate-pulse"> papa</span>
                    <span className="text-white"> = </span>
                    <span className="text-[#569cd6]">new</span>
                    <span className="text-[#4ec9b0]"> PadreFaboce</span>
                    <span className="text-white">();</span>
                  </div>
                  <div className="hover:translate-x-2 transition-transform">
                    <span className="text-[#4fc1ff]">papa</span>
                    <span className="text-white">.felicitar();</span>
                  </div>
                  <div className="hover:translate-x-2 transition-transform">
                    <span className="text-[#4fc1ff]">papa</span>
                    <span className="text-white">.abrazar();</span>
                  </div>
                </div>
                <div className="mt-8 text-[#6a9955] animate-glow">// Este codigo infinito podría colapsar el sistema, mejor solo expresarlo simbólicamente</div>
                <div className="mt-8 text-[#6a9955] animate-glow">// Con mucho amor, Sistem❤️s</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;