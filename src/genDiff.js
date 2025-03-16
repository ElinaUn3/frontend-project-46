function compareObjects(obj1, obj2) {
    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
    const diff = {};
  
    keys.forEach((key) => {
      if (obj1[key] === undefined) {
        diff[`+ ${key}`] = obj2[key];
      } else if (obj2[key] === undefined) {
        diff[`- ${key}`] = obj1[key];
      } else if (obj1[key] !== obj2[key]) {
        diff[`  ${key}`] = { old: obj1[key], new: obj2[key] }; 
      } else {
        diff[`  ${key}`] = obj1[key]; 
      }
    });
  
    return diff;
  }
  
  function formatDiff(diff, format) {
    if (format === 'stylish') {
      return Object.entries(diff)
        .map(([key, value]) => {
          if (key.startsWith('+ ')) {
            return `+ ${key.slice(2)}: ${value}`;
          }
          if (key.startsWith('- ')) {
            return `- ${key.slice(2)}: ${value}`;
          }
          if (typeof value === 'object') {
            return `  ${key.slice(2)}: ${value.old} -> ${value.new}`;
          }
          return `  ${key.slice(2)}: ${value}`;
        })
        .join('\n');
    }
    return 'Unsupported format';
  }
  
  export default function genDiff(obj1, obj2, format = 'stylish') {
    const diff = compareObjects(obj1, obj2);
    return formatDiff(diff, format);
  }