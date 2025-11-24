export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validators = {
  email: {
    pattern: emailRegex,
    message: 'Formato de correo electrónico inválido',
  },
  
  required: (fieldName: string) => ({
    required: true,
    message: `${fieldName} es obligatorio`,
  }),

  minLength: (length: number, fieldName: string) => ({
    minLength: length,
    message: `${fieldName} debe tener al menos ${length} caracteres`,
  }),

  maxLength: (length: number, fieldName: string) => ({
    maxLength: length,
    message: `${fieldName} no puede exceder ${length} caracteres`,
  }),

  password: {
    minLength: 12,
    message: 'La contraseña debe tener al menos 12 caracteres',
  },

  strongPassword: (value: string): boolean => {
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumbers = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
  },

  numeric: {
    pattern: /^\d+$/,
    message: 'Solo se permiten números',
  },

  alphanumeric: {
    pattern: /^[a-zA-Z0-9]+$/,
    message: 'Solo se permiten letras y números',
  },

  phone: {
    pattern: /^[\d\s\-\+\(\)]+$/,
    message: 'Formato de teléfono inválido',
  },

  ruc: {
    pattern: /^\d{11}$/,
    message: 'El RUC debe tener 11 dígitos',
  },

  dni: {
    pattern: /^\d{8}$/,
    message: 'El DNI debe tener 8 dígitos',
  },
};

export function validateEmail(email: string): boolean {
  return emailRegex.test(email);
}

export function validatePassword(password: string, minLength = 12): boolean {
  return password.length >= minLength;
}

export function validateStrongPassword(password: string): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  
  if (password.length < 12) {
    errors.push('Mínimo 12 caracteres');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Al menos una mayúscula');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Al menos una minúscula');
  }
  
  if (!/\d/.test(password)) {
    errors.push('Al menos un número');
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Al menos un carácter especial');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export function validateRUC(ruc: string): boolean {
  return /^\d{11}$/.test(ruc);
}

export function validateDNI(dni: string): boolean {
  return /^\d{8}$/.test(dni);
}
