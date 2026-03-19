import * as React from 'react';
import type { BootstrapCommonProps } from '../types/common';
import { cx } from '../utils/cx';

export type AlertVariant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';

export type AlertProps = React.HTMLAttributes<HTMLDivElement> &
    BootstrapCommonProps & {
        variant?: AlertVariant;
        dismissible?: boolean;
        show?: boolean;
        defaultShow?: boolean;
        onClose?: () => void;
    };

export function Alert({
    bsPrefix = 'alert',
    className,
    unstyled,
    variant = 'primary',
    dismissible,
    show,
    defaultShow = true,
    onClose,
    role = 'alert',
    children,
    ...rest
}: AlertProps) {
    const controlled = typeof show === 'boolean';
    const [internalVisible, setInternalVisible] = React.useState(defaultShow);
    const visible = controlled ? show : internalVisible;

    if (!visible) return null;

    const classes = unstyled
        ? className
        : cx(
            bsPrefix,
            `${bsPrefix}-${variant}`,
            dismissible ? 'alert-dismissible fade show' : undefined,
            className
        );

    return (
        <div role={role} className={classes} {...rest}>
            {children}
            {dismissible && (
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => {
                        if (!controlled) setInternalVisible(false);
                        onClose?.();
                    }}
                />
            )}
        </div>
    );
}
