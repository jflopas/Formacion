let fromBytesToFormattedSizeUnits = (bytes, digits) => {
  let isNegative = false;
  if (bytes < 0) {
    bytes = Math.abs(bytes);
    isNegative = true;
  }
  let operation = Math.floor(Math.log(bytes) / Math.log(1000));
  let sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  if (isNegative) {
    bytes = -bytes;
  }
  if (digits == undefined || digits == 0) {
    digits = 3;
  }
  return (
    (bytes / Math.pow(1000, operation)).toPrecision(digits) * 1 +
    " " +
    sizes[operation]
  );
};
const result = fromBytesToFormattedSizeUnits(1000);
console.log(result);

const result1 = fromBytesToFormattedSizeUnits(123456789);
console.log(result1);

const result2 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result2);
