import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { RSAlert } from '../../index';

describe('RSAlert', () => {
    it('renders alert content', () => {
        render(<RSAlert variant="success">Saved</RSAlert>);
        expect(screen.getByRole('alert')).toHaveTextContent('Saved');
    });

    it('can dismiss and trigger onClose', () => {
        const onClose = vi.fn();
        render(
            <RSAlert dismissible onClose={onClose}>
                Close me
            </RSAlert>
        );

        screen.getByRole('button', { name: 'Close' }).click();
        expect(onClose).toHaveBeenCalledTimes(1);
    });
});
