import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";
const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
  	extend: {
  		colors: {
  			dark: {
  				DEFAULT: '#0F0F0F',
  				card: '#18181B',
  				border: '#27272A',
  				text: '#E4E4E7',
  				secondary: '#A1A1AA',
  				hover: '#1E1E22'
  			},
  			primary: '#3B82F6'
  		},
  		fontFamily: {
  			primary: [
  				'var(--font-manrope)'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default withUt(config);
