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
      <div className="w-full max-w-md mx-auto">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">
              Create Your Link Page
            </h3>
            <p className="text-sm text-muted-foreground">
              Personalize a page for custom links to share!
            </p>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit(submitForm)}>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="slug"
                >
                  Page Slug
                </label>

                <InputField label="slug" register={register} />
              </div>

              {fields.map((field, index) => (
                <div key={field.id} className="space-y-2">
                  {/* Added regular inputs... I was having trouble with re-usable but this looks fine */}

                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor={`link-${index}`}
                  >
                    {`Link ${index}`}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      {...register(`links.${index}.url`)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow"
                      id={`link-${index}`}
                      placeholder="https://example.com"
                    />
                  </div>

                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor={`color-${index}`}
                  >
                    {`Color ${index}`}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      {...register(`links.${index}.color`)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow"
                      id={`color-${index}`}
                      placeholder="#957CBB"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <p className="">Remove Link</p>
                    <button
                      onClick={() => remove(index)}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 w-10 bg-red-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-black"
                      >
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={() => append({ url: "", color: "" })}
                type="button"
                className="inline-flex items-center justify-center rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mt-[20px] text-white bg-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                Add Another Link
              </button>
              <div className="flex items-center py-6">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full text-white bg-blue-700"
                >
                  Create Link
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePage;

// <form onSubmit={handleSubmit(submitForm)}>
// <InputField label="slug" register={register} />

// <div>
// {fields.map((field, index) => (
//   <div key={field.id}>
//     {/* Added regular inputs... I was having trouble with re-usable but this looks fine */}
//     <input
//       {...register(`links.${index}.url`)}
//       placeholder="Link URL"
//     />
//     <input
//       {...register(`links.${index}.color`)}
//       placeholder="Link Color"
//     />
//     <button
//       classNameName="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
//       type="button"
//       onClick={() => remove(index)}
//     >
//       X
//     </button>
//   </div>
// ))}

//   <button
//     classNameName="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-4"
//     type="button"
//     onClick={() => append({ url: "", color: "" })}
//   >
//     Add Link
//   </button>
//   <button
//     type="submit"
//     classNameName="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-4"
//   >
//     Submit
//   </button>
// </div>
// </form>
