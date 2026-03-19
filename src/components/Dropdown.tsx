import * as React from 'react';
import type { BootstrapCommonProps } from '../types/common';
import { cx } from '../utils/cx';

export type DropdownProps = React.HTMLAttributes<HTMLDivElement> &
    BootstrapCommonProps & {
        label: React.ReactNode;
        variant?: string;
        align?: 'start' | 'end';
        menuClassName?: string;
        toggleClassName?: string;
        open?: boolean;
        defaultOpen?: boolean;
        onToggle?: (open: boolean) => void;
    };

export function Dropdown({
    bsPrefix = 'dropdown',
    className,
    unstyled,
    label,
    variant = 'secondary',
    align = 'start',
    menuClassName,
    toggleClassName,
    open,
    defaultOpen = false,
    onToggle,
    children,
    ...rest
}: DropdownProps) {
    const controlled = typeof open === 'boolean';
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const isOpen = controlled ? open : internalOpen;

    function setOpen(next: boolean) {
        if (!controlled) setInternalOpen(next);
        onToggle?.(next);
    }

    return (
        <div className={unstyled ? className : cx(bsPrefix, isOpen && 'show', className)} {...rest}>
            <button
                className={cx('btn', `btn-${variant}`, 'dropdown-toggle', toggleClassName)}
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(!isOpen)}
            >
                {label}
            </button>
            <ul className={cx('dropdown-menu', align === 'end' && 'dropdown-menu-end', isOpen && 'show', menuClassName)}>
                {children}
            </ul>
        </div>
    );
}

export type DropdownItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
    active?: boolean;
    disabled?: boolean;
    href?: string;
};

export function DropdownItem({ active, disabled, href, className, children, ...rest }: DropdownItemProps) {
    return (
        <li {...rest}>
            <a
                className={cx('dropdown-item', active && 'active', disabled && 'disabled', className)}
                href={href}
                aria-disabled={disabled || undefined}
            >
                {children}
            </a>
        </li>
    );
}
