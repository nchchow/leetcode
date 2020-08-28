/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddrReplace = (address) => address.replace(/\./g, "[.]");

const defangIPaddrSplit = (address) => address.split(".").join("[.]");

const defangIPaddrMap = (address) =>
  address
    .split("")
    .map((char) => (char === "." ? "[.]" : char))
    .join("");
