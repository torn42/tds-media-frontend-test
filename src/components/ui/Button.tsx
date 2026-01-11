import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps<T extends ElementType> {
  as?: T;
  variant?: 'primary' | 'outlined';
  children: ReactNode;
}

type PolymorphicButtonProps<T extends ElementType> = ButtonProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>;

export const Button = <T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  className,
  children,
  ...props
}: PolymorphicButtonProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      className={cn(
        'px-4 py-3 rounded font-medium transition-all inline-flex items-center justify-center gap-2',
        'min-w-25 whitespace-nowrap cursor-pointer active:scale-95',
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-500',
        variant === 'outlined' &&
          'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
