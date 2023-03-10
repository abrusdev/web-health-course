export function cn(...args) {
  return args.filter(Boolean).join(' ');
}

export function scrollTo(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ block: "center", behavior: 'smooth' });
  }
}