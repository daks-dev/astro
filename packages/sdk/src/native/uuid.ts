export default (length = 16): string =>
  '_' +
  Math.floor((1 + Math.random()) * 0x10000000)
    .toString(length)
    .substring(1);
