import * as React from 'react';
import type { BootstrapCommonProps } from '../types/common';
import { cx } from '../utils/cx';

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
    BootstrapCommonProps & {
        fluid?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    };

export function Container({
    bsPrefix = 'container',
    className,
    unstyled,
    fluid,
    children,
    ...rest
}: ContainerProps) {
    const fluidClass =
        fluid === true ? `${bsPrefix}-fluid` : typeof fluid === 'string' ? `${bsPrefix}-${fluid}` : bsPrefix;

    return (
        <div className={unstyled ? className : cx(fluidClass, className)} {...rest}>
            {children}
        </div>
    );
}

export type RowProps = React.HTMLAttributes<HTMLDivElement> & BootstrapCommonProps;

export function Row({ bsPrefix = 'row', className, unstyled, children, ...rest }: RowProps) {
    return (
        <div className={unstyled ? className : cx(bsPrefix, className)} {...rest}>
            {children}
        </div>
    );
}

type ColSpan = boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type ColProps = React.HTMLAttributes<HTMLDivElement> &
    BootstrapCommonProps & {
        xs?: ColSpan;
        sm?: ColSpan;
        md?: ColSpan;
        lg?: ColSpan;
        xl?: ColSpan;
        xxl?: ColSpan;
    };

function buildColClass(bp: string, value?: ColSpan) {
    if (value === undefined || value === false) return undefined;
    if (value === true) return bp === 'xs' ? 'col' : `col-${bp}`;
    if (value === 'auto') return bp === 'xs' ? 'col-auto' : `col-${bp}-auto`;
    return bp === 'xs' ? `col-${value}` : `col-${bp}-${value}`;
}

export function Col({
    className,
    unstyled,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    children,
    ...rest
}: ColProps) {
    const responsiveClasses = [
        buildColClass('xs', xs),
        buildColClass('sm', sm),
        buildColClass('md', md),
        buildColClass('lg', lg),
        buildColClass('xl', xl),
        buildColClass('xxl', xxl)
    ];

    return (
        <div className={unstyled ? className : cx('col', ...responsiveClasses, className)} {...rest}>
            {children}
        </div>
    );
}
