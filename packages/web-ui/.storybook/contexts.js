import { ThemeProvider } from 'styled-components';
import { getTheme } from '../styles/theme';
import { defaultMode } from '../contexts/ThemeProvider';

const contexts = [
  {
    icon: 'paintbrush',
    title: 'Theme',
    components: [ThemeProvider],
    params: [
      { name: 'Light', props: { theme: getTheme('light') }, default: defaultMode === 'light' },
      { name: 'Dark', props: { theme: getTheme('dark') }, default: defaultMode === 'dark' },
    ],
    options: {
      deep: true,
    },
  },
];

export { contexts };
