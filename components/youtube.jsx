'use client';
import Image from 'next/image';
import { useEffect, useRef, useState, memo } from 'react';
import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/css';

const videoServices = [
  {
    id: 'short-content',
    title: 'Short-Form Content',
    description: 'Reels, TikToks, and Shorts that actually perform.',
    icon: '/icons/short-content.svg',
    youtubeVideoIds: ['c4gmzUPHDqI', 'vbi6EyutPhs', 'd5guMcEWJ7c', 'XoHs4jayUDI', 'EMfNOAE-rDY', '4heYCtqSkZA', '9rT5-G953tg', '8aJOyNboyms', 'hxKz3VpiQEM', 'BnkVdx0t9-o', '8zFTvRpU7lI', 'MBAZVNIzUEM', 'uubxoweuudw', 'Ag1aWtXsRp8'],
  },
  {
    id: 'long-content',
    title: 'Long-Form Video Editing',
    description: 'Polished, story-driven edits for YouTube, podcasts, and video ads.',
    icon: '/icons/long-content.svg',
    youtubeVideoIds: ['N2Q3Mw9LyjA', 'Zv368DPLn-Q', 'pr4-Raq_ZZU', 'cv8-RmNsqo8', 'Udl3u8LODjc', 'oaDLXh8x7YQ', 'gHYDonk3U8s', 'ZsYUZh0qyjY', 'AU1PrjWaM3c', 'a2eXEKrABwA', 'cW1hetExf_U', 'BT40h5F5aqA', 'HaaZJi_mNis', '3dKeRpJ1wQI', 'FUwAeYBKpzI', 'O52Jkh2RfEM', 'PwhX3Dl8a0w', 'BSP0LWMES-U'],
  },
  {
    id: 'animation',
    title: '3D/2D Animations',
    description: 'Animations that make your content stand out and explain your ideas clearly.',
    icon: '/icons/animation.svg',
    youtubeVideoIds: ['X-IKXlYTyEQ', 'gY4fefbhI7I', 'scB7qp6YKpw', 'YaMPDn7amEo', 'P0OS4H9qal8', '9zR8Li_5JCE', 'RiKheRwPCfc', 'QNfUcQANsJI', '3fc5q5uVtyg', 'cmbPPRY33aA', 'wpA-XNNzbxI', 'xaBYCRmLzLY', 'ENI2BePG0XE'],
  },
];

const VideoSlider = memo(function VideoSlider({ service }) {
  const splideRef = useRef(null);
  const splideInstanceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerRef.current?.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (splideRef.current) {
      observerRef.current.observe(splideRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !splideRef.current) return;

    const timeoutId = setTimeout(() => {
      splideInstanceRef.current = new Splide(splideRef.current, {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        autoWidth: true,
        gap: '1rem',
        padding: '0',
        autoScroll: {
          speed: 1.5,
          pauseOnHover: true,
          pauseOnFocus: false,
          rewind: false,
        },
        pagination: false,
        arrows: true,
        lazyLoad: false, // We handle iframe loading manually
        preloadPages: 1,
        throttle: 100,
        reducedMotion: {
          speed: 0,
          rewindSpeed: 0,
          autoplay: 'pause',
        },
      });

      splideInstanceRef.current.mount({ AutoScroll });

      requestAnimationFrame(() => {
        if (splideInstanceRef.current?.AutoScroll) {
          splideInstanceRef.current.AutoScroll.play();
        }
      });
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      if (splideInstanceRef.current) {
        splideInstanceRef.current.destroy();
        splideInstanceRef.current = null;
      }
    };
  }, [isVisible]);

  return (
    <div className="mb-6 sm:mb-10 md:mb-14">
      <div className="text-center mb-6 sm:mb-12 px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
          <div className="w-10 sm:w-14 h-10 sm:h-14 bg-[var(--primary-orange-400)]/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Image
              src={service.icon}
              alt={service.title}
              width={32}
              height={32}
              className="w-6 sm:w-8 h-6 sm:h-8 filter brightness-0 invert"
              style={{
                filter: 'brightness(0) saturate(100%) invert(48%) sepia(96%) saturate(2618%) hue-rotate(17deg) brightness(99%) contrast(101%)',
              }}
              loading="lazy"
            />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-[var(--primary-orange-400)] tracking-wide">
            {service.title}
          </h3>
        </div>
        <p className="text-sm sm:text-base md:text-lg font-inter font-semibold text-white tracking-wide max-w-3xl mx-auto">
          {service.description}
        </p>
      </div>

      <div className="relative h-56 sm:h-60 md:h-80 w-full overflow-hidden">
        {!isVisible && (
          <div className="absolute inset-0 bg-gray-900/20 rounded-3xl animate-pulse"></div>
        )}
        
        <div ref={splideRef} className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              {service.youtubeVideoIds.map((videoId, index) => (
                <li key={`${service.id}-${videoId}`} className="splide__slide">
                  <div className="relative mx-2 min-w-[240px] sm:min-w-[280px] md:min-w-[450px] h-48 sm:h-52 md:h-[300px] border-2 border-gray-600 rounded-2xl sm:rounded-3xl bg-gray-800/50 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                    {isVisible && (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&showinfo=0&modestbranding=1&controls=1&enablejsapi=1`}
                        title={`${service.title} - Video ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-xl"
                        loading="lazy"
                      />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-12 sm:w-32 md:w-56 h-full bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 w-12 sm:w-32 md:w-56 h-full bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
});

export default function YouTube() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <section className="bg-black py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-3 sm:mb-4 tracking-wide">
              Our Video Work
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-inter font-medium text-white/80 max-w-4xl mx-auto px-2">
              High-performance video content that drives results.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-10 md:space-y-14">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-56 sm:h-60 md:h-80 bg-gray-900/20 rounded-3xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-3 sm:mb-4 tracking-wide">
            Our Video Work
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-inter font-medium text-white/80 max-w-4xl mx-auto px-2">
            High-performance video content that drives results.
          </p>
        </div>

        {/* Video Sliders */}
        {videoServices.map((service) => (
          <VideoSlider key={service.id} service={service} />
        ))}

        {/* CTA Button */}
        <div className="text-center mt-10 sm:mt-14 md:mt-16">
          <a 
            href="#call" 
            className="inline-block bg-gradient-to-r from-[var(--primary-orange-400)] to-[var(--primary-orange-500)] text-black font-poppins font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-lg hover:scale-105 transition-transform duration-200 glow-orange"
          >
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}