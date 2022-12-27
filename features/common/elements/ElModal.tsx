import classNames from 'classnames';
import React, { PropsWithChildren, useEffect } from 'react';

type ElModalProps = {
  closeModal: () => void;
  wrapperProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  containerProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
};

export const ElModal = ({
  children,
  closeModal,
  wrapperProps,
  containerProps,
}: PropsWithChildren<ElModalProps>): JSX.Element => {
  const { className: wrapperPropsClassName, ...leftWrapperProps } = wrapperProps || {};
  const { className: containerPropsClassName, ...leftContainerProps } = containerProps || {};

  useEffect(() => {
    const onKeyDowHandler = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', onKeyDowHandler);

    return () => {
      document.addEventListener('keydown', onKeyDowHandler);
    };
  }, []);

  return (
    <div
      className={classNames(
        'fixed w-[100vw] h-[100vh] top-0 right-0 bg-black/70 z-[1000] flex justify-center items-center',
        wrapperPropsClassName,
      )}
      onClick={closeModal}
      {...leftWrapperProps}
    >
      <div
        className={classNames(
          'rounded-md shaddow-md bg-gray-200 w-full h-full md:w-min md:h-min p-2',
          containerPropsClassName,
        )}
        onClick={(event) => event.stopPropagation()}
        {...leftContainerProps}
      >
        {children}
      </div>
    </div>
  );
};
