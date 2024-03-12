import React, { useEffect } from "react";

const SelectInputPreview = ({ formik }: { formik?: any }) => {
  useEffect(() => {
    formik.setFieldValue(
      "selectLabel",
      localStorage.getItem("selectLabel") || "Label"
    );
    formik.setFieldValue(
      "selectPlaceholder",
      localStorage.getItem("selectPlaceholder") || "Placeholder"
    );
    formik.setFieldValue(
      "options",
      JSON.parse(localStorage.getItem("options") || "[]")
    );
  }, []);

  return (
    <div className="flex flex-col gap-3 text-white">
      <label htmlFor="select">
        {formik.values.selectLabel || "Select Box"}
      </label>
      <select
        name="select"
        id="select"
        required
        className="p-4 bg-transparent outline-none border-[3px] border-[#bbb] font-bold text-xl"
      >
        <option
          value=""
          className="p-2 bg-transparent text-gray-400 outline-none border-[3px] border-[#bbb] font-bold text-xl"
          disabled
          selected
        >
          {formik.values.selectPlaceholder || "Placeholder"}
        </option>
        {formik.values.options.map((option: any, index: number) => {
          return (
            <option
              key={index}
              value={option.value}
              className="p-2 bg-transparent text-black outline-none border-[3px] border-[#bbb] font-bold text-xl"
            >
              {option.option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInputPreview;
