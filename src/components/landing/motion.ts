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

export const motionVisible = { opacity: 1, y: 0 } as const;

/** Above-the-fold entrance — same markup on server and first client paint. */
export function entranceProps(mounted: boolean, reduce: boolean, y: number) {
  if (!mounted || reduce) {
    return { initial: motionVisible, animate: motionVisible };
  }
  return { initial: { opacity: 0, y }, animate: motionVisible };
}

/** Scroll-triggered blocks — avoid whileInView initial state during hydration. */
export function inViewProps(mounted: boolean, reduce: boolean, y: number) {
  if (!mounted || reduce) {
    return { initial: motionVisible, whileInView: motionVisible };
  }
  return { initial: { opacity: 0, y }, whileInView: motionVisible };
}

export function motionDuration(mounted: boolean, reduce: boolean, duration: number) {
  return !mounted || reduce ? 0 : duration;
}
