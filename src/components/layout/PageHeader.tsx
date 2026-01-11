import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  count?: number;
  children?: ReactNode;
}

export const PageHeader = ({ title, count, children }: PageHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between mb-5 md:items-center gap-3">
      <div className="flex gap-2 items-center">
        <h1 className="md:text-xl font-bold">{title}</h1>
        {count !== undefined && count > 0 && (
          <>
            <div className="bg-gray-300 h-5 w-px" />
            <span className="text-sm">{count}</span>
          </>
        )}
      </div>
      {children}
    </div>
  );
};
