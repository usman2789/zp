'use client';
import { useEffect } from 'react';

export default function Call() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="call" className="bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Poppins'] font-extrabold text-white mb-4 sm:mb-6 tracking-wide">
            Book your Free Call
          </h2>
          <p className="text-sm sm:text-base md:text-xl font-['Inter'] font-medium text-white/80 max-w-4xl mx-auto px-2">
            Take the first step toward growing your brand with content that actually performs.
          </p>
        </div>

        {/* Calendly container */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl bg-gray-800/30 border border-gray-700/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
            <div 
              className="calendly-inline-widget rounded-lg overflow-hidden" 
              data-url="https://calendly.com/zocialplug/30min" 
              style={{
                minWidth: '320px',
                height: '700px',
                width: '100%'
              }}
            />
            
            <p className="text-white/70 text-xs sm:text-sm mt-4 text-center">
              Free 30-minute strategy session - No obligations, just results-focused advice
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
