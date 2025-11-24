import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  icon?: React.ReactNode;
  endAdornment?: React.ReactNode;
  disabled?: boolean;
  helperText?: string;
}

export default function FormField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required = false,
  autoComplete,
  icon,
  endAdornment,
  disabled = false,
  helperText,
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={id}
          name={id}
          type={type}
          autoComplete={autoComplete}
          required={required}
          disabled={disabled}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`block w-full ${icon ? 'pl-10' : 'pl-3'} ${
            endAdornment ? 'pr-12' : 'pr-3'
          } py-3 border ${
            error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-600'
          } rounded-lg focus:ring-2 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed`}
          placeholder={placeholder}
        />
        {endAdornment && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {endAdornment}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      {!error && helperText && <p className="mt-1 text-xs text-gray-500">{helperText}</p>}
    </div>
  );
}
