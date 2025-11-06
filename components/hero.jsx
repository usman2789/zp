import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 overflow-hidden"
      style={{
        backgroundImage: "url('/glow/leftglow.png'), url('/glow/rightglow.png')",
        backgroundPosition: 'left center, right center',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: 'clamp(240px, 45vw, 520px) 120%, clamp(240px, 45vw, 520px) 120%',
      }}
    >
      {/* Main content */}
      <div className="text-center max-w-6xl mx-auto w-full">
        {/* Main headline */}
        <div className="mb-3 sm:mb-5">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-poppins font-bold text-white leading-snug sm:leading-tight tracking-tight mb-1 sm:mb-2">
            <span className="text-[var(--primary-orange-400)] text-shadow-orange font-open-sans text-2xl sm:text-3xl md:text-5xl lg:text-6xl">[</span>
            Videos that{' '}
            <span className="text-[var(--primary-blue)]">Grow</span>
            <span className="hidden sm:inline">. Thumbnails that{' '}</span>
            <span className="sm:hidden"><br /></span>
            <span className="hidden sm:inline"><span className="text-[var(--primary-blue)]">Click</span>. Content that{' '}</span>
            <span className="sm:hidden">Thumbnails that <span className="text-[var(--primary-blue)]">Click</span>.</span>
            <span className="sm:hidden"><br /></span>
            <span className="sm:hidden">Content that <span className="text-[var(--primary-blue)]">Convert</span></span>
            <span className="hidden sm:inline"><span className="text-[var(--primary-blue)]">Converts</span></span>
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
        <a href='#call' className="inline-block bg-gradient-to-r from-[var(--primary-orange-400)] to-[var(--primary-orange-500)] text-black font-poppins font-bold px-6 sm:px-10 md:px-12 py-2.5 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-lg hover:scale-105 transition-transform duration-200 glow-orange mb-6 sm:mb-10 md:mb-12">
          Book a Free Call
        </a>
      </div>

      {/* Hero media */}
      <div className="relative w-full max-w-[520px] sm:max-w-[680px] md:max-w-[760px] mx-auto px-4 sm:px-0">
        <div className="bg-[#191919] border border-sm:border-2 border-[var(--primary-black-400)] rounded-lg sm:rounded-xl md:rounded-2xl p-0 overflow-hidden">
          <div className="relative w-full pb-[56.25%]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/hero.webm"
              poster="/logo.png"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
