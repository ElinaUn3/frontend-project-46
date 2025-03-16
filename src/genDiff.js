function compareObjects(obj1, obj2) {
    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
    const sortedKeys = [...keys].sort(); 
  
    const diff = sortedKeys.map((key) => {
      const value1 = obj1[key];
      const value2 = obj2[key];
  
      if (value1 === undefined) {
        return `  + ${key}: ${value2}`; 
      }
      if (value2 === undefined) {
        return `  - ${key}: ${value1}`; 
      }
      if (value1 === value2) {
        return `    ${key}: ${value1}`;
      }
      return [
        `  - ${key}: ${value1}`,
        `  + ${key}: ${value2}`,
      ].join('\n');
    });
  
    return `{\n${diff.join('\n')}\n}`;
  }
  
  export default function genDiff(obj1, obj2) {
    return compareObjects(obj1, obj2);
  }