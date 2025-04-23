import { useState, useRef } from "react";
import {
    FormControl,
    FormHelperText,
    InputAdornment,
    TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
// Replace these with your actual icon paths or use MUI icons
import CalendarIconActive from "../../assets/icons/calendar-active.svg";
import CalendarIconDisable from "../../assets/icons/calendar-disable.svg";

const CustomDateRangePicker = ({ label, errorMessage, disabled, required }) => {
    const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
    const [open, setOpen] = useState(false);
    const [isSelectingStart, setIsSelectingStart] = useState(true);
    const textFieldRef = useRef(null);

    const handleDateChange = (newValue) => {
        if (!newValue) return; // Prevent null selection
    
        setSelectedDateRange((prev) => {
            if (isSelectingStart) {
                return [newValue, prev[1]]; // Set start date, keep end date
            } else {
                if (prev[0] && dayjs(newValue).isBefore(prev[0])) {
                    return prev; // Prevent selecting end date before start
                }
                return [prev[0], newValue]; // Set end date
            }
        });
    
        if (isSelectingStart) {
            setIsSelectingStart(false); // Switch to selecting end date
        } else {
            setIsSelectingStart(true); // Reset after selecting both dates
            setTimeout(() => setOpen(false), 100); // Close after final selection
        }
    };
    

    const handleToggle = (event) => {
        event.stopPropagation();
        if (!disabled) {
            setOpen((prev) => !prev); // Toggle open state
        }
    };

    const handleClose = () => {
        if (!selectedDateRange[1]) {
            setOpen(true); // Keep open if second date isn’t selected
        } else {
            setOpen(false);
        }
    };

    const formatDateRange = () => {
        const [start, end] = selectedDateRange;
        const startStr = start ? dayjs(start).format("DD/MM/YYYY") : "DD/MM/YYYY";
        const endStr = end ? dayjs(end).format("DD/MM/YYYY") : "DD/MM/YYYY";
        return `${startStr} - ${endStr}`;
    };

    return (
        <div className="flex flex-col">
            <label
                className="mb-1 flex items-center gap-0.5"
                style={{
                    color: disabled ? "#9CA3AF" : "#737373",
                    fontFamily: "Proxima Nova, sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    lineHeight: "140%",
                    display: "flex",
                    marginBottom: "4px",
                }}
            >
                {label} {required && <span style={{ color: "#E53935" }}>*</span>}
            </label>

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
                            value={formatDateRange()}
                            disabled={disabled}
                            InputProps={{
                                readOnly: true,
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
                                            onClick={handleToggle}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                "& .MuiInputBase-root": {
                                    pointerEvents: disabled ? "none" : "auto",
                                },
                                "& .MuiInputBase-input": {
                                    fontSize: "13px", // Reduce font size here
                                    padding: "8px 8px",
                                    // "&::placeholder": {
                                    //     fontSize: "10px", // Adjust placeholder font size
                                    //     color: "#A6ADB3", // Optional: Set a lighter color for placeholder
                                    // },
                                },
                            }}
                        />
                    </div>
                    <DatePicker
                        value={isSelectingStart ? selectedDateRange[0] : selectedDateRange[1]}
                        onChange={handleDateChange}
                        open={open}
                        onClose={handleClose}
                        format="DD/MM/YYYY"
                        minDate={isSelectingStart ? undefined : selectedDateRange[0]} // Restrict end date to be after start
                        slotProps={{
                            textField: { style: { display: "none" } },
                            popper: {
                                anchorEl: textFieldRef.current,
                                placement: "bottom-start",
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

export default CustomDateRangePicker;