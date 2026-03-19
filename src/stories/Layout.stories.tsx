import type { Meta, StoryObj } from '@storybook/react';
import { RSCol, RSContainer, RSRow } from '../index';

const meta = {
    title: 'Components/RSLayout',
    component: RSContainer,
    tags: ['autodocs']
} satisfies Meta<typeof RSContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Grid: Story = {
    render: () => (
        <RSContainer className="border p-3" fluid="md">
            <RSRow className="g-2">
                <RSCol md={4}><div className="bg-primary text-white p-3">md=4</div></RSCol>
                <RSCol md={4}><div className="bg-success text-white p-3">md=4</div></RSCol>
                <RSCol md={4}><div className="bg-dark text-white p-3">md=4</div></RSCol>
            </RSRow>
        </RSContainer>
    )
};
