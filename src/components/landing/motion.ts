/** Premium easing — calm deceleration, not bouncy */
export const easeLux = [0.16, 1, 0.3, 1] as const;

export const viewportOnce = {
  once: true,
  amount: 0.2,
  margin: '-24px 0px -10% 0px',
} as const;

export const transitionView = {
  duration: 0.55,
  ease: easeLux,
};

export const transitionItem = (i: number) => ({
  duration: 0.5,
  ease: easeLux,
  delay: i * 0.05,
});
