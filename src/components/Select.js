import React, { useState, useEffect } from "react";
import getBreeds from "../helpers/getBreeds";

const Select = ({onChange}) => {
  const [breeds, setBreeds] = useState();
  useEffect(() => {
    updateBreeds();
  }, []);

  const updateBreeds = () => {
    getBreeds().then((newBreeds) => {
      const breedArray = Object.keys(newBreeds.message);
      setBreeds(breedArray);
    });
  };

  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {breeds?.map((breed) => {

        return (
          <option value={breed} key={breed} >
            {breed}
          </option>
         
        );
      })}
    </select>
  );
};
export default Select;
