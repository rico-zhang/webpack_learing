export function applyStyle(dom, ...styles) {
  const allStyles = styles.reduce(
    (all, curr) => ({
      ...all,
      ...curr,
    }),
    {}
  );
  console.log(allStyles);
  for (const key in allStyles) {
    dom.style[key] = allStyles[key];
  }
}
