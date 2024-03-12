import React from "react";

const SelectInputPreview = ({ formik }: { formik?: any }) => {
  return (
    <div className="flex flex-col gap-3 text-white">
      <label htmlFor="select">
        {formik.values.selectLabel || "Select Box"}
      </label>
      <select
        name="select"
        id="select"
        className="p-4 bg-transparent outline-none border-[3px] border-[#bbb] font-bold text-xl"
      >
        {formik.values.options.map((option: any, index: number) => {
          return (
            <option
              key={index}
              defaultValue={formik.values.selectPlaceholder}
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
