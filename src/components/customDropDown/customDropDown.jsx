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
  value = "",
  multiple = false,
  onChange,
  placeHolder,
  name,
  width = "200px",
}) => {
  const [dropUp, setDropUp] = useState(false);
  const selectRef = useRef(null);

  const handleChange = (event) => {
    const selectedName = event.target.value;
  
    let selectedValue;
  
    if (multiple) {
      const selectedArray = selectedName?.map((name) => {
        const selectedObj = options?.find(
          (opt) => opt?.name === name
        );
        return selectedObj
          ? { ...selectedObj } // Keep all properties intact
          : { name };
      });
      selectedValue = selectedArray;
    } else {
      const selectedObj = options?.find(
        (opt) => opt?.name === selectedName
      );
  
      selectedValue = selectedObj
        ? { ...selectedObj } // Keep all properties intact
        : { name: selectedName };
    }
  
    console.log("Selected Value:", selectedValue); // Log the selected value to console
  
    onChange?.({
      target: {
        name,
        value: selectedValue,
      },
    });
  };

  const handleDelete = (itemToDelete) => (event) => {
    event.stopPropagation();
    const newValue = Array.isArray(value)
      ? value?.filter((item) => item?.name !== itemToDelete?.name)
      : [];
    onChange?.({
      target: {
        name,
        value: newValue,
      },
    });
  };

  const CustomArrowIcon = () => (
    <img
      src={disabled ? ArrowIconDisable : ArrowIconActive}
      alt="Dropdown Icon"
      style={{ width: 14, height: 14 }}
    />
  );

  const handleOpen = () => {
    if (selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      const dropdownHeight = 240;
      setDropUp(spaceBelow < dropdownHeight && spaceAbove > dropdownHeight);
    }
  };

  return (
    <div
      id="dropdown-container"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: width,
      }}
    >
      {label && (
        <label
          style={{
            fontFamily: "Proxima Nova, sans-serif",
            fontWeight: 700,
            fontSize: "11px",
            color: disabled ? "#9CA3AF" : "#737373",
            marginBottom: "4px",
          }}
        >
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}

      <FormControl
        sx={{
          backgroundColor: errorMessage
            ? "transparent"
            : disabled
            ? "#F4F6F8"
            : "white",
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            transition: "border 0.3s ease",
            width: width,
            height: multiple && value.length > 0 ? "auto" : "33px",
            minHeight: "33px",
            display: "flex",
            padding: "8px 12px",
            alignItems: multiple && value.length > 0 ? "flex-start" : "center",
            borderRadius: "8px",
            "& fieldset": {
              borderColor: errorMessage ? "#E53935" : "#CBDBE4",
              borderWidth: "1px !important",
            },
            "&:hover fieldset": {
              borderColor: errorMessage
                ? "#D32F2F"
                : disabled
                ? "#CBDBE4"
                : "#A6ADB3",
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
          value={
            multiple
              ? value?.map((item) => item?.name)
              : value?.name || ""
          }
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
                marginTop: 8,
                maxHeight: "240px",
                overflowY: "auto",
              },
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
                  {value?.map((item) => (
                    <Chip
                      key={item?.name}
                      label={item?.name}
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
                    fontSize: "14px",
                    lineHeight: "140%",
                    color: "#17222B",
                  }}
                >
                  {selected}
                </span>
              </div>
            );
          }}
        >
          <MenuItem value="" disabled>
            {placeHolder}
          </MenuItem>
          {options?.map((option) => {
            const label = option?.name || option;
            return (
              <MenuItem
                key={label}
                value={label}
                sx={{ height: "48px" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span>{label}</span>
                </div>
              </MenuItem>
            );
          })}
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
