import React from "react";

const NumberInputModal = ({ formik }: { formik?: any }) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="numberLabel">Label</label>
      <input
        className="p-4 bg-transparent outline-none border-[3px] border-[#bbb] font-bold text-xl"
        type="text"
        name="numberLabel"
        id="numberLabel"
        onChange={formik.handleChange}
        value={formik.values["numberLabel"]}
      />
      <label htmlFor="numberPlaceholder">Placeholder</label>
      <input
        className="p-4 bg-transparent outline-none border-[3px] border-[#bbb] font-bold text-xl"
        type="text"
        name="numberPlaceholder"
        id="numberPlaceholder"
        onChange={formik.handleChange}
        value={formik.values["numberPlaceholder"]}
      />
      <label htmlFor="minNumber">Minimum Number</label>
      <input
        className="p-4 bg-transparent outline-none border-[3px] border-[#bbb] font-bold text-xl"
        type="number"
        name="minNumber"
        id="minNumber"
        onChange={formik.handleChange}
        value={formik.values["minNumber"]}
      />
      <label htmlFor="maxNumber">Maximum Number</label>
      <input
        className="p-4 bg-transparent outline-none border-[3px] border-[#bbb] font-bold text-xl"
        type="number"
        name="maxNumber"
        id="maxNumber"
        onChange={formik.handleChange}
        value={formik.values["maxNumber"]}
      />
    </div>
  );
};

export default NumberInputModal;
