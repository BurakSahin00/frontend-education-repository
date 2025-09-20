export interface Response {
  value: unknown | null,
  hasValue: boolean,
  isSuccess: boolean,
  errors: string[],
  validationErrors: Record<string, string[]>,
  successes: string[],
  hasValidationErrors: boolean,
  hasErrors: boolean
}

