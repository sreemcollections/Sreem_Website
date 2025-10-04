export default function Designers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-secondary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-accent rounded-full"></div>
      </div>

      {/* Scroll Container */}
      <div className="relative max-w-3xl w-full">
        {/* Top Decorative Rod */}
        <div className="flex justify-center mb-4">
          <div className="w-3/4 h-3 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full shadow-lg"></div>
        </div>

        {/* Main Scroll Paper */}
        <div className="relative bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-50 rounded-lg shadow-2xl border-8 border-secondary/30 p-8 md:p-12 transform hover:scale-[1.01] transition-transform duration-500">
          {/* Ornate Border Pattern - Top */}
          <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 800 60" preserveAspectRatio="xMidYMid slice">
              {/* Paisley pattern across top */}
              {[...Array(8)].map((_, i) => (
                <g key={i} transform={`translate(${i * 100}, 0)`}>
                  <path
                    d="M50 10 Q 60 15, 60 25 Q 60 35, 50 40 Q 45 35, 45 25 Q 45 15, 50 10 Z"
                    fill="url(#gradient1)"
                    opacity="0.3"
                  />
                  <circle cx="50" cy="25" r="3" fill="#C5A03C" opacity="0.5" />
                </g>
              ))}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#800020" />
                  <stop offset="100%" stopColor="#C5A03C" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Ornate Border Pattern - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden rotate-180">
            <svg className="w-full h-full" viewBox="0 0 800 60" preserveAspectRatio="xMidYMid slice">
              {[...Array(8)].map((_, i) => (
                <g key={i} transform={`translate(${i * 100}, 0)`}>
                  <path
                    d="M50 10 Q 60 15, 60 25 Q 60 35, 50 40 Q 45 35, 45 25 Q 45 15, 50 10 Z"
                    fill="url(#gradient2)"
                    opacity="0.3"
                  />
                  <circle cx="50" cy="25" r="3" fill="#C5A03C" opacity="0.5" />
                </g>
              ))}
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#800020" />
                  <stop offset="100%" stopColor="#C5A03C" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Left Decorative Border */}
          <div className="absolute left-0 top-16 bottom-16 w-12 flex flex-col justify-center items-center space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-secondary/40 bg-secondary/10"></div>
            ))}
          </div>

          {/* Right Decorative Border */}
          <div className="absolute right-0 top-16 bottom-16 w-12 flex flex-col justify-center items-center space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-secondary/40 bg-secondary/10"></div>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 text-center space-y-8 px-4 md:px-8 py-8">
            {/* Decorative Top Flourish */}
            <div className="flex justify-center">
              <svg width="150" height="40" viewBox="0 0 150 40">
                <path
                  d="M10 20 Q 35 5, 75 20 Q 115 35, 140 20"
                  stroke="#800020"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
                <circle cx="75" cy="20" r="4" fill="#C5A03C" />
                <circle cx="30" cy="15" r="2" fill="#C5A03C" opacity="0.7" />
                <circle cx="120" cy="15" r="2" fill="#C5A03C" opacity="0.7" />
              </svg>
            </div>

            {/* Main Text */}
            <div className="space-y-6">
              <h1 className="font-playfair text-5xl md:text-7xl font-bold text-primary tracking-wide animate-fade-in">
                Coming Soon
              </h1>
              
              <div className="flex justify-center">
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
              </div>

              <p className="font-playfair text-xl md:text-2xl text-foreground/80 italic leading-relaxed max-w-xl mx-auto">
                Discover the master artisans and designers who bring tradition to life with every thread
              </p>

              {/* Decorative Mandala */}
              <div className="flex justify-center my-8">
                <svg width="100" height="100" viewBox="0 0 100 100" className="animate-spin-slow">
                  <defs>
                    <radialGradient id="mandalaGradient">
                      <stop offset="0%" stopColor="#800020" />
                      <stop offset="50%" stopColor="#C5A03C" />
                      <stop offset="100%" stopColor="#17494D" />
                    </radialGradient>
                  </defs>
                  {/* Outer circle */}
                  <circle cx="50" cy="50" r="45" stroke="url(#mandalaGradient)" strokeWidth="1" fill="none" opacity="0.3" />
                  {/* Middle circle */}
                  <circle cx="50" cy="50" r="30" stroke="url(#mandalaGradient)" strokeWidth="1" fill="none" opacity="0.4" />
                  {/* Inner circle */}
                  <circle cx="50" cy="50" r="15" stroke="url(#mandalaGradient)" strokeWidth="1" fill="none" opacity="0.5" />
                  {/* Petals */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i * 45 * Math.PI) / 180;
                    const x = 50 + 35 * Math.cos(angle);
                    const y = 50 + 35 * Math.sin(angle);
                    return (
                      <circle key={i} cx={x} cy={y} r="4" fill="#C5A03C" opacity="0.6" />
                    );
                  })}
                  <circle cx="50" cy="50" r="8" fill="#800020" opacity="0.7" />
                </svg>
              </div>

              <p className="text-muted-foreground text-sm md:text-base tracking-wider">
                Curating an exclusive collection of India's finest craftspeople
              </p>
            </div>

            {/* Decorative Bottom Flourish */}
            <div className="flex justify-center">
              <svg width="150" height="40" viewBox="0 0 150 40">
                <path
                  d="M10 20 Q 35 35, 75 20 Q 115 5, 140 20"
                  stroke="#800020"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
                <circle cx="75" cy="20" r="4" fill="#C5A03C" />
                <circle cx="30" cy="25" r="2" fill="#C5A03C" opacity="0.7" />
                <circle cx="120" cy="25" r="2" fill="#C5A03C" opacity="0.7" />
              </svg>
            </div>
          </div>

          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-amber-100/20 to-transparent pointer-events-none rounded-lg"></div>
        </div>

        {/* Bottom Decorative Rod */}
        <div className="flex justify-center mt-4">
          <div className="w-3/4 h-3 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full shadow-lg"></div>
        </div>

        {/* Hanging Tassels */}
        <div className="flex justify-between px-8 mt-2">
          <div className="flex flex-col items-center">
            <div className="w-1 h-8 bg-secondary/60"></div>
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-1 h-8 bg-secondary/60"></div>
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
