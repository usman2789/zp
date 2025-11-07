'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Splide } from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/css';

const thumbnailImages = [
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
];

export default function Thumbnails() {
  const splideRef = useRef(null);
  const splideInstanceRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !splideRef.current) return;

    // Delay initialization slightly for better performance
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
        lazyLoad: 'sequential',
        preloadPages: 1,
        throttle: 100,
        reducedMotion: {
          speed: 0,
          rewindSpeed: 0,
          autoplay: 'pause',
        },
      });

      splideInstanceRef.current.mount({ AutoScroll });

      // Start autoscroll after mount
      requestAnimationFrame(() => {
        if (splideInstanceRef.current?.AutoScroll) {
          splideInstanceRef.current.AutoScroll.play();
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (splideInstanceRef.current) {
        splideInstanceRef.current.destroy();
        splideInstanceRef.current = null;
      }
    };
  }, [isClient]);

  if (!isClient) {
    return (
      <section className="bg-black py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-12 px-2 sm:px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
              <div className="w-10 sm:w-14 h-10 sm:h-14 bg-[var(--primary-orange-400)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-[var(--primary-orange-400)] tracking-wide">
                Thumbnail Designs
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg font-inter font-semibold text-white tracking-wide max-w-3xl mx-auto">
              Scroll-stopping visuals that earn the click.
            </p>
          </div>
          <div className="relative h-56 sm:h-60 md:h-80 w-full overflow-hidden bg-gray-900/20 rounded-3xl animate-pulse"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-12 px-2 sm:px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-3 sm:mb-4">
            <div className="w-10 sm:w-14 h-10 sm:h-14 bg-[var(--primary-orange-400)]/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Image
                src="/icons/thumbnail.svg"
                alt="Thumbnail Designs"
                width={32}
                height={32}
                className="w-6 sm:w-8 h-6 sm:h-8 filter brightness-0 invert"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(48%) sepia(96%) saturate(2618%) hue-rotate(17deg) brightness(99%) contrast(101%)',
                }}
                priority
              />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-[var(--primary-orange-400)] tracking-wide">
              Thumbnail Designs
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg font-inter font-semibold text-white tracking-wide max-w-3xl mx-auto">
            Scroll-stopping visuals that earn the click.
          </p>
        </div>

        {/* Thumbnails Slider */}
        <div className="relative h-56 sm:h-60 md:h-80 w-full overflow-hidden">
          <div ref={splideRef} className="splide">
            <div className="splide__track">
              <ul className="splide__list">
                {thumbnailImages.map((imageSrc, index) => (
                  <li key={`thumbnail-${index}`} className="splide__slide">
                    <div className="relative mx-2 min-w-[240px] sm:min-w-[280px] md:min-w-[450px] h-48 sm:h-52 md:h-[300px] border-2 border-gray-600 rounded-2xl sm:rounded-3xl bg-gray-800/50 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={`Thumbnail design ${index + 1}`}
                        fill
                        className="object-cover rounded-xl"
                        loading={index < 3 ? 'eager' : 'lazy'}
                        priority={index < 3}
                        sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 450px"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
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

        {/* CTA Button */}
       
      </div>
    </section>
  );
}