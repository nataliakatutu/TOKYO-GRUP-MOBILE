const fullName = "Anjelita Ferensca Kaminang";

const person = {
  firstName: "Anjelita Ferensca",
  lastName: "Kaminang",
  age: 20,
};

const display = ({ firstName, lastName }) => {
  console.log(`Hello ${firstName} ${lastName}`);
};

export { fullName, person, display };