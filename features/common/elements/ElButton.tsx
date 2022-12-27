import classNames from 'classnames';
import React from 'react';

const buttonVariants = {
  'solid-gray': 'bg-gray-600 text-white border-gray-800',
  'solid-blue': 'bg-blue-600 text-white border-blue-800',
  'solid-orange': 'bg-orange-600 text-white border-orange-800',
};

type ElButtonProps = {
  variant?: keyof typeof buttonVariants;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const ElButton = ({
  variant,
  children,
  className,
  ...buttonProps
}: React.PropsWithChildren<ElButtonProps>): JSX.Element => {
  const styleVariant = variant && buttonVariants[variant];

  return (
    <button
      className={classNames(
        'p-1 flex justify-center items-center rounded-md shadow border-1',
        'hover:scale-[0.98] duration-300',
        styleVariant,
        className,
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
