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
                    backgroundColor: errorMessage ? "#FDE9E9" : disabled ? "#F4F6F8" : "white",
                    "& .MuiOutlinedInput-root": {
                        transition: "border 0.3s ease",
                        width: "240px",
                        height: "40px",
                        display: "flex",
                        padding: "8px 12px",
                        alignItems: "center",
                        borderRadius: "8px",
                        "& fieldset": {
                            borderColor: errorMessage ? "#E53935" : "#CBDBE4",
                            borderWidth: "1px !important"
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
                            borderColor: "#CBDBE4 !important", // ✅ Ensures single border in disabled state
                        },
                        "&.Mui-disabled": {
                            color: "#A6ADB3",
                            backgroundColor: "#F4F6F8",
                            pointerEvents: "none",
                            opacity: 1,
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
