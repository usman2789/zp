export default function Call() {
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
          <div className="w-full max-w-sm bg-gray-800/50 border border-gray-700 rounded-lg p-4 sm:p-8 text-center">
            {/* Placeholder for Calendly widget */}
            <div className="bg-white rounded-lg p-4 sm:p-8 text-black min-h-[400px] sm:min-h-[600px] flex flex-col items-center justify-center">
              <div className="mb-6 sm:mb-8">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-[var(--primary-orange-400)] rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Schedule Your Call</h3>
                <p className="text-sm sm:text-base text-gray-600">Choose a time that works best for you</p>
              </div>
              
              {/* Mock calendar interface */}
              <div className="w-full space-y-3 sm:space-y-4">
                <div className="grid grid-cols-7 gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  <div className="text-center">Sun</div>
                  <div className="text-center">Mon</div>
                  <div className="text-center">Tue</div>
                  <div className="text-center">Wed</div>
                  <div className="text-center">Thu</div>
                  <div className="text-center">Fri</div>
                  <div className="text-center">Sat</div>
                </div>
                
                <div className="grid grid-cols-7 gap-1 sm:gap-2">
                  {[...Array(21)].map((_, i) => (
                    <button 
                      key={i} 
                      className="h-6 sm:h-8 text-xs sm:text-sm text-gray-700 hover:bg-[var(--primary-orange-400)] hover:text-white rounded transition-colors"
                    >
                      {i + 10}
                    </button>
                  ))}
                </div>
                
                <div className="mt-4 sm:mt-6 space-y-2">
                  <button className="w-full py-2 px-3 sm:px-4 bg-[var(--primary-orange-400)] text-white text-sm rounded-lg hover:bg-[var(--primary-orange-500)] transition-colors">
                    9:00 AM
                  </button>
                  <button className="w-full py-2 px-3 sm:px-4 bg-[var(--primary-orange-400)] text-white text-sm rounded-lg hover:bg-[var(--primary-orange-500)] transition-colors">
                    11:00 AM
                  </button>
                  <button className="w-full py-2 px-3 sm:px-4 bg-[var(--primary-orange-400)] text-white text-sm rounded-lg hover:bg-[var(--primary-orange-500)] transition-colors">
                    2:00 PM
                  </button>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mt-4 sm:mt-6">
                * Replace with actual Calendly embed
              </p>
            </div>
            
            <p className="text-white/70 text-xs sm:text-sm mt-3 sm:mt-4">
              Free 30-minute strategy session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
