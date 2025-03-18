import React from "react";
import { Radio } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomRadio = styled(Radio)(() => ({
  width: 16,
  height: 16,
  borderRadius: "9999px", // Full border radius
  borderWidth: "var(--sds-size-stroke-border)",
  color: "#17222B",
  "&.Mui-checked": {
    color: "#17222B",
  },
  "&:hover": {
    backgroundColor: "rgba(23, 34, 43, 0.1)", // Light hover effect
  },
}));

const CustomRadioField = ({ state, label, value, selectedValue, onChange }) => {
  return (
    <div className="w-[340px] flex items-start gap-3">
      <CustomRadio
        disabled={state === "disabled"}
        checked={selectedValue === value} // Only the selected one is checked
        onChange={() => onChange(value)} // Updates the selected value
        sx={{ opacity: state === "disabled" ? 0.5 : 1 }} 
      />
      <div className="flex flex-col items-start text-left"> 
        <span className={`text-[16px] font-[400] mt-[-4px] ${state === "disabled" ? "text-[#818B94] opacity-50" : "text-[#17222B]"}`}>
          {label}
        </span>
        <p className={`text-[#858585] text-[16px] leading-[140%] font-[400] ${state === "disabled" ? "opacity-50" : "text-[#858585]"}`}>
          Description
        </p>
      </div>
    </div>
  );
};

export default CustomRadioField;
