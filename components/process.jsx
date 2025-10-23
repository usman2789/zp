import Image from 'next/image';

export default function Process() {
  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-4 sm:mb-6 tracking-wide">
            Know the Process
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-inter font-medium text-white/80 max-w-4xl mx-auto px-2">
            No complex forms or long calls — just results in three simple steps.
          </p>
        </div>

        {/* Process steps - Mobile: Stacked, Desktop: Horizontal */}
        <div className="relative flex flex-col md:flex-row justify-between items-center md:px-8 gap-8 md:gap-0">
          {/* Connecting line - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[var(--primary-orange-400)] transform -translate-y-1/2 z-0"></div>
          
          {/* Mobile connecting line */}
          <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-[var(--primary-orange-400)] transform -translate-x-1/2 z-0"></div>

          {/* Step 1: Book a Call */}
          <div className="relative z-10 flex flex-col items-center md:w-1/3">
            {/* Glowing circle background */}
            <div className="relative w-32 sm:w-40 h-32 sm:h-40 mb-4 sm:mb-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-[var(--primary-orange-400)] rounded-full blur-3xl opacity-40"></div>
              <div className="relative w-32 sm:w-40 h-32 sm:h-40 bg-[var(--primary-orange-400)] rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center">
                  <Image 
                    src="/icons/call.svg" 
                    alt="Book a Call" 
                    width={64} 
                    height={64}
                    className="w-full h-full filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-inter font-bold text-white tracking-wider text-center">
              Book a Call
            </h3>
          </div>

          {/* Step 2: Share your Details */}
          <div className="relative z-10 flex flex-col items-center md:w-1/3">
            {/* Glowing circle background */}
            <div className="relative w-32 sm:w-40 h-32 sm:h-40 mb-4 sm:mb-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-[var(--primary-orange-400)] rounded-full blur-3xl opacity-40"></div>
              <div className="relative w-32 sm:w-40 h-32 sm:h-40 bg-[var(--primary-orange-400)] rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-10 sm:w-14 h-10 sm:h-14 flex items-center justify-center">
                  <Image 
                    src="/icons/details.svg" 
                    alt="Share Details" 
                    width={56} 
                    height={56}
                    className="w-full h-full filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-inter font-bold text-white tracking-wider text-center">
              Share your Details
            </h3>
          </div>

          {/* Step 3: Scale your Business */}
          <div className="relative z-10 flex flex-col items-center md:w-1/3">
            {/* Glowing circle background */}
            <div className="relative w-32 sm:w-40 h-32 sm:h-40 mb-4 sm:mb-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-[var(--primary-orange-400)] rounded-full blur-3xl opacity-40"></div>
              <div className="relative w-32 sm:w-40 h-32 sm:h-40 bg-[var(--primary-orange-400)] rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center">
                  <Image 
                    src="/icons/scale.svg" 
                    alt="Scale Business" 
                    width={64} 
                    height={64}
                    className="w-full h-full filter brightness-0 invert"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-base sm:text-lg font-inter font-bold text-white tracking-wider text-center">
              Scale your Business
            </h3>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <button className="bg-gradient-to-r from-[var(--primary-orange-400)] to-[var(--primary-orange-500)] text-black font-poppins font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-lg hover:scale-105 transition-transform duration-200 glow-orange">
            Book a Free Call
          </button>
        </div>
      </div>
    </section>
  );
}
