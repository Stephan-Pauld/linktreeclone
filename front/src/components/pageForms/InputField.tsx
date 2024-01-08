import React from "react";

function InputField({ register, label }) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div>
      <label htmlFor="">{capitalizeFirstLetter(label)}</label>
      <input {...register(label)} className="border border-black" type="text" />
    </div>
  );
}

export default InputField;
