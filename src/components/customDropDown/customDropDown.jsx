import { useState } from "react";
import { MenuItem, Select, FormControl, FormHelperText } from "@mui/material";
import ArrowIconActive from "../../assets/icons/arrow-circle-down-active.svg";
import ArrowIconDisable from "../../assets/icons/arrow-circle-down-disable.svg";

const CustomDropdown = ({ label, options, errorMessage, disabled, required, initialValue = "" }) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const CustomArrowIcon = () => <img src={disabled ? ArrowIconDisable : ArrowIconActive} alt="Dropdown Icon" style={{ width: 16, height: 16 }} />;

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
                    backgroundColor: errorMessage ? "#FDE9E9" : disabled ? "#F4F6F8" : "white", // Light red bg when error
                    borderRadius: "12px",
                    "& .MuiOutlinedInput-root": {
                        width: "240px",
                        height: "40px",
                        display: "flex",
                        padding: "8px 12px",
                        alignItems: "center",

                        "& fieldset": {
                            borderColor: errorMessage ? "#E53935" : disabled ? "#CBDBE4" : "#CBDBE4", // Red border on error
                        },
                        "&:hover fieldset": {
                            borderColor: errorMessage ? "#D32F2F" : disabled ? "#CBDBE4" : "#A6ADB3", // Darker red on hover
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: errorMessage ? "#D32F2F" : "#1A2731 !important",
                            borderWidth: "1px !important",
                            boxShadow: errorMessage ? "0px 8px 10px rgba(229, 57, 53, 0.1)" : "0px 8px 10px rgba(113, 113, 174, 0.1)",
                        },
                        "&.Mui-disabled": {
                            borderColor: "#CBDBE4 !important",
                            color: "#A6ADB3",
                            backgroundColor: "#F4F6F8",
                            pointerEvents: "none",
                            opacity: 1, // Keep text visible
                        },
                    },
                }}
                error={Boolean(errorMessage)}
                disabled={disabled}
            >
                <Select
                    value={value}
                    onChange={handleChange}
                    displayEmpty
                    IconComponent={CustomArrowIcon} // ✅ Custom Arrow
                    sx={{
                        color: value ? "#17222B" : "#818B94",
                        backgroundColor: "#FFFFFF",
                    }}
                >
                    <MenuItem value="" disabled>
                        Select an option
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
                            backgroundColor: "#FDE9E9",
                            width: "240px", // ✅ Matches the Select width
                            minHeight: "29px", // ✅ Ensures proper height while avoiding overflow
                            borderBottomRightRadius: "8px",
                            borderBottomLeftRadius: "8px",
                            padding: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start", // Aligns text properly
                            boxSizing: "border-box", // ✅ Prevents extra space from padding
                            margin: 0, // ✅ Removes any unwanted space
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
