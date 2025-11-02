const CLIP_PATH = 'polygon(12% 0%, 100% 0%, 100% 78%, 88% 100%, 0% 100%, 0% 22%)';

const variantClasses = {
  primary: 'bg-[var(--primary-orange-400)] text-black',
  secondary: 'bg-[var(--primary-blue)] text-white',
  outline:
    'bg-transparent text-[var(--primary-orange-400)] border border-[var(--primary-orange-400)]',
};

export default function SkewButton({
  children,
  variant = 'primary',
  width,
  height,
  className = '',
  style,
  ...props
}) {
  const sizeStyle = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };

  return (
    <button
      {...props}
      className={`relative inline-flex items-center justify-center px-6 py-3 font-poppins font-bold uppercase tracking-wide transition-transform duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${variantClasses[variant]} ${className}`}
      style={{
        clipPath: CLIP_PATH,
        WebkitClipPath: CLIP_PATH,
        ...sizeStyle,
        ...style,
      }}
    >
      {children}
    </button>
  );
}