import React, { useState } from "react";
import { TextField, Box, Typography, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const CustomInputField = ({
  state = "default",
  value = "", // Default input value
  hasLabel = true,
  label = "Label",
  hasDescription = false,
  description = "Description",
  hasError = false,
  error = "Error Message",
  showAsterisk = true,
  onChange,
  placeholder = "Enter value",
  multiline = false, // New prop to toggle textarea
  rows = 4, // Default rows for textarea (optional customization)
  minRows = 4, // Minimum rows for textarea
  width = "240px",
  type = "Text",
  isPassword = false, // New prop to toggle password behavior
  helperText=""
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  // **Handle Input Value Changes**
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue); // Updates internal state
    if (onChange) {
      onChange(e); // Calls external handler if provided
    }
  };

  // **Toggle Password Visibility**
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

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

  // Base styles for both input and textarea
  const baseStyles = {
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none", // Remove default MUI border
    },
    "& .MuiOutlinedInput-root": {
      width: width,
      height: multiline ? "80px" : "40px", // Adjust height for textarea
      minWidth: "240px", // Figma min-width
      minHeight: multiline ? "80px" : "auto", // Figma min-height for textarea
      ...getStyles(),
      transition: "border 0.3s ease",
      borderRadius: "8px", // Radius/200 (assuming 8px)
      color: state === "disabled" ? "#818B94" : "#17222B",
      backgroundColor: state === "disabled" ? "#F2F6F8" : "#FFFFFF",
      border: `1px solid ${hasError ? "#EF4845" : "#CBDBE4"}`, // Stroke/Border
      display: "flex",
      alignItems: multiline ? "flex-start" : "center", // Align text at top for textarea
      fontFamily: "Proxima Nova, sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "140%",
      letterSpacing: "0%",

      "&:hover": state !== "disabled" && { border: "1px solid #A6ADB3" },
      "&.Mui-focused": state !== "disabled" && { border: "1px solid #1A2731" },
    },
    "& .MuiInputBase-input": {
      padding: multiline
        ? "12px 16px" // Space/300 (12px) top/bottom, Space/400 (16px) left/right
        : "8px 22px", // Default padding for single-line input
      fontSize: "16px",
      "&::placeholder": {
        color: "#818B94",
        fontFamily: "Proxima Nova, sans-serif",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "140%",
        letterSpacing: "0%",
      },
    },
  };

  return (
    <Box sx={{ width: "240px", height: "auto", display: "flex", flexDirection: "column", gap: "8px" }}>
      {/* Label */}
      {hasLabel && (
        <Typography
          variant="body1"
          sx={{
            width: "auto",
            height: "22px",
            color: "#737373",
            fontFamily: "Proxima Nova, sans-serif",
            fontWeight: 700,
            fontSize: "11px",
            lineHeight: "140%",
            letterSpacing: "0%",
          }}
        >
          {label} {showAsterisk && <span style={{ color: "red" }}>*</span>}
        </Typography>
      )}

      {/* Input Field or Textarea */}
      <TextField
        variant="outlined"
        type={isPassword ? (showPassword ? "text" : "password") : type} // Toggle type for password
        value={inputValue}
        placeholder={placeholder}
        helperText={helperText}
        onChange={handleInputChange}
        disabled={state === "disabled"}
        InputProps={{
          readOnly: state === "non-editable",
          endAdornment: isPassword && (
            <InputAdornment position="end">
              <IconButton
                onClick={handleTogglePasswordVisibility}
                edge="end"
                disabled={state === "disabled"}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        multiline={multiline} // Enable textarea when multiline is true
        rows={multiline ? rows : undefined} // Apply rows only for textarea
        minRows={multiline ? minRows : undefined} // Apply minRows only for textarea
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        sx={baseStyles}
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