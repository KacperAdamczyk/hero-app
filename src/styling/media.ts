export const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
};

export const media: {
  [name in keyof typeof breakpoints]: string;
} = Object.fromEntries(
  Object.entries(breakpoints).map(([name, size]) => [
    name,
    `@media (max-width: ${size}px)`,
  ]),
) as any;
