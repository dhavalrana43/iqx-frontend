export const formattedText = (text: string) => {
  return text.replace(
    /(\bTM\b|™|®|Inc\.|Ltd\.|\d{1,3}(?:st|nd|rd|th))/gi,
    "<sup>$1</sup>",
  );
};
