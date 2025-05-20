
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom mushroom theme colors
				mushroom: {
					50: '#f6f5f2',
					100: '#e9e6df',
					200: '#d5cebe',
					300: '#bfae95',
					400: '#a58e6d',
					500: '#8c7251',
					600: '#735c41',
					700: '#5c4835',
					800: '#483a2c',
					900: '#3a2f26',
					950: '#221b17',
				},
				forest: {
					50: '#f0f5f0',
					100: '#dce8dc',
					200: '#bdd3bd',
					300: '#97b797',
					400: '#739673',
					500: '#577957',
					600: '#436143',
					700: '#354d35',
					800: '#2c3f2c',
					900: '#253425',
					950: '#121c12',
				},
				cream: {
					50: '#fcfaf6',
					100: '#f7f2e9',
					200: '#efe3d1',
					300: '#e4cdb0',
					400: '#d6b288',
					500: '#ca9c6c',
					600: '#be8553',
					700: '#a16e46',
					800: '#83593e',
					900: '#6c4a35',
					950: '#3a261c',
				}
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
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out'
			},
			backgroundImage: {
				'hero-pattern': "url('/images/mushroom-bg.jpg')",
				'footer-pattern': "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)"
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
