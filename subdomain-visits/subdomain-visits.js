/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const subdomainVisits = (cpdomains) => {
  const map = {};
  for (const cpdomain of cpdomains) {
    let [count, domain] = cpdomain.split(" ");
    while (domain) {
      map[domain] = (map[domain] || 0) + +count;
      const i = domain.indexOf(".");
      domain = i !== -1 ? domain.slice(i + 1) : "";
    }
  }
  return Object.entries(map).map(([domain, count]) => `${count} ${domain}`);
};
