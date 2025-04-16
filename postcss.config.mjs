const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#1a2639',
        'dark-blue': '#0f1e2d',
        'deep-navy': '#051622',
        'soft-gold': '#d4af37',
        'light-gold': '#f1e5bc',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { 
            opacity: 1,
            boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.7)' 
          },
          '50%': { 
            opacity: .7,
            boxShadow: '0 0 0 15px rgba(212, 175, 55, 0)' 
          },
        }
      }
    },
  },
 
};

export default config;
