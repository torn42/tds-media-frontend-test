import { useId, type InputHTMLAttributes, type Ref } from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  ref?: Ref<HTMLInputElement>;
}

export const Input = ({
  label,
  error,
  className,
  ref,
  ...attrs
}: InputProps) => {
  const hintId = useId();
  const inputId = attrs.id || hintId;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-sm" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        {...attrs}
        id={inputId}
        ref={ref}
        className={cn(
          'px-3 py-2 bg-white rounded-md shadow-sm transition-colors',
          'focus:outline-none border-2  ',
          error ? 'border-red-500' : 'border-gray-300 focus:border-blue-600',
          className
        )}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
