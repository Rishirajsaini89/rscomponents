import * as React from 'react';
import { cx } from '../utils/cx';

export type BootstrapElementProps<T extends keyof React.JSX.IntrinsicElements> = {
    as?: T;
    baseClass?: string;
    className?: string;
    unstyled?: boolean;
} & React.JSX.IntrinsicElements[T];

export function BootstrapElement<T extends keyof React.JSX.IntrinsicElements = 'div'>(
    props: BootstrapElementProps<T>
) {
    const { as, baseClass, className, unstyled, ...rest } = props;
    const Component = (as ?? 'div') as React.ElementType;

    return <Component className={unstyled ? className : cx(baseClass, className)} {...rest} />;
}
