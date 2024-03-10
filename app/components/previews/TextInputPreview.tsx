import React from "react";

const TextInputPreview = ({ formik }: { formik?: any }) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="text">{formik.values.textLabel}</label>
      <input
        className="p-4 bg-transparent outline-none border-[3px] border-[#bbb] font-bold text-xl"
        type="text"
        name="text"
        id="text"
        placeholder={formik.values.textPlaceholder}
      />
    </div>
  );
};

export default TextInputPreview;
