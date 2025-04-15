import React, { useState } from "react";
import { Checkbox, FormHelperText, Box, Typography } from "@mui/material";

// In CustomCheckboxField.jsx
const CustomCheckboxField = ({
    label,
    description,
    disabled = false,
    checked,
    onChange,
}) => {
    const [hover, setHover] = useState(false);

    return (
        <Box
            sx={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                borderRadius: "8px",
                backgroundColor: hover ? "#F4F6F8" : "transparent",
                transition: "background-color 0.2s ease-in-out",
                opacity: disabled ? 0.7 : 1,
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Checkbox
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                disableRipple
                sx={{
                    color: disabled ? "#A6ADB3" : checked ? "#17222B" : "#818B94",
                    "&.Mui-checked": { color: "#17222B" },
                    "&.Mui-disabled": { color: "#A6ADB3" },
                    width: "16px",
                    height: "16px",
                    borderRadius: "4px",
                }}
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "flex-start", marginTop: description ? "25px" : "" }}>
                {label && (
                    <Typography
                        sx={{
                            color: disabled ? "#A6ADB3" : "#17222B",
                            fontFamily: 'Proxima Nova, sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '140%',
                        }}
                    >
                        {label}
                    </Typography>
                )}

                {description && (
                    <FormHelperText
                        sx={{
                            color: disabled ? "#A6ADB3" : "#818B94",
                            margin: 0,
                            fontFamily: 'Proxima Nova, sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '140%',
                        }}
                    >
                        {description}
                    </FormHelperText>
                )}
            </Box>
        </Box>
    );
};

export default CustomCheckboxField;

