export const createCursor = color => {
  const cursor = `
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <circle cx='16' cy='16' r='14' stroke='${color}' stroke-width='4' fill='none' opacity='0.7'/>
      <circle cx='16' cy='16' r='10' stroke='${color}' stroke-width='3' fill='none' opacity='0.7'/>
      <circle cx='16' cy='16' r='6' stroke='${color}' stroke-width='2' fill='none' opacity='0.9'/>
      <circle cx='16' cy='16' r='2' fill='${color}'/>
      <line x1='16' y1='0' x2='16' y2='32' stroke='${color}' stroke-width='2' opacity='0.6'/>
      <line x1='0' y1='16' x2='32' y2='16' stroke='${color}' stroke-width='2' opacity='0.6'/>
    </svg>
`;

  return `url("data:image/svg+xml;utf8,${encodeURIComponent(
    cursor
  )}") 16 16, default`;
};
