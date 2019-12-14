export const wordsToCamel = (str) => {
  let result = '';

  for (let i = 0, len = str.length; i < len; i += 1) {
    const char = str[i];
    if (char !== ' ') {
      if (i > 0 && str[i - 1] === ' ') {
        result += char.toUpperCase();
      } else {
        result += char;
      }
    }
  }

  return result;
};
