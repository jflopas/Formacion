const arrCities2 = [
  { city: "Logroño", country: "Spain", capital: false },
  { city: "Bordeaux", country: "France", capital: false },
  { city: "Madrid", country: "Spain", capital: true },
  { city: "Florence", country: "Italy", capital: true },
  { city: "Oslo", country: "Norway", capital: true },
  { city: "Jaén", country: "Spain", capital: false },
];

const cities = arrCities2
  .filter((a) => a.capital === false)
  .map(function (b) {
    let city = b.city;
    let isSpain;
    b.country === "Spain" ? (isSpain = true) : (isSpain = false);
    return {
      city,
      isSpain,
    };
  });
console.log(cities);
