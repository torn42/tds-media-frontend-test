import { useState, type KeyboardEvent } from 'react';
import { Input } from './Input';

interface TagInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
  label?: string;
}

export const TagInput = ({ value, onChange, error, label }: TagInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const trimmedValue = inputValue.trim();

      if (trimmedValue && !value.includes(trimmedValue)) {
        onChange([...value, trimmedValue]);
        setInputValue('');
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    onChange(value.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-col gap-2">
      <Input
        label={label}
        error={error}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Введите навык и нажмите Enter"
      />

      <div className="flex flex-wrap gap-2">
        {value.map((tag) => (
          <div
            key={tag}
            className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="hover:text-blue-900 focus:outline-none cursor-pointer"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
