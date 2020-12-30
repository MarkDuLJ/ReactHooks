import React, { memo } from "react";

const Dog = ({ dog, meow }) => {
  console.log(`rendering ${dog}`);
  return <p onClick={() => meow(dog)}>{dog}</p>;
};
const PureDog = memo(Dog);
export default PureDog;
