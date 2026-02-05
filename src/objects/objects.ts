export const objects: () => void = (): void => {
  const flash: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Súper Velocidad", "Time travel"],
    getName() {
      return this.name;
    },
  };

  console.log(flash.getName?.());

  const superman: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Clark Kent",
    age: 60,
    powers: ["Súper Fuerza"],
  };

  console.log({ superman });

    console.log("--- END OBJECT INLINE TYPE FILE ---");
};
