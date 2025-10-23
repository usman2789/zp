# Responsive Design Pattern Examples

## How Responsive Classes Work

Each component uses Tailwind's responsive prefixes to adapt to different screen sizes.

---

## Example 1: Typography Scaling

```jsx
// BEFORE (Desktop only)
<h1 className="text-4xl md:text-5xl lg:text-6xl">
  Title
</h1>

// AFTER (Mobile responsive)
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
  Title
</h1>

// How it works:
// - Mobile (<640px):      text-2xl   (24px)
// - Small (640px-768px):  text-3xl   (30px)
// - Medium (768px-1024px):text-4xl   (36px)
// - Large (1024px-1280px):text-5xl   (48px)
// - XL (1280px+):         text-6xl   (60px)
```

---

## Example 2: Padding/Spacing Scaling

```jsx
// BEFORE (Desktop only)
<div className="px-6 py-24">
  Content
</div>

// AFTER (Mobile responsive)
<div className="px-4 sm:px-6 py-12 sm:py-24">
  Content
</div>

// How it works:
// - Mobile:     px-4 (1rem), py-12 (3rem)
// - Small+:     px-6 (1.5rem), py-24 (6rem)
```

---

## Example 3: Layout Stacking

```jsx
// BEFORE (Desktop only - always side by side)
<div className="flex gap-6">
  <Card />
  <Card />
  <Card />
  <Card />
</div>

// AFTER (Mobile responsive - stacks to grid)
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
  <Card />
  <Card />
  <Card />
  <Card />
</div>

// How it works:
// - Mobile:     1 column (full width)
// - Small:      2 columns (side by side pairs)
// - Desktop:    4 columns (all in one row)
```

---

## Example 4: Responsive Display (Hero Process Steps)

```jsx
// BEFORE (Always horizontal)
<div className="relative flex justify-between items-center">
  <div className="absolute top-1/2 left-0 right-0 h-1 bg-orange"></div>
  {/* Horizontal connecting line always visible */}
</div>

// AFTER (Responsive - vertical on mobile, horizontal on desktop)
<div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
  {/* Horizontal line - hidden on mobile, shown on desktop */}
  <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-orange"></div>
  
  {/* Vertical line - shown on mobile, hidden on desktop */}
  <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-orange"></div>
</div>

// How it works:
// - Mobile:     flex-col + vertical line (hidden line)
// - Desktop:    md:flex-row + horizontal line (hidden vertical line)
```

---

## Example 5: Image Sizing

```jsx
// BEFORE (Fixed size)
<img className="w-[400px] h-[280px]" />

// AFTER (Responsive sizing)
<img className="w-24 sm:w-64 md:w-96 lg:w-[400px] h-32 sm:h-52 md:h-72 lg:h-[280px]" />

// How it works:
// - Mobile:     96px × 128px (compact)
// - Small:      256px × 208px (medium)
// - Medium:     384px × 288px (large)
// - Large:      400px × 280px (full size - original)
```

---

## Example 6: Icon and Text Layout Toggle

```jsx
// BEFORE (Always side-by-side)
<div className="flex items-center gap-4">
  <Icon />
  <Title />
</div>

// AFTER (Stacked on mobile, side-by-side on desktop)
<div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
  <Icon className="w-10 sm:w-14 h-10 sm:h-14" />
  <Title className="text-xl sm:text-2xl md:text-3xl" />
</div>

// How it works:
// - Mobile:     flex-col (vertical stack)
// - Small+:     sm:flex-row (horizontal)
// - Icon:       10×10 → 14×14
// - Title:      xl → 2xl → 3xl
```

---

## Example 7: Button Sizing

```jsx
// BEFORE (Desktop only)
<button className="px-12 py-4 text-lg">
  Book a Free Call
</button>

// AFTER (Mobile responsive)
<button className="px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-lg">
  Book a Free Call
</button>

// How it works:
// - Mobile:     px-8 (2rem), py-3 (0.75rem), text-sm (14px)
// - Small+:     px-12 (3rem), py-4 (1rem), text-lg (18px)
```

---

## Breakpoint Reference Table

```
Breakpoint  Min Width  Typical Device
────────────────────────────────────
(none)      0px        Mobile phones
sm          640px      Small tablets
md          768px      Tablets
lg          1024px     Small laptops
xl          1280px     Desktop
2xl         1536px     Large screens
```

---

## Mobile-First Approach

All changes follow a **mobile-first** design pattern:

1. **Start with mobile styles** (no prefix)
   ```jsx
   className="text-base px-4" // Mobile: 16px, 1rem padding
   ```

2. **Add responsive overrides** (with prefixes)
   ```jsx
   className="text-base sm:text-lg md:text-xl" // Gets larger on bigger screens
   ```

3. **Result:** Works perfectly on ALL devices

---

## Common Patterns Used

### Responsive Text Sizing
```jsx
// Scales smoothly from mobile to desktop
className="text-sm sm:text-base md:text-lg lg:text-xl"
```

### Responsive Padding
```jsx
// Compact on mobile, spacious on desktop
className="px-4 sm:px-6 py-6 sm:py-12 md:py-24"
```

### Responsive Grid
```jsx
// 1 column → 2 columns → 4 columns
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
```

### Responsive Display
```jsx
// Show only on desktop, hide on mobile
className="hidden md:block"

// Show only on mobile, hide on desktop
className="md:hidden"
```

### Responsive Border Radius
```jsx
// Softer corners on mobile, harder on desktop
className="rounded-lg sm:rounded-xl md:rounded-2xl"
```

---

## Tips for Future Maintenance

✅ **DO:**
- Use `sm:`, `md:`, `lg:` prefixes consistently
- Start with mobile styles (no prefix)
- Test at multiple breakpoints
- Keep breakpoint values semantic

❌ **DON'T:**
- Mix `sm:` and `md:` inconsistently
- Add desktop styles without mobile fallback
- Skip intermediate breakpoints
- Use arbitrary sizes when Tailwind has them

---

## How to Add New Responsive Elements

When adding new components, follow this template:

```jsx
export default function NewComponent() {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Mobile: text-2xl, Desktop: text-5xl */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Section Title
        </h2>
        
        {/* Mobile: 1 column, Desktop: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
```

This ensures consistency and maintainability across the entire codebase!

