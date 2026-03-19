import * as React from 'react';
import { createPortal } from 'react-dom';
import type { BootstrapCommonProps } from '../types/common';
import { cx } from '../utils/cx';

export type OffcanvasPlacement = 'start' | 'end' | 'top' | 'bottom';

export type OffcanvasProps = React.HTMLAttributes<HTMLDivElement> &
    BootstrapCommonProps & {
        show: boolean;
        title?: React.ReactNode;
        placement?: OffcanvasPlacement;
        backdrop?: boolean;
        closeButton?: boolean;
        onClose?: () => void;
    };

export function Offcanvas({
    bsPrefix = 'offcanvas',
    className,
    unstyled,
    show,
    title,
    placement = 'start',
    backdrop = true,
    closeButton = true,
    onClose,
    children,
    ...rest
}: OffcanvasProps) {
    if (!show) return null;

    const panel = (
        <>
            <div
                className={
                    unstyled ? className : cx(bsPrefix, `offcanvas-${placement}`, 'show', className)
                }
                tabIndex={-1}
                aria-modal="true"
                role="dialog"
                {...rest}
            >
                {(title || closeButton) && (
                    <div className="offcanvas-header">
                        {title && <h5 className="offcanvas-title">{title}</h5>}
                        {closeButton && (
                            <button type="button" className="btn-close" aria-label="Close" onClick={onClose} />
                        )}
                    </div>
                )}
                <div className="offcanvas-body">{children}</div>
            </div>
            {backdrop && <div className="offcanvas-backdrop fade show" onClick={onClose} aria-hidden="true" />}
        </>
    );

    return createPortal(panel, document.body);
}
