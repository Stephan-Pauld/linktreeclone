import React from "react";

function InputField({ register, label }) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div>
      <label htmlFor="">{capitalizeFirstLetter(label)}</label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        id="slug"
        placeholder="https://website.com/page-slug"
        {...register(label)}
        type="text"
      />
    </div>
  );
}

export default InputField;
