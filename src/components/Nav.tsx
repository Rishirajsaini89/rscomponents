import * as React from 'react';
import type { BootstrapCommonProps } from '../types/common';
import { cx } from '../utils/cx';

export type NavProps = React.HTMLAttributes<HTMLUListElement> &
    BootstrapCommonProps & {
        variant?: 'tabs' | 'pills';
        fill?: boolean;
        justified?: boolean;
        vertical?: boolean;
    };

export function Nav({
    bsPrefix = 'nav',
    className,
    unstyled,
    variant,
    fill,
    justified,
    vertical,
    children,
    ...rest
}: NavProps) {
    return (
        <ul
            className={
                unstyled
                    ? className
                    : cx(
                        bsPrefix,
                        variant && `${bsPrefix}-${variant}`,
                        fill && `${bsPrefix}-fill`,
                        justified && `${bsPrefix}-justified`,
                        vertical && 'flex-column',
                        className
                    )
            }
            {...rest}
        >
            {children}
        </ul>
    );
}

export type NavItemProps = React.LiHTMLAttributes<HTMLLIElement>;

export function NavItem({ className, children, ...rest }: NavItemProps) {
    return (
        <li className={cx('nav-item', className)} {...rest}>
            {children}
        </li>
    );
}

export type NavLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    active?: boolean;
    disabled?: boolean;
};

export function NavLink({ active, disabled, className, children, ...rest }: NavLinkProps) {
    return (
        <a
            className={cx('nav-link', active && 'active', disabled && 'disabled', className)}
            aria-current={active ? 'page' : undefined}
            aria-disabled={disabled || undefined}
            {...rest}
        >
            {children}
        </a>
    );
}
