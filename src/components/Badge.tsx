import * as React from 'react';
import type { BootstrapCommonProps } from '../types/common';
import { cx } from '../utils/cx';

export type BadgeVariant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
    BootstrapCommonProps & {
        variant?: BadgeVariant;
        pill?: boolean;
        textBg?: boolean;
    };

export function Badge({
    bsPrefix = 'badge',
    className,
    unstyled,
    variant = 'secondary',
    pill,
    textBg = true,
    children,
    ...rest
}: BadgeProps) {
    const variantClass = textBg ? `text-bg-${variant}` : `bg-${variant}`;
    const classes = unstyled ? className : cx(bsPrefix, variantClass, pill && 'rounded-pill', className);

    return (
        <span className={classes} {...rest}>
            {children}
        </span>
    );
}
