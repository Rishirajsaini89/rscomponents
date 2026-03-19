import type { Meta, StoryObj } from '@storybook/react';
import { RSButton } from '../index';

const meta = {
    title: 'Components/RSButton',
    component: RSButton,
    args: {
        children: 'Save',
        variant: 'primary'
    },
    tags: ['autodocs']
} satisfies Meta<typeof RSButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const Loading: Story = {
    args: {
        loading: true,
        loadingText: 'Saving...'
    }
};

export const CustomClass: Story = {
    args: {
        className: 'rounded-0 px-4'
    }
};
