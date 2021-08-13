module.exports = function check(str, bracketsConfig) {
  const queue = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      let index = bracketsConfig[j].indexOf(str[i]);
      // No such bracket in current subarray
      if (index === -1) {
        continue;
      } else if (index === 0) {
        // If brackets ara the same
        if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
          // If this is a closing one we remove opening bracket from the queue
          if (queue[queue.length - 1] === str[i]) {
            queue.pop();
          } else {
            queue.push(str[i]);
          }
        } else {
          queue.push(str[i]);
        }
      } else if (index === 1) {
        // If a closing bracket doesn't have a corresponding opening one
        // in the queue, we return false
        if (!bracketsConfig[j].includes(queue.pop())) return false;
      }
    }
  }

  // Check whether there are left unclosed brackets in queue
  if (queue.length) {
    return false;
  }
  return true;
};
