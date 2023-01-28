export const getPercent = (currentCount: number, targetCount: number) => {
  if (currentCount < targetCount) {
    return Math.floor((currentCount * 100) / targetCount);
  } else if (currentCount === 0 || targetCount === 0) {
    return 0;
  } else {
    return 100;
  }
};
