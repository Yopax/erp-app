import { useState, useCallback } from 'react';

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
  message: string;
}

export interface FieldValidation {
  [key: string]: ValidationRule[];
}

export interface FormErrors {
  [key: string]: string;
}

export function useFormValidation(validationRules: FieldValidation) {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = useCallback(
    (fieldName: string, value: string): string => {
      const rules = validationRules[fieldName];
      if (!rules) return '';

      for (const rule of rules) {
        if (rule.required && !value.trim()) {
          return rule.message;
        }

        if (rule.minLength && value.length < rule.minLength) {
          return rule.message;
        }

        if (rule.maxLength && value.length > rule.maxLength) {
          return rule.message;
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          return rule.message;
        }

        if (rule.custom && !rule.custom(value)) {
          return rule.message;
        }
      }

      return '';
    },
    [validationRules]
  );

  const validateAllFields = useCallback(
    (values: { [key: string]: string }): boolean => {
      const newErrors: FormErrors = {};
      let isValid = true;

      Object.keys(validationRules).forEach((fieldName) => {
        const error = validateField(fieldName, values[fieldName] || '');
        if (error) {
          newErrors[fieldName] = error;
          isValid = false;
        }
      });

      setErrors(newErrors);
      return isValid;
    },
    [validateField, validationRules]
  );

  const clearError = useCallback((fieldName: string) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[fieldName];
      return newErrors;
    });
  }, []);

  const clearAllErrors = useCallback(() => {
    setErrors({});
  }, []);

  const setFieldError = useCallback((fieldName: string, message: string) => {
    setErrors((prev) => ({ ...prev, [fieldName]: message }));
  }, []);

  return {
    errors,
    validateField,
    validateAllFields,
    clearError,
    clearAllErrors,
    setFieldError,
  };
}
