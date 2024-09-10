const wait_for = (promise: any, delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  }).then(() => promise);
};

export { wait_for };
