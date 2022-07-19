export const normalizeColor = (hexCode: number) => [
  ((hexCode >> 16) & 255) / 255,
  ((hexCode >> 8) & 255) / 255,
  (255 & hexCode) / 255
];
