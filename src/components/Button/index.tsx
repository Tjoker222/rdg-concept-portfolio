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
    ['flex justify-center px-[2.5rem] py-[2rem]']: size === 'small',
    ['flex justify-center px-[10rem] py-[2rem] sm:py-[1.5rem]']: size === 'medium',
    ['w-full']: full,
    ['min-w-fit w-fit']: !full,
  });

  return (
    <button
      className={`${buttonClasses} flex items-center justify-center leading-none transition-all font-inter text-style-semibold-base`}
      {...props}
    >
      {icon && (
        <div className='w-[5rem] h-[5rem]'>{icon}</div>
      )}
      {title}
    </button>
  );
};
