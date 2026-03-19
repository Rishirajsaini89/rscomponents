import * as React from 'react';
import type { BootstrapCommonProps } from '../types/common';
import { cx } from '../utils/cx';

export type FormInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> &
    BootstrapCommonProps & {
        label?: React.ReactNode;
        helpText?: React.ReactNode;
        errorText?: React.ReactNode;
        isValid?: boolean;
        isInvalid?: boolean;
        wrapperClassName?: string;
        labelClassName?: string;
        inputClassName?: string;
    };

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(function FormInput(
    {
        bsPrefix = 'form-control',
        className,
        unstyled,
        label,
        id,
        helpText,
        errorText,
        isValid,
        isInvalid,
        wrapperClassName,
        labelClassName,
        inputClassName,
        ...rest
    },
    ref
) {
    const generatedId = React.useId();
    const controlId = id ?? generatedId;

    const inputClasses = unstyled
        ? cx(className, inputClassName)
        : cx(
            bsPrefix,
            isValid && 'is-valid',
            (isInvalid || !!errorText) && 'is-invalid',
            className,
            inputClassName
        );

    return (
        <div className={cx('mb-3', wrapperClassName)}>
            {label && (
                <label htmlFor={controlId} className={cx('form-label', labelClassName)}>
                    {label}
                </label>
            )}
            <input ref={ref} id={controlId} className={inputClasses} {...rest} />
            {helpText && <div className="form-text">{helpText}</div>}
            {errorText && <div className="invalid-feedback d-block">{errorText}</div>}
        </div>
    );
});
