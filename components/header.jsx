import Image from 'next/image';
import SkewButton from './button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Zocial Plug Logo"
            width={2688}
            height={680}
            priority
            sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, 180px"
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
        </div>

        {/* CTA Button */}
        <SkewButton
          variant="primary"
          className="!px-4 sm:!px-6 md:!px-7 !py-2 sm:!py-2.5 md:!py-3 !normal-case text-xs sm:text-xs md:text-sm"
        >
          Book a Free Call
        </SkewButton>
      </div>
    </header>
  );
}
