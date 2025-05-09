import {useState, useRef } from "react";
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
import CalendarIconActive from "../../assets/icons/calendar-active.svg";
import CalendarIconDisable from "../../assets/icons/calendar-disable.svg";

const CustomDatePicker = ({ label, value, onChange, errorMessage, disabled, required }) => {
  const [open, setOpen] = useState(false);
  const textFieldRef = useRef(null);

  const handleDateChange = (newValue) => {
    if (!newValue) {
      onChange(null); // Pass null to parent if no date is selected
      return;
    }
    const formattedDate = newValue.format("DD/MM/YYYY"); // Format as string
    onChange(formattedDate); // Pass formatted date to parent
    setOpen(false); // Close after selection
  };

  const handleToggle = (event) => {
    event.stopPropagation();
    if (!disabled) {
      setOpen((prev) => !prev); // Toggle open state
    }
  };

  const handleClose = () => {
    setOpen(false); // Close the picker
  };

  const formatDate = () => {
    return value || "DD/MM/YYYY"; // Use parent value or placeholder
  };

  return (
    <div className="flex flex-col">
      {/* Label */}
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

      {/* Date Picker Field */}
      <FormControl
        sx={{
          "& .MuiOutlinedInput-root": {
            transition: "border 0.3s ease",
            width: "200px",
            height: "33px",
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
              width: "200px",
            }}
          >
            <TextField
              inputRef={textFieldRef}
              value={formatDate()}
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
              }}
            />
          </div>
          <DatePicker
            value={value ? dayjs(value, "DD/MM/YYYY") : null} // Convert string to Dayjs
            onChange={handleDateChange}
            open={open}
            onClose={handleClose}
            format="DD/MM/YYYY"
            slotProps={{
              textField: { style: { display: "none" } }, // Hide the internal TextField
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

        {/* Error Message */}
        {errorMessage && (
          <FormHelperText
            sx={{
              color: "#E53935",
              backgroundColor: "transparent",
              width: "200px",
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