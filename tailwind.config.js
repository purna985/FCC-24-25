/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'dark-blue': '#1270ed',
				'custom-white': '#f2f2f2',
				'custom-blue': 'rgba(18, 112, 237, 1)',
				'custom-gradient-1': 'rgba(18, 109, 237, 0.9)',
				'custom-gradient-2': 'rgba(18, 112, 237, 0.6)',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
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
				}
			},
			backgroundColor: {
				'custom-bg': 'rgba(30, 30, 30, 1)',
				'custom-butt-bg': '#0d6efd',
				'custom-butt-bg-hover': '#0b5ed7',
				'custom-blur-bg': 'rgba(126, 71, 241, 0.4)',
				'custom-blue': 'rgba(18, 112, 237, 1)',
				'custom-bg2': '#0C4393'
			},
			backgroundImage: {
				'custom-grad-1': 'linear-gradient(to bottom,rgba(15, 70, 147, 0.9),rgba(15, 72, 147, 0.6))'
			},
			blur: {
				'blur-250': '250px'
			},
			fontFamily: {
				outfit: ['Outfit', 'sans-serif'],
				schibsted: ['"Schibsted Grotesk"', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif'],
				rosario: ['Rosario', 'sans-serif'],
				poppins: ['Poppins', "sans-serif"],
				horizonText: 'linear-gradient(124deg, #1680e8 2%, #2bc9d3 133.32%)',
				ikaros: ['Ikaros Sans"', 'sans-serif'],
				lato: ['Lato', 'sans-serif'],
				'Family-primary':['Schibsted Grotesk'],
				'Heading-H3-fontFamily':['Schibsted Grotesk'],
				'Body-3-fontFamily':['Outfit'],
				'Family-secondary':['Outfit'],
				'Label-Label-3-fontFamily':['Schibsted Grotesk'],
				'Label-Label-2-fontFamily':['Schibsted Grotesk'],
				'Label-Label-1-fontFamily':['Schibsted Grotesk']
			},
			fontWeight: {
				light: '200',
				normal: '400',
				'Weights-Regular':'400',
				'Weights-Medium':'500',
				'Weights-Bold':'700'
			},
			fontSize: {
				'vw-2.3': '2.3vw',
				'vw-2.75': '2.75vw',
				'vw-5': '5vw',
				'vw-7': '7vw',
				'vw-10': '10vw',
				'vw-14': '12vw',
				'Heading-H3-fontSize':['24px',{lineHeight:'28px'}],
				'Heading-H4-fontSize':['20px',{lineHeight:'24px'}],
				'Title-Title-2-fontSize':['40px',{lineHeight:'48px'}],
				'Label-Label-3-fontSize':['12px',{lineHeight:'16px'}],
				'Label-Label-2-fontSize':['14PX',{lineHeight:'20PX'}],
				'Label-Label-1-fontSize':['16PX',{lineHeight:'22PX'}],
				'Body-2-fontSize':['18px',{lineHeight:'26px'}],
				'Body-1-fontSize':['20px',{lineHeight:'26px'}]
			},
			letterSpacing:{
				'Heading-H3-letterSpacing':'-0.24px',
				'Heading-H4-letterSpacing':'-0.2px',
				'Title-Title-2-letterSpacing':'-0.64px',
				'Label-Label-3-letterSpacing':'0px',
				'Label-Label-2-letterSpacing':'0px',
				'Label-Label-1-letterSpacing':'-0.18px'
			},
			spacing: {
				'1p': '1%',
				'2p': '2%',
				'3p': '3%',
				'10p': '10%',
				'20p': '20%',
				'23p': '23%',
				'45p': '45%',
				'50p': '50%',
				'70p': '70%',
				'90p': '90%',
				'vw-15': '15vw',
				'vw-20': '20vw',
				'vw-30': '30vw',
				'vw-60': '60vw',
				'vh-50': '50vh',
				'vh-60': '60vh'
			},
			rotate: {
				'20-deg': '20deg',
				'60-deg': '60deg'
			},
			zIndex: {
				one: '1'
			},
			lineHeight: {
				normal: 'normal',
				'100p': '100%',
				'Title-Title-2-lineHeight':'48px',
				'Heading-H3-lineHeight':'28px',
				'Label-Label-3-lineHeight':'16px',
				'Label-Label-2-lineHeight':'20px'
			},
			
			animation: {
				'scroll-1': 'scrollH 30s linear infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			keyframes: {
				scrollH: {
					'0%': {
						transform: 'translateX(-300%)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
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
			screens: {
				sm: {
					max: '420px'
				},
				'md-3': {
					max: '1000px'
				},
				'md-1': {
					max: '800px'
				},
				'md-2': {
					min: '800px'
				},
				'md-4': {
					max: '600px'
				},
				'md-5': {
					min: '601px'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
