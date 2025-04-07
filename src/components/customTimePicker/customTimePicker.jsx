import { useState, useRef } from "react";
import {
    FormControl,
    FormHelperText,
    InputAdornment,
    TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import ClockIconActive from "../../assets/icons/clock-icon-enable.svg";
import ClockIconDisable from "../../assets/icons/clock-icon-disable.svg";

const CustomTimePicker = ({ label, errorMessage, disabled, required, value }) => {
    const [selectedTime, setSelectedTime] = useState(value || null);
    const [open, setOpen] = useState(false);
    const textFieldRef = useRef(null);

    const handleTimeChange = (newValue) => {
        if (!newValue) return; // Prevents Null Selections
        setSelectedTime(newValue); // Update state without closing
    };

    const handleAccept = (newValue) => {
        setSelectedTime(newValue); // Finalize value on accept
        setOpen(false);
    };

    const handleToggle = (event) => {
        event.stopPropagation();
        if (!disabled) {
            setOpen((prev) => !prev);
        }
    };

    const handleClose = () => {
        setOpen(false); // Close without saving if dismissed
    };

    const formatTime = () => {
        return selectedTime ? selectedTime.format("hh:mm A") : "Select time";
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
                    display: "flex",
                    gap: "2px",
                }}
            >
                {label} {required && <span style={{ color: "#E53935" }}>*</span>}
            </label>

            {/* Time Picker Field */}
            <FormControl
                sx={{
                    "& .MuiOutlinedInput-root": {
                        transition: "border 0.3s ease",
                        width: "240px",
                        height: "40px",
                        padding: "8px 12px",
                        alignItems: "center",
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
                            opacity: 1,
                        },
                    },
                }}
                error={Boolean(errorMessage)}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div
                        onClick={handleToggle}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            cursor: disabled ? "not-allowed" : "pointer",
                            width: "240px",
                        }}
                    >
                        <TextField
                            inputRef={textFieldRef}
                            value={formatTime()}
                            disabled={disabled}
                            InputProps={{
                                readOnly: true,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <img
                                            src={disabled ? ClockIconDisable : ClockIconActive}
                                            alt="Clock"
                                            style={{
                                                width: "16px",
                                                height: "16px",
                                                cursor: disabled ? "not-allowed" : "pointer",
                                            }}
                                            onClick={handleToggle}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                "& .MuiInputBase-root": {
                                    pointerEvents: disabled ? "none" : "auto",
                                },
                            }}
                        />
                    </div>
                    {/* For Analog Clock using MobileTimePicker */}
                    <MobileTimePicker
                        value={selectedTime}
                        onChange={handleTimeChange}
                        onAccept={handleAccept}
                        onClose={handleClose}
                        open={open}
                        format="hh:mm A"
                        slotProps={{
                            textField: { style: { display: "none" } },
                            popper: {
                                anchorEl: textFieldRef.current,
                                placement: "bottom-start",
                                sx: {
                                    "& .MuiTimeClock-root": {
                                        overflowY: "hidden", // Prevent scrolling in clock
                                    },
                                },
                                modifiers: [
                                    {
                                        name: "flip",
                                        enabled: false,
                                    },
                                    {
                                        name: "preventOverflow",
                                        enabled: true,
                                        options: {
                                            boundariesElement: "viewport",
                                        },
                                    },
                                    {
                                        name: "offset",
                                        enabled: true,
                                        options: {
                                            offset: [0, 4],
                                        },
                                    },
                                ],
                            },
                        }}
                    />
                </LocalizationProvider>

                {/* Error Message */}
                {errorMessage && (
                    <FormHelperText
                        sx={{
                            color: "#E53935",
                            backgroundColor: "transparent",
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

export default CustomTimePicker;