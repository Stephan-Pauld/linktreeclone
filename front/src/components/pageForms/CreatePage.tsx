import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import InputField from "./InputField";

function CreatePage() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      slug: "",
      links: [
        {
          url: "",
          color: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "links",
  });

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <InputField label="slug" register={register} />

        <div>
          {fields.map((field, index) => (
            <div key={field.id}>
              {/* Added regular inputs... I was having trouble with re-usable but this looks fine */}
              <input
                {...register(`links.${index}.url`)}
                placeholder="Link URL"
              />
              <input
                {...register(`links.${index}.color`)}
                placeholder="Link Color"
              />
              <button
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                type="button"
                onClick={() => remove(index)}
              >
                X
              </button>
            </div>
          ))}

          <button
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-4"
            type="button"
            onClick={() => append({ url: "", color: "" })}
          >
            Add Link
          </button>
          <button
            type="submit"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-4"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default CreatePage;
