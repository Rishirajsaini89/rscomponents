import * as React from 'react';
import type { BootstrapCommonProps } from '../types/common';
import { cx } from '../utils/cx';

export type CardProps = React.HTMLAttributes<HTMLDivElement> &
    BootstrapCommonProps & {
        title?: React.ReactNode;
        subtitle?: React.ReactNode;
        body?: React.ReactNode;
        header?: React.ReactNode;
        footer?: React.ReactNode;
        imageSrc?: string;
        imageAlt?: string;
        imageTop?: boolean;
        bodyClassName?: string;
    };

export function Card({
    bsPrefix = 'card',
    className,
    unstyled,
    title,
    subtitle,
    body,
    header,
    footer,
    imageSrc,
    imageAlt = '',
    imageTop = true,
    bodyClassName,
    children,
    ...rest
}: CardProps) {
    const classes = unstyled ? className : cx(bsPrefix, className);

    return (
        <div className={classes} {...rest}>
            {header && <div className="card-header">{header}</div>}
            {imageSrc && imageTop && <img src={imageSrc} className="card-img-top" alt={imageAlt} />}
            <div className={cx('card-body', bodyClassName)}>
                {title && <h5 className="card-title">{title}</h5>}
                {subtitle && <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>}
                {body && <p className="card-text">{body}</p>}
                {children}
            </div>
            {imageSrc && !imageTop && <img src={imageSrc} className="card-img-bottom" alt={imageAlt} />}
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
}
