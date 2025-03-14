import { useState } from "react";
import {
    TextField,
    FormControl,
    FormHelperText,
    InputAdornment,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CalendarIconActive from "../../assets/icons/calendar-active.svg";
import CalendarIconDisable from "../../assets/icons/calendar-disable.svg";
import dayjs from "dayjs";

const CustomDatePicker = ({ label, errorMessage, disabled, required }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (newValue) => {
        setSelectedDate(newValue);
    };

    return (
        <div className="flex flex-col">
            {/* Label */}
            <label
                className="mb-1 flex items-center gap-0.5"
                style={{
                    color: disabled ? "#818B94" : "#17222B",
                    fontFamily: "Proxima Nova, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "140%",
                    letterSpacing: "0%",
                    display: "flex",
                    gap: "2px",
                }}
            >
                {label} {required && <span style={{ color: "#E53935" }}>*</span>}
            </label>

            {/* Date Picker Field */}
            <FormControl
                sx={{
                    "& .MuiOutlinedInput-root": {
                        width: "240px",
                        height: "40px",
                        display: "flex",
                        padding: "8px 12px",
                        alignItems: "center",
                    },
                    backgroundColor: errorMessage ? "#FFFFFF" : disabled ? "#F4F6F8" : "white",
                    borderRadius: "12px",
                    "& fieldset": {
                        borderColor: errorMessage ? "#E53935" : "#CBDBE4",
                    },
                    "&:hover fieldset": {
                        borderColor: errorMessage ? "#D32F2F" : "#A6ADB3",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: errorMessage ? "#D32F2F" : "#1A2731",
                    },
                }}
                error={Boolean(errorMessage)}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        value={selectedDate}
                        onChange={handleDateChange}
                        disabled={disabled}
                        inputFormat="DD/MM/YYYY"
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                fullWidth
                                error={Boolean(errorMessage)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <img
                                                src={disabled ? CalendarIconDisable : CalendarIconActive}
                                                alt="Calendar"
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    cursor: disabled ? "not-allowed" : "pointer",
                                                }}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />
                </LocalizationProvider>

                {/* Error Message */}
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

export default CustomDatePicker;
