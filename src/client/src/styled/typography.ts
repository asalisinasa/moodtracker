import { fontSize } from "./fontSize"

export const typography = {
  body: `
      font-size: ${fontSize.s};
      font-weight: normal;
      line-height: 1.4;
      letter-spacing: -0.01em;
  `,
  action: `
      font-size: ${fontSize.s};
      font-weight: bold;
      line-height: 1.4;
      letter-spacing: -0.02em;
  `,
  title: `
    font-size: ${fontSize.m};
    font-weight: bold;
    line-height: 1;
    letter-spacing: -0.06em;
  `,
  timer: `
    font-size: ${fontSize.l};
    font-weight: normal;
    line-height: 1;
    letter-spacing: -0.06em;
  `,
  caption: `
    font-size: ${fontSize.xs};
    font-weight: bold;
    line-height: 1.3;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  `,
}
