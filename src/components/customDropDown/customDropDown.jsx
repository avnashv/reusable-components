import { useState, useRef } from "react";
import {
  MenuItem,
  Select,
  FormControl,
  FormHelperText,
  Chip,
} from "@mui/material";
import ArrowIconActive from "../../assets/icons/arrow-circle-down-active.svg";
import ArrowIconDisable from "../../assets/icons/arrow-circle-down-disable.svg";
import CloseCircle from "../../assets/icons/close-circle.svg";

const CustomDropdown = ({
  label,
  options,
  errorMessage,
  disabled,
  required,
  value = "", // Use value 
  multiple = false,
  onChange,
  placeHolder,
  name,
  width = "240px",
}) => {
  const [dropUp, setDropUp] = useState(false);
  const selectRef = useRef(null);

  const handleChange = (event) => {
    // const newValue = event.target.value;
    if (onChange) {
      onChange(event); // Directly pass the event to handleChange
    }
  };

  const handleDelete = (itemToDelete) => (event) => {
    event.stopPropagation();
    const newValue = Array.isArray(value) ? value.filter((item) => item !== itemToDelete) : [];
    if (onChange) {
      onChange({
        target: {
          value: newValue,
        },
      });
    }
  };

  const CustomArrowIcon = () => (
    <img
      src={disabled ? ArrowIconDisable : ArrowIconActive}
      alt="Dropdown Icon"
      style={{ width: 16, height: 16 }}
    />
  );

  // Handling Dropdown for Up and Downside without Overlaps
  const handleOpen = () => {
    if (selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
  
      // You can adjust the 240 to whatever your dropdown height is
      const dropdownHeight = 240;
      setDropUp(spaceBelow < dropdownHeight && spaceAbove > dropdownHeight);
    }
  };

  return (
    <div
      id="dropdown-container"
      style={{ position: "relative", display: "flex", flexDirection: "column", width: width, }}
    >
      {/* Label */}
      {label && (
        <label
          style={{
            fontFamily: "Proxima Nova, sans-serif",
            fontWeight: 700,
            fontSize: "11px",
            lineHeight: "140%",
            letterSpacing: "0%",
            color: disabled ? "#9CA3AF" : "#737373",
            marginBottom: "4px",
          }}
        >
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}

      <FormControl
        sx={{
          backgroundColor: errorMessage ? "transparent" : disabled ? "#F4F6F8" : "white",
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            transition: "border 0.3s ease",
            width: width,
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
          name={name}
          value={value}
          ref={selectRef}
          onOpen={handleOpen}
          onChange={handleChange}
          displayEmpty
          multiple={multiple}
          IconComponent={CustomArrowIcon}
          MenuProps={{
            disablePortal: false,
            anchorOrigin: {
              vertical: dropUp ? "top" : "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: dropUp ? "bottom" : "top",
              horizontal: "left",
            },
            PaperProps: {
              style: {
                marginTop: 8, // Space between select box and dropdown
                maxHeight: "240px",
                overflowY: "auto",
              },
            },
            PopperProps: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, 8], // Ensures dropdown appears with 8px gap
                  },
                },
                {
                  name: "preventOverflow",
                  options: {
                    altAxis: true,
                    tether: true,
                  },
                },
                {
                  name: "flip",
                  enabled: true,
                  options: {
                    fallbackPlacements: ["top", "bottom"],
                    padding: 8,
                  },
                },
              ],
            },
          }}
          sx={{
            color: multiple
              ? value.length > 0
                ? "#17222B"
                : "#818B94"
              : value
              ? "#17222B"
              : "#818B94",
            backgroundColor: "#FFFFFF",
            "& .MuiSelect-icon": {
              display: "block !important",
              right: 8,
            },
          }}
          renderValue={(selected) => {
            if (multiple && Array.isArray(selected) && selected.length === 0) {
              return placeHolder;
            }
            if (!multiple && !selected) {
              return placeHolder;
            }

            if (multiple) {
              return (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 4,
                    maxHeight: "108px",
                    overflowY: "auto",
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

            const selectedOption =
              options.find((opt) =>
                typeof opt === "object" ? opt.name === selected : opt === selected
              ) || selected;

            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Proxima Nova, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "140%",
                    letterSpacing: "0%",
                    verticalAlign: "middle",
                    color: "#17222B",
                  }}
                >
                  {typeof selectedOption === "object"
                    ? selectedOption.name
                    : selectedOption}
                </span>
                {typeof selectedOption === "object" &&
                  selectedOption.count !== undefined && (
                    <span
                      style={{
                        background: "#009CDC",
                        color: "white",
                        width: 50,
                        height: 22,
                        gap: 8,
                        borderRadius: 999,
                        padding: "4px 8px",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {selectedOption.count.toLocaleString()}
                    </span>
                  )}
              </div>
            );
          }}
        >
          <MenuItem value="" disabled>
            {placeHolder}
          </MenuItem>
          {options.map((option) => (
            <MenuItem
              key={typeof option === "object" ? option.name : option}
              value={typeof option === "object" ? option.name : option}
              sx={{
                height: "48px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <span>{typeof option === "object" ? option.name : option}</span>
                {typeof option === "object" && option.count !== undefined && (
                  <span style={{ fontWeight: "bold" }}>
                    {option.count.toLocaleString()}
                  </span>
                )}
              </div>
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
