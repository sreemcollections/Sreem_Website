import kuchipudiDancer from '@/assets/kuchipudi-dancer.jpg';
import elephantDesign from '@/assets/elephant_design.jpg';

const Designers = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Motion Background - Similar to Home Page */}
      <div className="absolute inset-0">
        {/* Base animated background */}
        <div 
          className="absolute inset-0 bg-cover bg-center animate-[float_8s_ease-in-out_infinite]"
          style={{
            backgroundImage: `url(${kuchipudiDancer})`,
            filter: 'brightness(0.25) sepia(0.3) hue-rotate(10deg)'
          }}
        />
        
        {/* Overlay with saree/jewelry texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay animate-[float_10s_ease-in-out_infinite_reverse]"
          style={{
            backgroundImage: `url(${elephantDesign})`,
          }}
        />
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/30" />
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-secondary/20 to-primary/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-gradient-to-br from-accent/20 to-secondary/15 rounded-full blur-2xl animate-[float_7s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-primary/15 to-accent/10 rounded-full blur-xl animate-[float_5s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
      </div>

      {/* Ancient Scroll/Book Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full">
          {/* Scroll/Book Paper Effect */}
          <div className="relative animate-fade-in">
            {/* Ornate Border Frame - Top */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-64 h-16">
              <svg viewBox="0 0 200 40" className="w-full h-full text-secondary/80 drop-shadow-lg">
                <path d="M10,20 Q30,5 50,20 T90,20 Q110,5 130,20 T170,20 Q190,5 190,20" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse-subtle"
                />
                <circle cx="100" cy="20" r="8" fill="currentColor" className="opacity-60" />
                <circle cx="50" cy="20" r="5" fill="currentColor" className="opacity-40" />
                <circle cx="150" cy="20" r="5" fill="currentColor" className="opacity-40" />
              </svg>
            </div>

            {/* Main Scroll Paper */}
            <div className="relative bg-gradient-to-br from-amber-50/95 via-orange-50/90 to-yellow-50/95 backdrop-blur-md rounded-lg shadow-2xl overflow-hidden border-4 border-secondary/30">
              {/* Paper texture overlay */}
              <div className="absolute inset-0 opacity-30 mix-blend-multiply"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c5a03c' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              />

              {/* Decorative side borders with Indian motifs */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-secondary/20 to-transparent">
                <div className="flex flex-col items-center justify-around h-full py-8">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-primary/40 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-secondary/60" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-secondary/20 to-transparent">
                <div className="flex flex-col items-center justify-around h-full py-8">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full border-2 border-primary/40 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-secondary/60" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="relative px-12 md:px-20 py-16 md:py-24">
                {/* Decorative mandala at top */}
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 relative animate-[spin_20s_linear_infinite]">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-primary/60">
                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
                      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
                      <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none" />
                      {[...Array(8)].map((_, i) => (
                        <g key={i} transform={`rotate(${i * 45} 50 50)`}>
                          <circle cx="50" cy="10" r="4" fill="currentColor" />
                          <line x1="50" y1="20" x2="50" y2="30" stroke="currentColor" strokeWidth="1.5" />
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>

                {/* Main text content */}
                <div className="text-center space-y-8">
                  <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary animate-fade-in" 
                    style={{ 
                      textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    Coming Soon
                  </h1>
                  
                  <div className="w-32 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto" />
                  
                  <div className="max-w-2xl mx-auto space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
                      Where threads tell stories of ancient looms and skilled hands shape precious metals into timeless treasures
                    </p>
                    
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed italic">
                      From the silk weavers of Banaras to the temple jewelers of Tamil Nadu,
                      from the Bandhani artists of Gujarat to the Kundan craftsmen of Rajasthan —
                      we are curating India's finest artisan-designer collaborations
                    </p>
                    
                    <div className="pt-4">
                      <p className="text-sm md:text-base text-gray-500 font-medium tracking-wider uppercase">
                        A celebration of raw craftsmanship meets luxury design
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom decorative element */}
                <div className="flex justify-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent to-secondary/60" />
                    <div className="w-3 h-3 rounded-full bg-secondary/60 animate-pulse-subtle" />
                    <div className="w-2 h-2 rounded-full bg-primary/40" />
                    <div className="w-3 h-3 rounded-full bg-secondary/60 animate-pulse-subtle" style={{ animationDelay: '1s' }} />
                    <div className="w-16 h-px bg-gradient-to-l from-transparent to-secondary/60" />
                  </div>
                </div>
              </div>
            </div>

            {/* Ornate Border Frame - Bottom */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-16">
              <svg viewBox="0 0 200 40" className="w-full h-full text-secondary/80 drop-shadow-lg rotate-180">
                <path d="M10,20 Q30,5 50,20 T90,20 Q110,5 130,20 T170,20 Q190,5 190,20" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse-subtle"
                />
                <circle cx="100" cy="20" r="8" fill="currentColor" className="opacity-60" />
                <circle cx="50" cy="20" r="5" fill="currentColor" className="opacity-40" />
                <circle cx="150" cy="20" r="5" fill="currentColor" className="opacity-40" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designers;
