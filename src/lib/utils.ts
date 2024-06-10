/**
 * The code exports two functions, `validateString` and `getErrorMessage`, which are used for
 * validating strings and retrieving error messages respectively.
 * @param {unknown} value - The `value` parameter is the value that needs to be validated. It can be of
 * any type, but the function will only return `true` if it is a string and its length is less than or
 * equal to the `maxLength` parameter.
 * @param {number} maxLength - The `maxLength` parameter in the `validateString` function is the
 * maximum length allowed for the string value. If the length of the string exceeds this value, the
 * function will return `false`.
 * @returns In the `validateString` function, a boolean value is being returned. It returns `true` if
 * the `value` is a string and its length is less than or equal to the `maxLength` parameter.
 * Otherwise, it returns `false`.
 */
export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
