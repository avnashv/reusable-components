import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormHelperText, Box, Typography } from "@mui/material";

const CustomCheckboxField = ({
    label = "Label",
    description = "Description",
    disabled = false,
    defaultChecked = false,
}) => {
    const [checked, setChecked] = useState(defaultChecked);
    const [hover, setHover] = useState(false);

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center", // Align checkbox & text in a row
                width: "240px",
                height: "44px",
                borderRadius: "8px",
                backgroundColor: hover ? "#F4F6F8" : "transparent",
                transition: "background-color 0.2s ease-in-out",
                opacity: disabled ? 0.7 : 1,
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* Checkbox */}
            <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                disabled={disabled}
                disableRipple
                sx={{
                    color: disabled ? "#A6ADB3" : checked ? "#17222B" : "#818B94",
                    "&.Mui-checked": { color: "#17222B" },
                    "&.Mui-disabled": { color: "#A6ADB3" },
                }}
            />

            {/* Label + Description in a Column */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "flex-start", marginTop: "20px" }}>
                <Typography
                    sx={{
                        color: disabled ? "#A6ADB3" : "#17222B",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "20px",
                    }}
                >
                    {label}
                </Typography>
                <FormHelperText
                    sx={{
                        color: disabled ? "#A6ADB3" : "#818B94",
                        fontSize: "14px",
                        margin: 0,
                        lineHeight: "16px",
                    }}
                >
                    {description}
                </FormHelperText>
            </Box>
        </Box>
    );
};

export default CustomCheckboxField;
