import * as React from 'react';
import { createPortal } from 'react-dom';
import type { BootstrapCommonProps } from '../types/common';
import { cx } from '../utils/cx';

export type ModalProps = React.HTMLAttributes<HTMLDivElement> &
    BootstrapCommonProps & {
        show: boolean;
        title?: React.ReactNode;
        footer?: React.ReactNode;
        centered?: boolean;
        size?: 'sm' | 'lg' | 'xl';
        scrollable?: boolean;
        backdrop?: boolean;
        closeButton?: boolean;
        onClose?: () => void;
    };

export function Modal({
    bsPrefix = 'modal',
    className,
    unstyled,
    show,
    title,
    footer,
    centered,
    size,
    scrollable,
    backdrop = true,
    closeButton = true,
    onClose,
    children,
    ...rest
}: ModalProps) {
    React.useEffect(() => {
        if (!show) return;
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [show]);

    if (!show) return null;

    const modal = (
        <>
            <div
                className={unstyled ? className : cx(bsPrefix, 'fade show d-block', className)}
                role="dialog"
                aria-modal="true"
                {...rest}
            >
                <div
                    className={cx(
                        'modal-dialog',
                        centered && 'modal-dialog-centered',
                        scrollable && 'modal-dialog-scrollable',
                        size && `modal-${size}`
                    )}
                >
                    <div className="modal-content">
                        {(title || closeButton) && (
                            <div className="modal-header">
                                {title && <h5 className="modal-title">{title}</h5>}
                                {closeButton && (
                                    <button type="button" className="btn-close" aria-label="Close" onClick={onClose} />
                                )}
                            </div>
                        )}
                        <div className="modal-body">{children}</div>
                        {footer && <div className="modal-footer">{footer}</div>}
                    </div>
                </div>
            </div>
            {backdrop && <div className="modal-backdrop fade show" onClick={onClose} aria-hidden="true" />}
        </>
    );

    return createPortal(modal, document.body);
}
