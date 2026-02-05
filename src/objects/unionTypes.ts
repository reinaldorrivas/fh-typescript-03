type SuperHeroe = {
  name: string;
  age: number;
  powers: string[];
  getName?: () => string;
};

export const unionTypes: () => void = (): void => {
  let heroe: string | number | SuperHeroe;

  heroe = "Clark Kent";

  console.log(typeof heroe);

  heroe = 1;

  console.log(typeof heroe);

  heroe = {
    name: "Clark Kent",
    age: 60,
    powers: ["Súper Fuerza"],
  };

  console.log(typeof heroe);

  console.log("--- END UNION TYPES FILE ---");
};
