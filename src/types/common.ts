import * as React from 'react';

export type BootstrapCommonProps = {
    bsPrefix?: string;
    className?: string;
    unstyled?: boolean;
};

export type ElementTag = keyof React.JSX.IntrinsicElements;
