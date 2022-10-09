module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    colors: {
      palette: {
        primary: {
          light: '#c046d3',
          DEFAULT: '#B118C8',
          dark: '#7b108c',
        },
        secondary: {
          light: '#374766',
          DEFAULT: '#061a40',
          dark: '#04122c',
        },
      },
      background: {
        DEFAULT: '#fff',
        dark: '#121212',
      },
      surface: {
        DEFAULT: '#fafafa',
        dark: '#222222',
      },
      'on-primary': '#fff',
      'on-secondary': '#fff',
      'on-variant': '#fff',
      'on-background': {
        DEFAULT: '#000',
        dark: '#fff',
      },
      'on-surface': {
        DEFAULT: '#000',
        dark: '#fff',
      },
      variants: {
        success: {
          DEFAULT: {
            DEFAULT: '#4CAF50',
            background: '#edf7ed',
            'on-background': '#1e4620',
          },
          dark: {
            DEFAULT: '#66bb6a',
            background: '#0c130d',
            'on-background': '#cce8cd',
          }
        },
        info: {
          DEFAULT: {
            DEFAULT: '#03A9F4',
            background: '#e5f6fd',
            'on-background': '#014361',
          },
          dark: {
            DEFAULT: '#29b6f6',
            background: '#071318',
            'on-background': '#b8e7fb',
          }
        },
        warning: {
          DEFAULT: {
            DEFAULT: '#FF9800',
            background: '#fff4e5',
            'on-background': '#663C00',
          },
          dark: {
            DEFAULT: '#ffa726',
            background: '#191207',
            'on-background': '#ffe2b7',
          }
        },
        error: {
          DEFAULT: {
            DEFAULT: '#EF5350',
            background: '#fdeded',
            'on-background': '#5F2120',
          },
          dark: {
            DEFAULT: '#f44336',
            background: '#160b0b',
            'on-background': '#f4c7c7',
          }
        },
      },
      disabled: {
        DEFAULT: {
          background: 'rgba(0, 0, 0, 0.12)',
          'on-background': 'rgba(0, 0, 0, 0.26)',
        },
        dark: {
          background: 'rgba(255, 255, 255, 0.12)',
          'on-background': 'rgba(255, 255, 255, 0.3)',
        }
      },
    },
    // https://material.io/design/color/text-legibility.html#text-backgrounds
    emphasis: {
      high: 0.87,
      medium: 0.6,
      disabled: 0.38,
    },
    spacing: {
      container: '75rem', // 1200 px
      input: '1.5rem', // 24px
      tooltip: '7.5rem', // 120px
    },
  },
  plugins: [],
};