import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

export const Table = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className="w-full overflow-x-auto">
    <table
      className={cn('w-full text-left border-collapse rounded-md', className)}
    >
      {children}
    </table>
  </div>
);

export const THead = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <thead className={cn('bg-gray-100', className)}>{children}</thead>;

export const TBody = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <tbody className={cn('bg-white', className)}>{children}</tbody>;

export const TRow = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <tr className={cn('border-b border-gray-200 min-h-12', className)}>
    {children}
  </tr>
);

export const TCell = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <td className={cn('px-3 py-4 text-sm text-gray-600', className)}>
    {children}
  </td>
);

export const THeaderCell = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <th
    className={cn(
      'px-3 py-4 text-xs font-bold text-gray-600 uppercase tracking-wider',
      className
    )}
  >
    {children}
  </th>
);
