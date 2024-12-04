export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};