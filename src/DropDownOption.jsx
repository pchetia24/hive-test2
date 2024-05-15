import { useState } from "react";
import "./index.css";

export default function DropDownOption({
  id,
  option,
  setOpen,
  setOptions,
  setSelectedOptions,
  single,
  multiple,
}) {
  /*
  if single then close dropdown after selecting 
  */

  const handleChange = (checkedValue, single, multiple) => {
    let optionCopy = { ...option, checked: checkedValue };

    setOptions((prev) =>
      prev.map((item) => (item.value === option.value ? optionCopy : item)),
    );

    if (single) {
      setSelectedOptions([optionCopy]);
      setOpen(false);
    }

    if (multiple) {
      if (checkedValue) {
        setSelectedOptions((prev) => [...prev, optionCopy]);
      } else {
        setSelectedOptions((prev) =>
          prev.filter((option) => option.value !== optionCopy.value),
        );
      }
    }
  };

  return (
    <>
      <div
        key={id}
        className="option-item"
        onClick={() => handleChange(!option.checked, single, multiple)}
      >
        {multiple && <input type="checkbox" checked={option.checked} />}
        <label className={single ? "option-label--single" : "option-label"}>{option.label}</label>
      </div>
    </>
  );
}
