import * as React from 'react';
import type { BootstrapCommonProps } from '../types/common';
import { cx } from '../utils/cx';

export type NavbarProps = React.HTMLAttributes<HTMLElement> &
    BootstrapCommonProps & {
        expand?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | boolean;
        theme?: 'light' | 'dark';
        bg?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | string;
        container?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid' | false;
        as?: 'nav' | 'header' | 'div';
    };

export function Navbar({
    bsPrefix = 'navbar',
    className,
    unstyled,
    expand = true,
    theme,
    bg,
    container = false,
    as = 'nav',
    children,
    ...rest
}: NavbarProps) {
    const Component = as as React.ElementType;

    const content = container ? (
        <div className={container === 'fluid' ? 'container-fluid' : `container-${container}`}>
            {children}
        </div>
    ) : (
        children
    );

    return (
        <Component
            className={
                unstyled
                    ? className
                    : cx(
                        bsPrefix,
                        expand === true ? 'navbar-expand' : typeof expand === 'string' ? `navbar-expand-${expand}` : undefined,
                        theme && `navbar-${theme}`,
                        bg && `bg-${bg}`,
                        className
                    )
            }
            {...rest}
        >
            {content}
        </Component>
    );
}

export type NavbarBrandProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function NavbarBrand({ className, children, ...rest }: NavbarBrandProps) {
    return (
        <a className={cx('navbar-brand', className)} {...rest}>
            {children}
        </a>
    );
}

export type NavbarTextProps = React.HTMLAttributes<HTMLSpanElement>;

export function NavbarText({ className, children, ...rest }: NavbarTextProps) {
    return (
        <span className={cx('navbar-text', className)} {...rest}>
            {children}
        </span>
    );
}
