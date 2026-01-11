import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn('w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl', className)}
    >
      {children}
    </div>
  );
};
