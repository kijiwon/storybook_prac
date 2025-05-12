import '../src/index.css';

// Registers the msw addon
 import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
 initialize();

//👇 UI에서 작업(onArchiveTask 및 onPinTask)을 기록하도록 Storybook을 구성
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
 loaders: [mswLoader],
};

export default preview;