import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32">
      {/* Background decorative ellipses */}
      <div className="absolute top-24 sm:top-48 -right-40 sm:-right-80 w-[500px] sm:w-[830px] h-[500px] sm:h-[830px] bg-gradient-to-l from-[var(--primary-orange-400)] via-transparent to-transparent opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-24 sm:top-48 -left-40 sm:-left-80 w-[500px] sm:w-[830px] h-[500px] sm:h-[830px] bg-gradient-to-r from-[var(--primary-orange-400)] via-transparent to-transparent opacity-20 rounded-full blur-3xl"></div>
      
      {/* Main content */}
      <div className="text-center max-w-6xl mx-auto w-full">
        {/* Main headline */}
        <div className="mb-3 sm:mb-5">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-poppins font-bold text-white leading-snug sm:leading-tight tracking-tight mb-1 sm:mb-2">
            <span className="text-[var(--primary-orange-400)] text-shadow-orange font-open-sans text-2xl sm:text-3xl md:text-5xl lg:text-6xl">[</span>
            Videos that{' '}
            <span className="text-[var(--primary-blue)]">Grow</span>
            . Thumbnails that{' '}
            <span className="text-[var(--primary-blue)]">Click</span>
            . Content that{' '}
            <span className="text-[var(--primary-blue)]">Converts</span>
            <span className="text-[var(--primary-orange-400)] text-shadow-orange font-open-sans text-2xl sm:text-3xl md:text-5xl lg:text-6xl">]</span>
            .
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-4 sm:mb-5">
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-white/80 font-inter font-medium max-w-4xl mx-auto leading-relaxed">
            We help{' '}
            <span className="text-[var(--primary-orange-400)]">creators</span>
            ,{' '}
            <span className="text-[var(--primary-orange-400)]">brands</span>
            , and{' '}
            <span className="text-[var(--primary-orange-400)]">agencies</span>
            {' '}grow with videos that stop the scroll and drive real results.
          </p>
        </div>

        {/* Lower copy with icons */}
        <div className="mb-5 sm:mb-6 flex flex-col items-center gap-2 sm:gap-2">
          <p className="text-white/70 font-inter text-xs sm:text-xs md:text-sm">
            Your plug for smarter social content.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
            <div className="w-5 sm:w-5 md:w-6 h-5 sm:h-5 md:h-6 glow-orange">
              <Image 
                src="/icons/davinciresolve.svg" 
                alt="DaVinci Resolve" 
                width={24} 
                height={24}
                className="w-full h-full"
              />
            </div>
            <div className="w-5 sm:w-5 md:w-6 h-5 sm:h-5 md:h-6">
              <Image 
                src="/icons/aftereffect.svg" 
                alt="After Effects" 
                width={24} 
                height={24}
                className="w-full h-full"
              />
            </div>
            <div className="w-4 sm:w-4 md:w-5 h-4 sm:h-4 md:h-5 glow-orange">
              <Image 
                src="/icons/adobe.svg" 
                alt="Adobe" 
                width={20} 
                height={20}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-[var(--primary-orange-400)] to-[var(--primary-orange-500)] text-black font-poppins font-bold px-6 sm:px-10 md:px-12 py-2.5 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-lg hover:scale-105 transition-transform duration-200 glow-orange mb-6 sm:mb-10 md:mb-12">
          Book a Free Call
        </button>
      </div>

      {/* Hero image */}
      <div className="relative w-full max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-0">
        <div className="bg-[#191919] border border-sm:border-2 border-[var(--primary-black-400)] rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-6 md:p-8 aspect-video flex items-center justify-center relative overflow-hidden">
          {/* Zocial Plug logo in center */}
          <div className="text-2xl sm:text-4xl md:text-6xl font-bold text-white/10">
            <span className="text-[var(--primary-orange-400)]/20">[</span>
            <span className="font-poppins tracking-wider">Zocial Plug</span>
            <span className="text-[var(--primary-orange-400)]/20">]</span>
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        {/* Shadow effect */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] h-6 sm:h-8 bg-black/50 blur-xl rounded-full"></div>
      </div>
    </section>
  );
}
