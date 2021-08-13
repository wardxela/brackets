module.exports = function check(str, bracketsConfig) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      let index = bracketsConfig[j].indexOf(str[i]);
      // No such bracket in current subarray
      if (index === -1) {
        continue;
      } else if (index === 0) {
        // If brackets ara the same
        if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
          // If this is a closing one we remove opening bracket from the stack
          if (stack[stack.length - 1] === str[i]) {
            stack.pop();
          } else {
            stack.push(str[i]);
          }
        } else {
          stack.push(str[i]);
        }
      } else if (index === 1) {
        // If a closing bracket doesn't have a corresponding opening one
        // in the stack, we return false
        if (!bracketsConfig[j].includes(stack.pop())) return false;
      }
    }
  }

  // Check whether there are left unclosed brackets in stack
  if (stack.length) {
    return false;
  }
  return true;
};
