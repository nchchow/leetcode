/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = (emails) => {
  const set = new Set();
  emails.forEach((email) => {
    let [local, domain] = email.split("@");
    local = local.replace(/\+.*/, "").replace(/\./g, "");
    set.add(`${local}@${domain}`);
  });
  return set.size;
};

// one line
const numUniqueEmails = (emails) =>
  emails.reduce(
    (s, email) => s.add(email.replace(/(\+.*(?=@)|(\.(?=.*@)))/g, "")),
    new Set()
  ).size;
