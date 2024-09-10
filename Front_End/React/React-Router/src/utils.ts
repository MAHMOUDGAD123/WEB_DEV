/**
 * generate a random number
 */
const random_in_range: (from: number, to: number) => number = (
  from: number,
  to: number
) => (Math.random() * (to - from + 1) + from) >>> 0;

/**
 * generate a random emoji
 */
const random_emoji: () => string = () => {
  return String.fromCodePoint(random_in_range(128512, 128591));
};

/**
 * generate a random css color
 */
const generate_random_color = () => {
  const $0_255 = random_in_range.bind(null, 0, 255);
  return `rgb(${$0_255()} ${$0_255()} ${$0_255()})`;
};

/**
 * wait for n seconds
 */
const wait_for = (n: number) => {
  const start = performance.now();
  const delay_ms = n * 1000;
  while (performance.now() - start < delay_ms) {
    // do nothing
  }
};

/**
 * wait for n seconds - promise version
 */
const wait_for_p = (promise: any, delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  }).then(() => promise);
};

export {
  random_in_range,
  random_emoji,
  generate_random_color,
  wait_for,
  wait_for_p,
};
