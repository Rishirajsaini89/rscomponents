import * as React from 'react';
import type { BootstrapCommonProps } from '../types/common';
import { cx } from '../utils/cx';

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> &
    BootstrapCommonProps & {
        striped?: boolean;
        bordered?: boolean;
        borderless?: boolean;
        hover?: boolean;
        small?: boolean;
        responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
        variant?: 'light' | 'dark';
        wrapperClassName?: string;
    };

export function Table({
    bsPrefix = 'table',
    className,
    unstyled,
    striped,
    bordered,
    borderless,
    hover,
    small,
    responsive,
    variant,
    wrapperClassName,
    children,
    ...rest
}: TableProps) {
    const tableNode = (
        <table
            className={
                unstyled
                    ? className
                    : cx(
                        bsPrefix,
                        striped && `${bsPrefix}-striped`,
                        bordered && `${bsPrefix}-bordered`,
                        borderless && `${bsPrefix}-borderless`,
                        hover && `${bsPrefix}-hover`,
                        small && `${bsPrefix}-sm`,
                        variant && `${bsPrefix}-${variant}`,
                        className
                    )
            }
            {...rest}
        >
            {children}
        </table>
    );

    if (!responsive) return tableNode;

    const responsiveClass = responsive === true ? 'table-responsive' : `table-responsive-${responsive}`;
    return <div className={cx(responsiveClass, wrapperClassName)}>{tableNode}</div>;
}
