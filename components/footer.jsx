import Image from 'next/image';

const socialLinks = [
  {
    name: 'Facebook',
    handle: '@zocialplug',
    icon: '/icons/fb.svg',
    url: '#'
  },
  {
    name: 'TikTok',
    handle: '@zocialplug',
    icon: '/icons/tiktok.svg',
    url: '#'
  },
  {
    name: 'Instagram',
    handle: '@zocialplug',
    icon: '/icons/insta.svg',
    url: '#'
  },
  {
    name: 'LinkedIn',
    handle: '@zocialplug',
    icon: '/icons/linkedin.svg',
    url: '#'
  }
];

function SocialCard({ social }) {
  return (
    <div className="bg-[var(--card-background)] border border-[var(--border-gray)] rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-colors duration-300">
      <div className="flex items-center justify-between mb-3 sm:mb-5">
        <div className="w-7 sm:w-8 h-7 sm:h-8 bg-white/20 rounded-full flex items-center justify-center">
          <Image 
            src={social.icon} 
            alt={social.name} 
            width={20} 
            height={20}
            className="w-4 sm:w-5 h-4 sm:h-5"
          />
        </div>
        <div className="w-6 sm:w-7 h-6 sm:h-7">
          <Image 
            src="/icons/arrow.svg" 
            alt="Arrow" 
            width={28} 
            height={28}
            className="w-full h-full filter invert"
          />
        </div>
      </div>
      <div>
        <h3 className="text-base sm:text-xl font-['Inter'] font-bold text-white mb-1 sm:mb-2">
          {social.name}
        </h3>
        <p className="text-xs sm:text-sm font-['Inter'] font-medium text-white/50">
          {social.handle}
        </p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Background decorative ellipses */}
      <div className="absolute bottom-0 -left-40 sm:-left-80 w-[1000px] sm:w-[2000px] h-[1000px] sm:h-[2000px] bg-gradient-to-t from-[var(--primary-orange-400)]/10 via-transparent to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Call to action section */}
          <div className="text-center mb-10 sm:mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Poppins'] font-extrabold text-white mb-6 sm:mb-8 tracking-wide px-2">
              Book Your Free Call Now!
            </h2>
            <button className="bg-gradient-to-r from-[var(--primary-orange-400)] to-[var(--primary-orange-500)] text-black font-['Poppins'] font-bold px-8 sm:px-16 py-3 sm:py-5 rounded-full text-sm sm:text-xl hover:scale-105 transition-transform duration-200 glow-orange">
              Book a Free Call
            </button>
          </div>

          {/* Social media cards - Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-14">
            {socialLinks.map((social) => (
              <SocialCard key={social.name} social={social} />
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-white/70 font-['Inter'] text-xs sm:text-sm px-2">
              © 2025 Zocial Plug Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
