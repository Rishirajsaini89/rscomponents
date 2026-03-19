import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { RSButton } from '../../index';

describe('RSButton', () => {
    it('renders button text', () => {
        render(<RSButton>Save</RSButton>);
        expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    });

    it('shows loading text when loading', () => {
        render(
            <RSButton loading loadingText="Saving...">
                Save
            </RSButton>
        );

        expect(screen.getByRole('button', { name: 'Saving...' })).toBeDisabled();
    });

    it('calls click handler', async () => {
        const onClick = vi.fn();
        render(<RSButton onClick={onClick}>Run</RSButton>);
        screen.getByRole('button', { name: 'Run' }).click();
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
