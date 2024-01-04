import type { Config } from 'tailwindcss'
import { withTV } from 'tailwind-variants/transformer'
import { PluginAPI } from 'tailwindcss/types/config'
import { addDynamicIconSelectors } from '@iconify/tailwind'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [addDynamicIconSelectors(), addShortcutPlugin]
}

function addShortcutPlugin({ addUtilities }: PluginAPI) {
  const styles = {
    '.content-auto': {
      'content-visibility': 'auto'
    },
    '.shadow-out-sm': {
      'box-shadow': '0 0 10px rgb(120 120 120 / 10%), 0 5px 20px rgb(120 120 120 / 20%)'
    },
    '.backface-hidden': {
      '-webkit-backface-visibility': 'hidden',
      '-moz-backface-visibility': 'hidden',
      '-webkit-transform': 'translate3d(0, 0, 0)',
      '-moz-transform': 'translate3d(0, 0, 0)'
    },
    '.center': {
      'align-items': 'center',
      'justify-content': 'center'
    },
    '.fill-content': {
      'min-height': `calc(100vh - 17.5rem)`
    }
  }
  addUtilities(styles)
}

export default withTV(config)
