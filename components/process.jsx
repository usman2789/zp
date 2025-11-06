import Image from 'next/image';

export default function Process() {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-4 sm:mb-6 tracking-wide">
            Know the Process
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-inter font-medium text-white/80 max-w-4xl mx-auto px-2">
            No complex forms or long calls — just results in three simple steps.
          </p>
        </div>

        {/* Steps - Even spacing on all devices */}
        <div className="relative w-full py-8 sm:py-12 md:py-0 flex justify-center">
          {/* Mobile: Fixed width container, Desktop: Max-width */}
          <div className="relative flex justify-between items-center w-full sm:max-w-3xl md:max-w-5xl px-2 sm:px-4 md:px-0 gap-0">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 sm:h-1.5 md:h-2 bg-[#3a3a3a] transform -translate-y-1/2 z-0"></div>

            {[
              { icon: '/icons/call.svg', label: 'Book a Call' },
              { icon: '/icons/details.svg', label: 'Share your Details' },
              { icon: '/icons/scale.svg', label: 'Scale your Business' },
            ].map((step, i) => (
              <div
                key={i}
                className="relative z-10 flex flex-col items-center flex-shrink-0"
              >
                {/* Circle with glow */}
                <div className="relative w-14 sm:w-28 md:w-36 h-14 sm:h-28 md:h-36 mb-3 sm:mb-6 md:mb-8 flex items-center justify-center">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[var(--primary-orange-400)] rounded-full blur-md sm:blur-xl md:blur-2xl opacity-25 sm:opacity-30 md:opacity-35"></div>
                  
                  {/* Circle background - darker gray */}
                  <div className="relative w-full h-full bg-[#3a3a3a] rounded-full flex items-center justify-center shadow-md sm:shadow-lg md:shadow-xl border border-[#4a4a4a]">
                    <Image
                      src={step.icon}
                      alt={step.label}
                      width={64}
                      height={64}
                      className="w-4 sm:w-10 md:w-14 h-4 sm:h-10 md:h-14 filter brightness-0 invert opacity-90"
                    />
                  </div>
                </div>
                
                {/* Label */}
                <h3 className="text-[10px] sm:text-sm md:text-base font-inter font-bold text-white text-center whitespace-normal leading-tight px-1 sm:px-2 max-w-[80px] sm:max-w-none">
                  {step.label}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <a href="#call" className="inline-block bg-gradient-to-r from-[var(--primary-orange-400)] to-[var(--primary-orange-500)] text-black font-poppins font-bold px-8 sm:px-12 md:px-16 py-2.5 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-lg hover:scale-105 transition-transform duration-200 glow-orange">
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
