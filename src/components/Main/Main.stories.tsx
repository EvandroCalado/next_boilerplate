import { Meta, StoryFn } from '@storybook/react';
import { Main, MainProps } from '.';

export default {
  title: 'Components/Main',
  component: Main,
  args: {
    title: 'Next Template',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<MainProps> = (args) => <Main {...args} />;
