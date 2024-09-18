const fake_phone_number = () => {
  const last_8_nums = (() => {
    let n = "";
    for (let i = 0; i < 8; ++i) n += String((Math.random() * 10) >>> 0);
    return n;
  })();

  return `+201${[0, 1, 2, 5][(Math.random() * 4) >>> 0]}${last_8_nums}`;
};

const fake_country = () => {
  const countries = [
    "Egypt",
    "Palastine",
    "Moroca",
    "Saudi Arabia",
    "Syria",
    "Libya",
    "Algeria",
    "kuwait",
    "Bahrain",
    "Oman",
    "Lebanon",
    "Sudan",
    "Qatar",
    "jordan",
    "Iraq",
    "Yemen",
    "Tunisia",
  ];
  return countries[(Math.random() * countries.length) >>> 0];
};

const fake_job = () => {
  const jobs = [
    "Sotware Engineer",
    "Web developer",
    "Front-end developer",
    "IT technician",
    "Data scientist",
    "Systems administrator",
    "Product manager",
    "Cybersecurity analyst",
    "UX designer",
    "Mobile app developer",
    "Cloud engineer",
  ];

  return jobs[(Math.random() * jobs.length) >>> 0];
};

/**
 * @param {number} n delay in miliseconds
 */
const wait_for = (n: number) => {
  return new Promise((resolve) => setTimeout(resolve, n));
};

export { fake_phone_number, fake_country, fake_job, wait_for };
