import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      extend: {
        gridTemplateAreas: {
          'layout': [
            'header sidebar',
            'main   sidebar',
            'footer sidebar',
          ],
        },
        gridTemplateColumns: {
          'layout': 'auto 20%',
        },
        gridTemplateRows: {
          'layout': '20% 70% 10%',
        },        
      },
    },
    plugins: [
      require('@savvywombat/tailwindcss-grid-areas')
    ]
  }

export default config
