import React from "react";
import {
  Checkbox,
  FormHelperText,
  Box,
  Typography,
} from "@mui/material";

// In CustomCheckboxField.jsx
const CustomCheckboxField = ({
  name,
  label,
  description,
  disabled = false,
  checked,
  onChange,
  onBlur,
  hasError = false,
  error = "",
  inputClassName = "",
  labelClassName = "",
  sx={}
}) => {

  return (
    <Box
      sx={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
        borderRadius: "8px",
        transition: "background-color 0.2s ease-in-out",
        opacity: disabled ? 0.7 : 1,
      }}
    >
      <Checkbox
        name={name}
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        disableRipple
        className={inputClassName}
        sx={{
          color: disabled ? "#A6ADB3" : checked ? "#17222B" : "#818B94",
          "&.Mui-checked": { color: "#17222B" },
          "&.Mui-disabled": { color: "#A6ADB3" },
          width: "16px",
          height: "16px",
          borderRadius: "4px",
          ...sx
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          alignItems: "flex-start",
          marginTop: description ? "25px" : "",
        }}
      >
        {label && (
          <Typography
            className={labelClassName}
            sx={{
              color: disabled ? "#A6ADB3" : "#17222B",
              fontFamily: "Proxima Nova, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "140%",
            }}
          >
            {label}
          </Typography>
        )}

        {/* Optional Description */}
        {description && (
          <FormHelperText
            sx={{
              color: disabled ? "#A6ADB3" : "#818B94",
              margin: 0,
              fontFamily: "Proxima Nova, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "140%",
            }}
          >
            {description}
          </FormHelperText>
        )}

        {/* Optional Error Message */}
        {hasError && error && (
          <FormHelperText sx={{ color: "#EC221F", margin: 0 }}>
            {error}
          </FormHelperText>
        )}
      </Box>
    </Box>
  );
};

export default CustomCheckboxField;

