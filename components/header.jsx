import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image 
            src="/logo.png" 
            alt="Zocial Plug Logo" 
            width={40}
            height={40}
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
        </div>

        {/* CTA Button */}
        <button className="bg-gradient-to-r from-[var(--primary-orange-400)] to-[var(--primary-orange-500)] text-black font-poppins font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-xs md:text-sm hover:scale-105 transition-transform duration-200 glow-orange whitespace-nowrap">
          Book a Free Call
        </button>
      </div>
    </header>
  );
}
