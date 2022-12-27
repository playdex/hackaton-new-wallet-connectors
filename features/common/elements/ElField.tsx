import React, { useId } from 'react';

type ElFieldProps = {
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  labelProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  fieldContainerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  label: string;
};

export default function ElField({
  inputProps,
  labelProps,
  label,
  fieldContainerProps,
}: ElFieldProps): JSX.Element {
  const inputId = useId();

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputId} {...labelProps}>
        {label}
      </label>
      <input
        id={inputId}
        className="p-2 bg-black/40 text-white rounded"
        type="text"
        {...inputProps}
      />
    </div>
  );
}
