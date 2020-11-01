const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error ("Error");
  let newarr =[];
  for (let i=0; i<arr.length; i++) {
if (arr[i] === "--discard-next") {
  if (arr[i+2] === "--double-prev" || arr[i+2] === "--discard-prev") {
    i++;
  }
  i++;
} else if (arr[i] === "--discard-prev") {
  if (i!==0) {
    newarr.pop();
  }
} else if (arr[i] === "--double-next") {
  if (i===arr.length-1) continue;
  newarr.push(arr[i+1]);
} else if (arr[i] === "--double-prev") {
  if (i===0) continue;
  newarr.push(arr[i-1]);
} else {
  newarr.push(arr[i]);
}
}
return newarr;
};
