function SocialCard({ social }) {
  return (
    <a 
      href={social.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block"
    >
      <div className="bg-black border border-[var(--border-gray)] rounded-xl p-4 sm:p-6 hover:bg-white/5 transition-colors duration-300 cursor-pointer">
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
    </a>
  );
}
