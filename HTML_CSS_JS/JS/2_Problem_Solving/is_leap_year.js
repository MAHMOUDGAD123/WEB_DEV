const log = console.log;

/**
 * 
 * @param {number} y 
 */
const is_leap_year = (y) => {
  if (typeof y === "number") {
    return !(y % 4) && !!(y % 100) || !(y % 400);
  }
};

log(is_leap_year(1997));
log(is_leap_year(2000));
log(is_leap_year(2020));
log(is_leap_year(2024));