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

const services = [
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
    id: 'thumbnails',
    title: 'Thumbnail Designs',
    description: 'Scroll-stopping visuals that earn the click.',
    icon: '/icons/thumbnail.svg',
    images: [
      '/thumbnails/1.jpg',
      '/thumbnails/2.jpg',
      '/thumbnails/3.jpg',
      '/thumbnails/4.jpg',
      '/thumbnails/5.jpg',
      '/thumbnails/6.jpg',
      '/thumbnails/7.jpg',
      '/thumbnails/8.jpg',
      '/thumbnails/9.jpg',
      '/thumbnails/10.jpg',
      '/thumbnails/11.jpg',
      '/thumbnails/12.jpg',
      '/thumbnails/13.jpg',
      '/thumbnails/14.jpg',
      '/thumbnails/15.jpg',
      '/thumbnails/16.jpg',
      '/thumbnails/17.jpg',
      '/thumbnails/18.jpg',
      '/thumbnails/19.jpg',
      '/thumbnails/20.jpg',
      '/thumbnails/21.jpg',
      '/thumbnails/22.jpg'
    ]
  },
  {
    id: 'animation',
    title: '3D/2D Animations',
    description: 'Animations that make your content stand out and explain your ideas clearly.',
    icon: '/icons/animation.svg',
    youtubeVideoIds: ['X-IKXlYTyEQ', 'gY4fefbhI7I', 'scB7qp6YKpw', 'YaMPDn7amEo', 'P0OS4H9qal8', '9zR8Li_5JCE', 'RiKheRwPCfc', 'QNfUcQANsJI', '3fc5q5uVtyg', 'cmbPPRY33aA', 'wpA-XNNzbxI', 'xaBYCRmLzLY', 'ENI2BePG0XE'],
  },
];

function ServiceSlider({ service, isActive }) {
  const splideRef = useRef(null);
  const splideInstanceRef = useRef(null);

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
        speed: 1.5,
        pauseOnHover: true,
        pauseOnFocus: false,
      },
      pagination: false,
      arrows: true,
      lazyLoad: 'nearby',
      preloadPages: 1,
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

    return () => {
      if (splideInstanceRef.current) {
        splideInstanceRef.current.destroy();
        splideInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!splideInstanceRef.current?.AutoScroll) return;
    splideInstanceRef.current.AutoScroll.play();
  }, [isActive]);

  return (
    <div className="relative w-full">
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
                  const imageSrc = service.images?.[slideIndex];

                  return (
                    <li key={slideIndex} className="splide__slide !w-auto flex justify-center">
                      <div className="relative flex-shrink-0 w-[129px] sm:w-64 md:w-[450px] h-[94px] sm:h-52 md:h-[300px] border-2 border-gray-600 rounded-2xl sm:rounded-3xl bg-gray-800/50 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                        {videoId ? (
                          <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&showinfo=0&modestbranding=1`}
                            title={`${service.title} - Video ${slideIndex + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-xl"
                            loading="lazy"
                          />
                        ) : imageSrc ? (
                          <div className="absolute inset-0">
                            <Image
                              src={imageSrc}
                              alt={`${service.title} thumbnail ${slideIndex + 1}`}
                              fill
                              className="object-cover rounded-xl"
                              loading="lazy"
                              sizes="(max-width: 768px) 129px, (max-width: 1024px) 256px, 450px"
                              onLoad={() => {
                                console.log(`✅ Image loaded successfully: ${imageSrc}`);
                              }}
                              onError={(e) => {
                                console.error(`❌ Failed to load image: ${imageSrc}`);
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                        ) : (
                          <div className="text-center px-2">
                            <div className="text-gray-400 font-poppins font-bold text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-4">
                              No Content Available
                            </div>
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

        <div className="absolute left-0 top-0 w-12 sm:w-32 md:w-56 h-full bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 w-12 sm:w-32 md:w-56 h-full bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((current) => (current + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-3 sm:mb-4 tracking-wide">
            What We Do
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-inter font-medium text-white/80 max-w-4xl mx-auto px-2">
            Powerful content services built to attract, engage, and convert.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-10 md:space-y-14">
          {services.map((service, index) => (
            <div key={service.id}>
              <ServiceSlider service={service} isActive={activeService === index} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-14 md:mt-16">
          <a href="#call" className="inline-block bg-gradient-to-r from-[var(--primary-orange-400)] to-[var(--primary-orange-500)] text-black font-poppins font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full text-sm sm:text-lg hover:scale-105 transition-transform duration-200 glow-orange">
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}