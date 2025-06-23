export const scrollToHash = (hash: string) => {
  const hashElement = document.querySelector(hash);
  if (hashElement) {
    hashElement.scrollIntoView({ behavior: "smooth" });
  }
};
