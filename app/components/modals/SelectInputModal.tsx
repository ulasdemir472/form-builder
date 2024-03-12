"use client";
import React, { useState } from "react";

const SelectInputModal = ({ formik }: { formik?: any }) => {
  const [optionLength, setOptionLength] = useState(1);

  return (
    <div className="flex flex-col gap-3 overflow-y-auto max-h-[500px]">
      <label htmlFor="selectLabel">Label</label>
      <input
        className="p-2 bg-transparent outline-none border-[3px] border-[#bbb] font-bold text-xl"
        type="text"
        name="selectLabel"
        id="selectLabel"
        onChange={formik.handleChange}
        value={formik.values["selectLabel"]}
      />
      <label htmlFor="selectPlaceholder">Placeholder</label>
      <input
        className="p-2 bg-transparent outline-none border-[3px] border-[#bbb] font-bold text-xl"
        type="text"
        name="selectPlaceholder"
        id="selectPlaceholder"
        onChange={formik.handleChange}
        value={formik.values["selectPlaceholder"]}
      />
      {optionLength > 0 &&
        Array.from({ length: optionLength }).map((_, index) => {
          const optionName = `options[${index}].option`;
          const valueName = `options[${index}].value`;
          return (
            <div key={index}>
              <div className="flex flex-col gap-2">
                <label htmlFor={optionName}>Option-{index + 1}</label>
                <input
                  className="p-2 bg-transparent outline-none border-[3px] border-[#bbb] font-bold text-xl"
                  type="text"
                  name={optionName}
                  id={optionName}
                  onChange={formik.handleChange}
                  value={formik.values.options[index]?.option || ""}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor={valueName}>Value-{index + 1}</label>
                <input
                  className="p-2 bg-transparent outline-none border-[3px] border-[#bbb] font-bold text-xl"
                  type="text"
                  name={valueName}
                  id={valueName}
                  onChange={formik.handleChange}
                  value={formik.values.options[index]?.value || ""}
                />
              </div>
            </div>
          );
        })}
      {optionLength < 5 && (
        <button
          className="w-4 h-4 rounded-full bg-transparent text-white border-2 border-white flex items-center justify-center p-3"
          onClick={() => setOptionLength((prev) => prev + 1)}
        >
          +
        </button>
      )}
    </div>
  );
};

export default SelectInputModal;
