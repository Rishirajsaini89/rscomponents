import * as React from 'react';
import type { BootstrapCommonProps } from '../types/common';
import { cx } from '../utils/cx';

export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-info'
    | 'outline-light'
    | 'outline-dark';

export type ButtonSize = 'sm' | 'lg';

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> &
    BootstrapCommonProps & {
        variant?: ButtonVariant;
        size?: ButtonSize;
        block?: boolean;
        loading?: boolean;
        loadingText?: React.ReactNode;
    };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {
        bsPrefix = 'btn',
        className,
        unstyled,
        variant = 'primary',
        size,
        block,
        loading,
        loadingText = 'Loading...',
        disabled,
        children,
        type = 'button',
        ...rest
    },
    ref
) {
    const classes = unstyled
        ? className
        : cx(
            bsPrefix,
            `${bsPrefix}-${variant}`,
            size ? `${bsPrefix}-${size}` : undefined,
            block ? 'w-100' : undefined,
            className
        );

    return (
        <button ref={ref} type={type} className={classes} disabled={disabled || loading} {...rest}>
            {loading ? loadingText : children}
        </button>
    );
});
