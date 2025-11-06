/**
 * WhatWeDo Component - Interactive Services Showcase
 * 
 * This component displays Zocial Plug's 5 main services with animated carousels.
 * Features:
 * - Auto-rotating service showcase (changes every 4 seconds)
 * - Manual activation on hover
 * - Infinite scrolling carousels for active services
 * - Smooth animations with pause-on-hover functionality
 * - Responsive design for all screen sizes
 * 
 * Services included:
 * 1. Short-Form Content (Reels, TikToks, Shorts)
 * 2. Long-Form Video Editing (YouTube, Podcasts, Ads)
 * 3. Thumbnail Designs (Click-worthy visuals)
 * 4. 3D/2D Animations (Motion graphics)
 * 5. Content Strategy (Strategic planning)
 */

'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/css';

// Service data configuration
// Each service contains metadata for display and carousel functionality
const services = [
  {
    id: 'short-content',
    title: 'Short-Form Content',
    description: 'Reels, TikToks, and Shorts that actually perform.',
    icon: '/icons/short-content.svg',
    images: Array(5).fill('/logo.png'),
    youtubeVideoIds: ['c4gmzUPHDqI', 'vbi6EyutPhs', 'd5guMcEWJ7c', 'XoHs4jayUDI', 'EMfNOAE-rDY'],
  },
  {
    id: 'long-content',
    title: 'Long-Form Video Editing',
    description: 'Polished, story-driven edits for YouTube, podcasts, and video ads.',
    icon: '/icons/long-content.svg',
    images: Array(5).fill('/logo.png'),
    youtubeVideoIds: ['N2Q3Mw9LyjA', 'Zv368DPLn-Q', 'pr4-Raq_ZZU', 'cv8-RmNsqo8', 'Udl3u8LODjc', 'oaDLXh8x7YQ', 'gHYDonk3U8s', 'ZsYUZh0qyjY', 'AU1PrjWaM3c', 'a2eXEKrABwA', 'cW1hetExf_U', 'BT40h5F5aqA', 'HaaZJi_mNis', '3dKeRpJ1wQI', 'FUwAeYBKpzI', 'O52Jkh2RfEM', 'PwhX3Dl8a0w', 'BSP0LWMES-U']
  },
  {
    id: 'thumbnails',
    title: 'Thumbnail Designs',
    description: 'Scroll-stopping visuals that earn the click.',
    icon: '/icons/thumbnail.svg',
    images: Array(5).fill('/logo.png'),
    youtubeVideoIds: [],
  },
  {
    id: 'animation',
    title: '3D/2D Animations',
    description: 'Animations that make your content stand out and explain your ideas clearly.',
    icon: '/icons/animation.svg',
    images: Array(5).fill('/logo.png'),
    youtubeVideoIds: ['X-IKXlYTyEQ', 'gY4fefbhI7I', 'scB7qp6YKpw', 'YaMPDn7amEo', 'P0OS4H9qal8', '9zR8Li_5JCE', 'RiKheRwPCfc', 'QNfUcQANsJI', '3fc5q5uVtyg', 'cmbPPRY33aA', 'wpA-XNNzbxI', 'xaBYCRmLzLY', 'ENI2BePG0XE']

  },
 
];

/**
 * ServiceSlider Component - Individual Service Display with Auto-Sliding Carousel
 * 
 * Maintains a persistent Splide carousel that is always mounted.
 * Only the play/pause state changes based on isActive prop.
 */
function ServiceSlider({ service, isActive, index }) {
  const splideRef = useRef(null);
  const splideInstanceRef = useRef(null);

  // Initialize Splide once on mount
  useEffect(() => {
    if (!splideRef.current) return;

    splideInstanceRef.current = new Splide(splideRef.current, {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 3,
      gap: '3rem',
      padding: '0',
      autoScroll: {
        speed: 2,
        pauseOnHover: true,
        pauseOnFocus: false,
      },
      pagination: false,
      arrows: true,
      breakpoints: {
        1024: {
          perPage: 2,
          gap: '2rem',
        },
        768: {
          perPage: 1,
          gap: '1rem',
        },
        480: {
          perPage: 1,
          gap: '0.5rem',
        },
      },
    });

    splideInstanceRef.current.mount({ AutoScroll });

    // Cleanup only on unmount
    return () => {
      if (splideInstanceRef.current) {
        splideInstanceRef.current.destroy();
        splideInstanceRef.current = null;
      }
    };
  }, []);

  // Control play/pause based on isActive
  useEffect(() => {
    if (!splideInstanceRef.current?.AutoScroll) return;

    if (isActive) {
      splideInstanceRef.current.AutoScroll.play();
    } else {
      splideInstanceRef.current.AutoScroll.pause();
    }
  }, [isActive]);

  return (
    <div className="relative w-full">
      {/* 
        Service Information Header
        Positioned above carousel to prevent text/card overlap
        Contains icon, title, and description in a clear hierarchy
      */}
      <div className="text-center mb-6 sm:mb-12 px-2 sm:px-4">
        {/* Icon and Title Row - Stacked on mobile, Horizontally aligned on desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
          {/* Icon Container - Circular background with orange accent */}
          <div className="w-10 sm:w-14 h-10 sm:h-14 bg-[var(--primary-orange-400)]/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Image 
              src={service.icon} 
              alt={service.title}
              width={32}
              height={32}
              className="w-6 sm:w-8 h-6 sm:h-8 filter brightness-0 invert"
              // CSS filter to make SVG icons orange-colored
              style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(96%) saturate(2618%) hue-rotate(17deg) brightness(99%) contrast(101%)' }}
            />
          </div>
          
          {/* Service Title - Large, bold, orange text */}
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-[var(--primary-orange-400)] tracking-wide">
            {service.title}
          </h3>
        </div>
        
        {/* Service Description - Subtitle explaining the service */}
        <p className="text-sm sm:text-base md:text-lg font-inter font-semibold text-white tracking-wide max-w-3xl mx-auto">
          {service.description}
        </p>
      </div>

      {/* 
        Carousel Container
        Always renders Splide carousel - play/pause controlled by isActive
        Carousel remains mounted even when inactive to prevent flickering or data loss
      */}
      <div className="relative h-30 sm:h-60 md:h-80 w-full overflow-hidden">
        <div ref={splideRef} className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              {Array.from(
                {
                  length: Math.max(
                    service.youtubeVideoIds?.length ?? 0,
                    service.images?.length ?? 0,
                    1
                  ),
                },
                (_, slideIndex) => {
                  const videoId = service.youtubeVideoIds?.[slideIndex];
                  const imageSrc =
                    service.images?.[slideIndex % (service.images?.length || 1)] ?? '/logo.png';

                  return (
                    <li key={slideIndex} className="splide__slide !w-auto flex justify-center">
                      <div className="flex-shrink-0 w-[129px] sm:w-64 md:w-[450px] h-[94px] sm:h-52 md:h-[300px] border-2 border-gray-600 rounded-2xl sm:rounded-3xl bg-gray-800/50 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                        {videoId ? (
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={`${service.title} - Video ${slideIndex + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-xl"
                          ></iframe>
                        ) : (
                          <div className="text-center px-2">
                            <div className="text-gray-400 font-poppins font-bold text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-4">
                              Sample Content
                            </div>
                            <Image
                              src={imageSrc}
                              alt="Service showcase"
                              width={60}
                              height={60}
                              className="mx-auto opacity-80 w-8 sm:w-12 md:w-16 lg:w-auto"
                            />
                          </div>
                        )}
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>

        {/* 
          Gradient Fade Effects
          Creates seamless edges for infinite scroll appearance
          Left and right gradients fade carousel content to black
          Higher z-index ensures they appear above carousel cards
        */}
        <div className="absolute left-0 top-0 w-12 sm:w-32 md:w-56 h-full bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 w-12 sm:w-32 md:w-56 h-full bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
}

/**
 * Main WhatWeDo Component - Services Showcase Section
 * 
 * This is the main export component that orchestrates the entire services section.
 * It manages state for which service is currently active and handles both
 * automatic rotation and manual user interaction.
 * 
 * State Management:
 * - activeService: Index of currently highlighted service (0-4)
 * - Auto-rotation: Changes active service every 4 seconds
 * - Manual override: User hover temporarily overrides auto-rotation
 * 
 * Layout Structure:
 * 1. Section header with title and description
 * 2. Services list with individual ServiceSlider components
 * 3. Call-to-action button at bottom
 * 
 * Responsive Features:
 * - Mobile-first design with responsive text sizing
 * - Proper spacing that works on all screen sizes
 * - Touch-friendly interaction zones
 */
export default function WhatWeDo() {
  // State to track which service is currently active/highlighted
  // Index corresponds to position in services array (0-4)
  const [activeService, setActiveService] = useState(0);

  /**
   * Auto-rotation Effect
   * Automatically cycles through services every 4 seconds
   * Creates engaging user experience without requiring interaction
   * Cleanup function prevents memory leaks when component unmounts
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((current) => (current + 1) % services.length);
    }, 4000); // 4 second intervals for comfortable viewing

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array = run once on mount

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* 
          Section Header
          Introduction to the services section with main heading and subtext
          Centered layout with responsive typography
        */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
        {/* Main section title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-3 sm:mb-4 tracking-wide">
            What We Do
          </h2>
          
          {/* Section description/tagline */}
          <p className="text-sm sm:text-base md:text-lg font-inter font-medium text-white/80 max-w-4xl mx-auto px-2">
            Powerful content services built to attract, engage, and convert.
          </p>
        </div>

        {/* 
          Services Display Area
          Container for all service sliders with generous spacing
          Each service gets its own ServiceSlider component
          
          Interactive Features:
          - onMouseEnter: Manual service activation on hover
          - pause-on-hover: Pauses carousel animation when user hovers
          - Large vertical spacing (space-y-16 sm:space-y-32) for clear separation
        */}
        <div className="space-y-6 sm:space-y-10 md:space-y-14">
        {services.map((service, index) => (
          <div key={service.id}>
            <ServiceSlider 
              service={service} 
              isActive={activeService === index} 
              index={index} 
            />
          </div>
        ))}
      </div>

        {/* 
          Call-to-Action Section
          Prominent button to encourage user engagement
          Positioned after all services for natural flow
          
          Button Features:
          - Gradient background matching brand colors
          - Hover scale effect for interactive feedback
          - Orange glow effect for visual appeal
          - Responsive padding and typography
        */}
        <div className="text-center mt-10 sm:mt-14 md:mt-16">
          <button className="bg-gradient-to-r from-[var(--primary-orange-400)] to-[var(--primary-orange-500)] text-black font-poppins font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-lg hover:scale-105 transition-transform duration-200 glow-orange">
            Book a Free Call
          </button>
        </div>
      </div>
    </section>
  );
}
