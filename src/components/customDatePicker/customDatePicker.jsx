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
                        transition: "border 0.3s ease",
                        width: "240px",
                        height: "40px",
                        display: "flex",
                        padding: "8px 12px",
                        alignItems: "center",
                        borderRadius: "8px",
                        // backgroundColor: errorMessage ? "#FFFFFF" : disabled ? "#F4F6F8" : "white",
                        // "& fieldset": {
                        //     borderColor: errorMessage ? "#E53935" : "#CBDBE4",
                        // },
                        // "&:hover fieldset": {
                        //     borderColor: errorMessage ? "#D32F2F" : "#A6ADB3",
                        // },
                        // "&.Mui-focused fieldset, &:focus-within fieldset": {
                        //     borderColor: "#1A2731 !important",
                        //     borderWidth: "1px",
                        // },
                        // "&.Mui-disabled": {
                        //     borderColor: "1px solid#CBDBE4 !important",
                        //     color: "#A6ADB3",
                        //     backgroundColor: "#F4F6F8",
                        //     pointerEvents: "none",
                        //     opacity: 1, // Keep text visible
                        // },
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
                            // borderWidth: "1px !important"
                        },
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
                        // slots={{ openPickerIcon: () => null }} // Prevents MUI from rendering the default calendar icon
                        
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

export default CustomDatePicker;


// import { useState, useRef } from "react";
// import CalendarIconActive from "../../assets/icons/calendar-active.svg";
// import CalendarIconDisable from "../../assets/icons/calendar-disable.svg";

// const CustomDatePicker = ({ label, errorMessage, disabled, required }) => {
//     const [selectedDate, setSelectedDate] = useState("");
//     const inputRef = useRef(null);

//     const handleDateChange = (event) => {
//         setSelectedDate(event.target.value);
//     };

//     return (
//         <div className="flex flex-col">
//             {/* Label */}
//             <label
//                 className="mb-1 flex items-center gap-0.5"
//                 style={{
//                     color: disabled ? "#818B94" : "#17222B",
//                     fontFamily: "Proxima Nova, sans-serif",
//                     fontWeight: 400,
//                     fontSize: "16px",
//                     lineHeight: "140%",
//                     letterSpacing: "0%",
//                     display: "flex",
//                     gap: "2px",
//                 }}
//             >
//                 {label} {required && <span style={{ color: "#E53935" }}>*</span>}
//             </label>

//             {/* Date Picker Field */}
//             <div
//                 className="flex items-center justify-between relative"
//                 style={{
//                     width: "240px",
//                     height: "40px",
//                     padding: "8px 12px",
//                     borderRadius: "8px",
//                     border: `1px solid ${errorMessage ? "#E53935" : "#CBDBE4"}`,
//                     backgroundColor: disabled ? "#F4F6F8" : "#FFFFFF",
//                     cursor: disabled ? "not-allowed" : "pointer",
//                     opacity: disabled ? 0.6 : 1,
//                     position: "relative",
//                 }}
//                 onClick={() => !disabled && inputRef.current?.showPicker()}
//             >
//                 {/* Custom Placeholder (Only show if no date is selected) */}
//                 {!selectedDate && (
//                     <span
//                         style={{
//                             position: "absolute",
//                             left: "12px",
//                             color: "#A6ADB3",
//                             fontSize: "14px",
//                         }}
//                     >
//                         Select a date
//                     </span>
//                 )}

//                 <input
//                     ref={inputRef}
//                     type="date"
//                     value={selectedDate}
//                     onChange={handleDateChange}
//                     disabled={disabled}
//                     style={{
//                         width: "100%",
//                         border: "none",
//                         outline: "none",
//                         background: "transparent",
//                         fontSize: "14px",
//                         cursor: disabled ? "not-allowed" : "pointer",
//                         color: selectedDate ? "#17222B" : "transparent", // Show date when selected
//                         appearance: "none",
//                         WebkitAppearance: "none",
//                         MozAppearance: "none",
//                         position: "relative",
//                     }}
//                 />
//                 <style>
//                     {`
//                     /* Hide default date placeholder */
//                     input[type="date"]::-webkit-datetime-edit-fields-wrapper {
//                         color: transparent;
//                     }
//                     input[type="date"]::-webkit-datetime-edit-text {
//                         color: transparent;
//                     }
//                     input[type="date"]::-webkit-datetime-edit-month-field,
//                     input[type="date"]::-webkit-datetime-edit-day-field,
//                     input[type="date"]::-webkit-datetime-edit-year-field {
//                         color: ${selectedDate ? "#17222B" : "transparent"};
//                     }

//                     /* Ensure selected date is visible */
//                     input[type="date"]:focus,
//                     input[type="date"]:not(:placeholder-shown) {
//                         color: #17222B !important;
//                     }

//                     /* Hide default calendar icon */
//                     input[type="date"]::-webkit-calendar-picker-indicator {
//                         display: none;
//                     }
//                     `}
//                 </style>
//                 <img
//                     src={disabled ? CalendarIconDisable : CalendarIconActive}
//                     alt="Calendar"
//                     style={{
//                         width: "16px",
//                         height: "16px",
//                         cursor: disabled ? "not-allowed" : "pointer",
//                     }}
//                 />
//             </div>

//             {/* Error Message */}
//             {errorMessage && (
//                 <div
//                     style={{
//                         color: "#E53935",
//                         backgroundColor: "#FDE9E9",
//                         width: "240px",
//                         minHeight: "29px",
//                         borderBottomRightRadius: "8px",
//                         borderBottomLeftRadius: "8px",
//                         padding: "6px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "flex-start",
//                         boxSizing: "border-box",
//                         margin: 0,
//                         fontSize: "12px",
//                     }}
//                 >
//                     {errorMessage}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CustomDatePicker;





