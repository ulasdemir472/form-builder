import React from "react";

const NumberInputPreview = ({ formik }: { formik?: any }) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="number">{formik.values.numberLabel}</label>
      <input
        className="p-4 bg-transparent outline-none border-[3px] border-[#bbb] font-bold text-xl"
        type="number"
        name="number"
        id="number"
        min={formik.values.minNumber}
        max={formik.values.maxNumber}
        placeholder={formik.values.numberPlaceholder}
      />
    </div>
  );
};

export default NumberInputPreview;
