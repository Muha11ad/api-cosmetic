export const PASSWORD_LENGTH_ERROR = 'Password must be between 4 and 20 characters';

export const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,20}$/;

export const PASSWORD_REGEX_ERROR = 'Password must include at least one uppercase letter, one number, and one special character';
