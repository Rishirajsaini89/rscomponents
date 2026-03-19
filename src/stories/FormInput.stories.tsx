import type { Meta, StoryObj } from '@storybook/react';
import { RSTextBox } from '../index';

const meta = {
    title: 'Components/RSTextBox',
    component: RSTextBox,
    args: {
        label: 'Email',
        placeholder: 'name@company.com'
    },
    tags: ['autodocs']
} satisfies Meta<typeof RSTextBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const Invalid: Story = {
    args: {
        errorText: 'Please enter a valid email address.'
    }
};

export const HelpText: Story = {
    args: {
        helpText: 'We will never share your email.'
    }
};
