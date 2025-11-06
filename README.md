# Zocial Plug - Content Creation Agency Website

A modern, responsive website for Zocial Plug, a content creation agency specializing in video editing, thumbnail design, and social media content that drives real results.

## 🚀 Features

- **Interactive Service Showcase**: Auto-rotating carousels displaying video portfolios and thumbnail designs
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **YouTube Video Integration**: Embedded video portfolios with optimized loading
- **Smooth Animations**: Splide.js carousels with auto-scroll functionality
- **Calendly Integration**: Direct booking system for client consultations
- **Modern UI/UX**: Dark theme with orange accent colors and glass-morphism effects

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Splide.js](https://splidejs.com/) with AutoScroll extension
- **Images**: Next.js Image component with optimization
- **Booking**: [Calendly](https://calendly.com/) integration
- **Deployment**: [Vercel](https://vercel.com/) (recommended)

## 📁 Project Structure

```
zocialplug/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.jsx           # Root layout component
│   └── page.jsx             # Home page
├── components/
│   ├── call.jsx             # Calendly booking section
│   ├── faqs.jsx             # Frequently asked questions
│   ├── footer.jsx           # Footer with social links
│   ├── header.jsx           # Navigation header
│   ├── hero.jsx             # Hero section with video
│   ├── process.jsx          # 3-step process showcase
│   └── whatwedo.jsx         # Services carousel showcase
├── public/
│   ├── icons/               # SVG icons
│   ├── thumbnails/          # Portfolio thumbnail images
│   ├── glow/               # Background glow effects
│   ├── hero.webm           # Hero section video
│   └── logo.png            # Company logo
└── README.md
```

## 🎨 Services Showcased

1. **Short-Form Content** - Reels, TikToks, and Shorts that perform
2. **Long-Form Video Editing** - YouTube videos, podcasts, and ads
3. **Thumbnail Designs** - Click-worthy visuals that drive engagement
4. **3D/2D Animations** - Motion graphics and explainer videos

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/usman2789/zp.git
   cd zocialplug
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific configurations:

```env
# Add any API keys or configuration here
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your_link
```

### Calendly Integration

Update the Calendly URL in `components/call.jsx`:

```jsx
data-url="https://calendly.com/your-username/meeting-type"
```

### Custom Styling

Main color variables are defined in `app/globals.css`:

```css
:root {
  --primary-orange-400: #fb923c;
  --primary-orange-500: #f97316;
  --primary-blue: #3b82f6;
  --primary-black-400: #262626;
}
```

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

## 🎬 Video Integration

YouTube videos are embedded using iframe with optimizations:

- `youtube-nocookie.com` for privacy
- Lazy loading for performance
- Responsive aspect ratios
- Auto-scroll carousels

## 📧 Contact Integration

The website includes multiple "Book a Free Call" CTAs that scroll to the Calendly booking section using anchor links (`#call`).

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository to Vercel**
2. **Configure build settings**:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`



## 🔧 Performance Optimizations

- **Image Optimization**: Next.js Image component with proper sizing
- **Lazy Loading**: Videos and images load on demand
- **Code Splitting**: Automatic with Next.js App Router
- **Carousel Optimization**: Only active carousels auto-scroll


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [zocialplug.com](https://zocialplug.com)
- **Email**: contact@zocialplug.com
- **Book a Call**: [Schedule Meeting](https://calendly.com/zocialplug/30min)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Splide.js](https://splidejs.com/) for smooth carousels
- [Calendly](https://calendly.com/) for booking integration

---

**Made with ❤️ by usman2789**
