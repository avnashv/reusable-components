import { useState, useEffect, useCallback } from "react";
import { TextField, InputAdornment, CircularProgress, IconButton } from "@mui/material";
import SearchIcon from "../../assets/icons/search-icon.svg";
const CustomSearch = ({
    placeHolder,
    width = "264px",
    value,
    onChange,
    onSearch,         // NEW: Parent handles search logic
    results = [],     // NEW: Search results from parent
    loading = false   // NEW: Parent controls loading state
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const isActive = isFocused || isHovered;

    const CustomSearchIcon = ({ isActive }) => (
        <img
            src={SearchIcon}
            alt="Search Icon"
            style={{
                width: 16,
                height: 16,
                opacity: isActive ? 1 : 0.5,
                transition: "opacity 0.2s ease-in-out",
            }}
        />
    );

    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };

    const debouncedSearch = useCallback(debounce(onSearch, 500), [onSearch]);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        onChange(e); // lift input to parent
    
        if (inputValue.length >= 3) {
            debouncedSearch(inputValue);
        }
    };
    

    return (
        <div style={{ width }}>
            <TextField
                fullWidth
                variant="outlined"
                placeholder={placeHolder}
                value={value}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        paddingRight: "12px",
                        height: "40px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#CBDBE4",
                    },
                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#009CDC",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #1A2731",
                        boxShadow: "0px 0px 5px rgba(0, 156, 220, 0.3)",
                    },
                    "& .MuiInputBase-input::placeholder": {
                        opacity: 0.5,
                        transition: "color 0.2s ease-in-out",
                    },
                    "& .MuiOutlinedInput-root:hover .MuiInputBase-input::placeholder": {
                        opacity: 1,
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiInputBase-input::placeholder": {
                        opacity: 1,
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton size="small">
                                <CustomSearchIcon isActive={isActive} />
                            </IconButton>
                        </InputAdornment>
                    ),
                    endAdornment: loading ? <CircularProgress size={16} className="text-gray-500" /> : null,
                }}
            />

            {/* {results.length > 0 && (
                <ul className="mt-2 bg-white border rounded-lg shadow-md max-h-40 overflow-y-auto">
                    {results.map((item, index) => (
                        <li key={index} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                            {item.name}
                        </li>
                    ))}
                </ul>
            )} */}
        </div>
    );
};


export default CustomSearch;