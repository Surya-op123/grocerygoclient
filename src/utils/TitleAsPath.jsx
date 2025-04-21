export const slugify = (text) => {
   return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Replace spaces and special chars with "-"
      .replace(/^-+|-+$/g, '');    // Trim leading/trailing dashes
};
