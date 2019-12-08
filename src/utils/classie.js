export default function classie(...args) {
  return args.reduce((classArray, arg) => {
    if (typeof arg === 'string') {
      return [...classArray, arg];
    } else if (Array.isArray(arg)) {
      const memberClasses = [];

      arg.forEach((c) => {
        if (c && c.length) {
          memberClasses.push(c);
        }
      });

      return [...classArray, ...memberClasses];
    } else if (typeof arg === 'object' && Object.keys(arg).length) {
      const keys = Object.keys(arg);
      const keyClasses = [];

      for (let i = 0; i < keys.length; i++) {
        if (arg[keys[i]]) {
          keyClasses.push(keys[i]);
        }
      }

      return [...classArray, ...keyClasses];
    } else if (!Number.isNaN(arg)) {
      return [...classArray, String[arg]];
    }

    return classArray;
  }, []).join(' ');
}
