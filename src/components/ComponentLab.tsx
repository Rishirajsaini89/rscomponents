import * as React from 'react';
import type { BootstrapCommonProps } from '../types/common';
import type { ColProps, ContainerProps } from './Layout';
import { Card } from './Card';
import { Col, Container, Row } from './Layout';
import { cx } from '../utils/cx';

export type ComponentLabItem = {
    id: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    component: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
    bodyClassName?: string;
    colProps?: Pick<ColProps, 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>;
};

export type ComponentLabProps = React.HTMLAttributes<HTMLDivElement> &
    BootstrapCommonProps & {
        title?: React.ReactNode;
        description?: React.ReactNode;
        items: ComponentLabItem[];
        columns?: 1 | 2 | 3;
        fluid?: ContainerProps['fluid'];
        rowClassName?: string;
        cardClassName?: string;
        emptyState?: React.ReactNode;
    };

const defaultColumnSpan: Record<NonNullable<ComponentLabProps['columns']>, Pick<ColProps, 'md'>> = {
    1: { md: 12 },
    2: { md: 6 },
    3: { md: 4 }
};

export function ComponentLab({
    className,
    unstyled,
    title = 'Component Lab',
    description = 'Add component examples here and verify behavior quickly in one place.',
    items,
    columns = 2,
    fluid = true,
    rowClassName,
    cardClassName,
    emptyState = 'No components added yet.',
    children,
    ...rest
}: ComponentLabProps) {
    return (
        <Container
            fluid={fluid}
            className={unstyled ? className : cx('py-4', className)}
            {...rest}
        >
            {(title || description) && (
                <div className="mb-4">
                    {title && <h2 className="mb-2">{title}</h2>}
                    {description && <p className="text-body-secondary mb-0">{description}</p>}
                </div>
            )}

            {children}

            {items.length === 0 ? (
                <div className="alert alert-secondary mt-3" role="status">
                    {emptyState}
                </div>
            ) : (
                <Row className={cx('g-4', rowClassName)}>
                    {items.map((item) => (
                        <Col key={item.id} xs={12} {...defaultColumnSpan[columns]} {...item.colProps}>
                            <Card
                                className={cx('h-100 shadow-sm', cardClassName, item.className)}
                                bodyClassName={cx('d-flex flex-column gap-3', item.bodyClassName)}
                                footer={item.footer}
                            >
                                <div>
                                    <h5 className="card-title mb-2">{item.title}</h5>
                                    {item.description && (
                                        <p className="card-subtitle text-body-secondary mb-0">{item.description}</p>
                                    )}
                                </div>
                                {item.component}
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}
