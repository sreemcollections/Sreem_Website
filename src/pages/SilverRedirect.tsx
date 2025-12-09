import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Gem } from 'lucide-react';

export default function SilverRedirect() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    const redirectTimer = setTimeout(() => {
      navigate('/jewelry/panchaloham');
    }, 6700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Jewlery_Trans.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 w-full">
        <div
          className={`max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10"></div>
            
            <div className="relative p-8 sm:p-12 text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-white blur-2xl opacity-50 animate-pulse"></div>
                  <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-6 border border-white/30 shadow-lg">
                    <Gem className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-playfair font-bold mb-6 text-white drop-shadow-2xl">
                Silver Collection
              </h1>

              {/* Coming Soon Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/90 to-yellow-500/90 backdrop-blur-sm text-white px-6 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-xl border border-amber-300/30">
                <Gem className="h-4 w-4" />
                Coming Soon
              </div>

              {/* Message */}
              <p className="text-xl sm:text-2xl text-white font-light mb-4 leading-relaxed max-w-xl mx-auto drop-shadow-lg">
                Our exquisite Silver Collection is arriving soon!
              </p>

              <p className="text-base sm:text-lg text-white/90 mb-8 drop-shadow-md">
                In the meantime, explore our stunning{' '}
                <span className="font-semibold text-amber-300">
                  Panchaloha Collection
                </span>
              </p>

              {/* Animated Dots */}
              <div className="flex justify-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0s' }}></div>
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.4s' }}></div>
              </div>

              {/* Redirect Message */}
              <p className="text-sm text-white/80 drop-shadow-md">
                Redirecting you to Panchaloha Collection...
              </p>
            </div>

            <div className="absolute inset-0 rounded-3xl border-2 border-white/10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
