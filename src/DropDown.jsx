import { useState } from "react";
import "./index.css";
import DropDownOption from "./DropDownOption";

export default function DropDown({ initialOptions, single, multiple }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(initialOptions);
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  if (single && multiple) {
    return <>
    <div className="select"> Please select single or multiple</div>
    </>
  }

  return (
    <main>
      <div className="select">
        <div className="select-box" onClick={() => setOpen(!open)}>
          <div className="selected-options">
            {selectedOptions.length > 0
              ? selectedOptions.map((item) => (
                  <span className="selected-multi-option"key={item.value}>{item.label}</span>
                ))
              : "Select"}
          </div>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        {open && (
          <div className="select-options">
            {options.map((option, idx) => (
              <DropDownOption
                id={idx}
                option={option}
                setOpen={setOpen}
                setOptions={setOptions}
                single={single}
                multiple={multiple}
                setSelectedOptions={setSelectedOptions}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
