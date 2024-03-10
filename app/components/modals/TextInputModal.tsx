import React from "react";

const TextInputModal = ({ formik }: { formik?: any }) => {
  console.log(formik.values.textLabel);
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="textLabel">Label</label>
      <input
        className="p-4 bg-transparent outline-none border-[3px] border-[#bbb] font-bold text-xl"
        type="text"
        name="textLabel"
        id="textLabel"
        onChange={formik.handleChange}
        value={formik.values["textLabel"]}
      />
      <label htmlFor="textPlaceholder">Placeholder</label>
      <input
        className="p-4 bg-transparent outline-none border-[3px] border-[#bbb] font-bold text-xl"
        type="text"
        name="textPlaceholder"
        id="textPlaceholder"
        onChange={formik.handleChange}
        value={formik.values["textPlaceholder"]}
      />
    </div>
  );
};

export default TextInputModal;
