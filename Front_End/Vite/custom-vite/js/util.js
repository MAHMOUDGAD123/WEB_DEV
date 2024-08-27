const getRandomNumber = (from, to) => {
    return (Math.random() * (to - from + 1) + from) >>> 0;
};
const getRandomemoji = () => {
    return String.fromCodePoint((Math.random() * (128591 - 128512 + 1) + 128512) >>> 0);
};
export { getRandomNumber, getRandomemoji };
