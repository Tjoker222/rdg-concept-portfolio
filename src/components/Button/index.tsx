import classNames from 'classnames';
import React from 'react';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon?: React.ReactNode;
  size?: 'small' | 'medium';
  colorVariant?: 'primary' | 'secondary';
  full?: boolean;
}

export const Button = ({
  title = '',
  icon,
  size = 'medium',
  colorVariant = 'primary',
  full,
  ...props
}: ButtonProps) => {
  const buttonClasses = classNames({
    [`bg-black text-white `]:
      colorVariant === 'primary',
    [`bg-white text-black border-2 border-black`]:
      colorVariant === 'secondary',
    ['flex justify-center px-[3rem] py-[2.5rem]']: size === 'small',
    ['flex justify-center w-[54rem] py-lg']: size === 'medium',
    ['w-full']: full,
    ['min-w-fit w-fit']: !full,
  });

  const iconClasses = classNames({
    [`py-[4rem]`]: size === 'small',
    [`py-[3.2rem]`]: size === 'medium',
  });
  return (
    <button
      className={`${buttonClasses} flex items-center justify-center leading-none transition-all font-inter text-style-semibold-xl`}
      {...props}
    >
      {icon && (
        <div className='w-[5rem] h-[5rem]'>{icon}</div>
      )}
      {title}
    </button>
  );
};
