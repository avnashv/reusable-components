import { useState } from "react";
import { MenuItem, Select, FormControl, FormHelperText, Chip } from "@mui/material";
import ArrowIconActive from "../../assets/icons/arrow-circle-down-active.svg";
import ArrowIconDisable from "../../assets/icons/arrow-circle-down-disable.svg";
import CloseCircle from "../../assets/icons/close-circle.svg";

const CustomDropdown = ({
  label,
  options,
  errorMessage,
  disabled,
  required,
  initialValue = "",
  multiple = false,
  onChange,
}) => {
  const [value, setValue] = useState(multiple ? (Array.isArray(initialValue) ? initialValue : []) : initialValue);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  const handleDelete = (itemToDelete) => (event) => {
    event.stopPropagation();
    const newValue = value.filter((item) => item !== itemToDelete);
    // console.log("Deleting:", itemToDelete, "New value:", newValue);
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  const CustomArrowIcon = () => (
    <img
      src={disabled ? ArrowIconDisable : ArrowIconActive}
      alt="Dropdown Icon"
      style={{
        width: 16,
        height: 16,
            }}
    />
  );

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
            {/* Label outside the select box */}
      <label
        style={{
          fontFamily: "Proxima Nova, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "140%",
          letterSpacing: "0%",
                    color: disabled ? "#A6ADB3" : "#17222B", // Gray when disabled
          marginBottom: "4px",
        }}
      >
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>

            {/* Select Box */}
      <FormControl
        sx={{
          backgroundColor: errorMessage ? "transparent" : disabled ? "#F4F6F8" : "white",
          "& .MuiOutlinedInput-root": {
            transition: "border 0.3s ease",
            width: "240px",
            height: multiple && value.length > 0 ? "auto" : "40px",
            minHeight: "40px",
            display: "flex",
            padding: "8px 12px",
            alignItems: multiple && value.length > 0 ? "flex-start" : "center",
            borderRadius: "8px",
            "& fieldset": {
              borderColor: errorMessage ? "#E53935" : "#CBDBE4",
              borderWidth: "1px !important",
            },
            "&:hover fieldset": {
              borderColor: errorMessage ? "#D32F2F" : disabled ? "#CBDBE4" : "#A6ADB3",
            },
            "&.Mui-focused fieldset": {
              borderColor: errorMessage ? "#D32F2F" : "#1A2731 !important",
              boxShadow: errorMessage
                ? "0px 8px 10px rgba(229, 57, 53, 0.1)"
                : "0px 8px 10px rgba(113, 113, 174, 0.1)",
            },
            "&.Mui-disabled fieldset": {
              borderColor: "#CBDBE4 !important",
            },
            "&.Mui-disabled": {
              color: "#A6ADB3",
              backgroundColor: "#F4F6F8",
              pointerEvents: "none",
              opacity: 1,
            },
          },
          "& .MuiSelect-select": {
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
            padding: "0",
          },
        }}
        error={Boolean(errorMessage)}
        disabled={disabled}
      >
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          multiple={multiple}
          IconComponent={CustomArrowIcon} //  Custom Arrow
          sx={{
            color: (multiple ? value.length > 0 : value) ? "#17222B" : "#818B94",
            backgroundColor: "#FFFFFF",
            // More specific override for icon visibility
            "& .MuiSelect-icon": {
              display: "block !important",
              right: 8,
            },
            // Ensure the entire root is clickable
            "& .MuiOutlinedInput-root": {
              pointerEvents: disabled ? "none" : "auto",
            },
          }}
          renderValue={(selected) => {
            if (multiple && Array.isArray(selected) && selected.length === 0) {
              return "Select options";
            }
            if (!multiple && !selected) {
              return "Select an option";
            }
     if (multiple) {
              return (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4,  
                        maxHeight: "108px", // 3 rows × (32px height + 4px gap) = 108px
                        overflowY: "auto",  // Enable vertical scrolling
                        width: "120%",  
                        marginRight: "-32px", 
                        }}
                   >
                  {selected.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      onDelete={disabled ? undefined : handleDelete(item)}
                      deleteIcon={
                        <img
                          src={CloseCircle}
                          alt="Close"
                          style={{ width: 16, height: 16 }}
                        />
                      }
                      onMouseDown={(event) => event.stopPropagation()}
                      sx={{
                        height: 32,
                        border: "1px solid #CBDBE4",
                        backgroundColor: "#FFFFFF",
                        color: "#17222B",
                        "& .MuiChip-deleteIcon": {
                          display: disabled ? "none" : "block",
                        },
                      }}
                    />
                  ))}
                </div>
              );
            }       
            return selected; // Single-select
          }}
        >
          <MenuItem value="" disabled>
         {multiple ? "Select options" : "Select an option"}
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        {errorMessage && (
          <FormHelperText
            sx={{
              color: "#E53935",
              backgroundColor: "white",
              width: "240px",
              minHeight: "29px",
              borderBottomRightRadius: "8px",
              borderBottomLeftRadius: "8px",
              padding: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              boxSizing: "border-box",
              margin: 0,
            }}
          >
            {errorMessage}
          </FormHelperText>
        )}
      </FormControl>
    </div>
  );
};

export default CustomDropdown;
