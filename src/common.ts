// List of zIndex
export const zIndices = {
  hide: -1,
  menu: 0,
  base: 50,
  docked: 100,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  contextMenu: 1800,
  tooltip: 2000,
};

// List of Shadows
export const shadows = {
  default: '0 0 var(--spacing-md) 0 var(--colors-outline-shadow)',
  large: '0 0 var(--spacing-xl) 0 var(--colors-outline-shadow)',
  hover: '0 0 var(--spacing-md) 0 var(--colors-outline-shadowHover)',
  active: '0 0 var(--spacing-sm) 0 var(--colors-outline-shadowActive)',
  outline: `0 0 1px 0 var(--colors-outline-border)`,
  inner: `inset 0 0 var(--spacing-xs) 0 var(--colors-outline-shadow)`,
};
