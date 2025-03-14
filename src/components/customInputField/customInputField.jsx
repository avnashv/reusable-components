import React, { useState } from "react";
import { TextField, Box, Typography } from "@mui/material";

const CustomInputField = ({
    state = "default",
    valueType = "default",
    value = "Value",
    hasLabel = true,
    label = "Label",
    hasDescription = false,
    description = "Description",
    hasError = false,
    error = "Error Message",
    showAsterisk = true,
    onChange,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    // **Handle Input States Styling**
    const getStyles = () => {
        switch (state) {
            case "disabled":
                return {
                    backgroundColor: "#F5F5F5",
                    color: "#A0A0A0",
                    cursor: "not-allowed",
                    border: "1px solid #D3D3D3",
                };
            case "non-editable":
                return {
                    backgroundColor: "#E0E0E0",
                    color: "#757575",
                    pointerEvents: "none",
                    border: "1px solid #BDBDBD",
                };
            case "error":
                return {
                    border: "1px solid #EF4845",
                    color: "#E53935",
                };
            case "hover":
                return {
                    border: "1px solid #009CDC",
                };
            case "active":
                return {
                    border: "1px solid #0077B6",
                };
            default:
                return {
                    border: "1px solid #CCCCCC",
                };
        }
    };

    return (
        <Box sx={{ width: "240px", height: "70px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {/* Label */}
            {hasLabel && (
                <Typography
                    variant="body1"
                    sx={{ width: "auto", height: "22px", color: "#17222B" }}
                >
                    {label} {showAsterisk && <span style={{ color: "red" }}>*</span>}
                </Typography>
            )}

            {/* Input Field */}
            <TextField
                variant="outlined" // Ensures default OutlinedInput structure
                value={value}
                onChange={onChange}
                disabled={state === "disabled"}
                InputProps={{
                    readOnly: state === "non-editable",
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                sx={{
                    width: "240px", // Match default width
                    height: "40px", // Ensure proper height
                    borderRadius: "8px", // Default MUI rounded corners

                    // Remove default OutlinedInput border
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "none", // ❌ Removes MUI border
                    },

                    "& .MuiOutlinedInput-root": {
                        ...getStyles(),
                        transition: "border 0.3s ease",
                        borderRadius: "8px", // ✅ Ensures rounded corners match
                        color: state === "disabled" ? "#818B94" : "#17222B", // Change text color
                        backgroundColor: state === "disabled" ? "#F2F6F8" : "#FFFFFF", // Change background color
                        border: `1px solid ${hasError ? "#EF4845" : "#CBDBE4"}`, // ✅ Adds a new border to match MUI
                        display: "flex",
                        alignItems: "center", // ✅ Ensures vertical alignment

                        "&:hover": state !== "disabled" && { border: "1px solid #A6ADB3" },
                        "&.Mui-focused": state !== "disabled" && { border: "1px solid #1A2731" },
                    },

                    "& .MuiInputBase-input": {
                        padding: "10px 14px", // ✅ Matches MUI default input padding
                        fontSize: "16px", // ✅ Ensures consistent font size
                    },
                }}
            />

            {/* Description */}
            {hasDescription && (
                <Typography variant="caption" sx={{ color: "#666" }}>
                    {description}
                </Typography>
            )}

            {/* Error Message */}
            {hasError && (
                <Typography variant="caption" sx={{ color: "#EC221F" }}>
                    {error}
                </Typography>
            )}
        </Box>
    );
};

export default CustomInputField;
