import React, { useState } from "react";
import Button from "@mui/material/Button";
import clsx from "clsx";
import AddIcon from "../../assets/icons/add.svg";
import GrayAdd from "../../assets/icons/gray-add.svg";
import BlueAdd from "../../assets/icons/blue-add.svg";
import BlueArrowUp from "../../assets/icons/blue-arrow-up.svg";
import WhiteArrowUp from "../../assets/icons/white-arrow-up.svg";

const buttonStyles = {
    primary: "hover:bg-sky-600 active:bg-sky-700 disabled:bg-sky-300",
    secondary: "hover:border-red-500 active:border-red-500 focus:border-red-500 disabled:border-red-300",
    teritary: "hover:bg-slate-600 active:bg-slate-900 disabled:bg-slate-300",
    icon: "hover:border-[#009CDC] hover:text-white bg-green-500",
    chips: "border border-[#CBDBE4] bg-transparent hover:border-[#009CDC] hover:bg-white",
};

// Define custom colors for each button variant
const buttonColors = {
    primary: "#009CDC",
    secondary: "#CBDBE4", 
    teritary: "#1E293B", // Slate-900 equivalent for tertiary
    icon: "transparent",
    chips: "transparent",
};

// Get the appropriate icon based on the button variant
const getIcon = (variant, isHovered, isClicked, isDisabled, iconImg) => {
    console.log("img", iconImg)
    if (variant === "chips") {
        return isDisabled ? GrayAdd : isHovered || isClicked ? BlueAdd : GrayAdd;
    }

    switch (variant) {
        case "primary":
            return AddIcon;
        case "secondary":
            return BlueArrowUp;
        case "teritary":
            return WhiteArrowUp;
        case "icon":
            return iconImg;
        default:
            return AddIcon;
    }
};

// Custom Button Component
const CustomButton = ({
    text = "Button",
    variant = "primary",
    disabled = false,
    startIcon = true,
    endIcon = true,
    showText = true,
    rounded = "lg",
    iconSize = "40px",
    iconImg,
    onClick,
}) => {
    const isIconButton = variant === "icon";
    const isChipButton = variant === "chips";

    const buttonSize = isIconButton ? `w-[${iconSize}] h-[${iconSize}]` : isChipButton ? "w-[114px] h-[32px]" : "";
    const padding = isChipButton ? "px-4 py-2" : isIconButton ? "p-0" : "px-4 py-2";

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <Button
            onClick={() => {
                setIsClicked(true);
                if (onClick) onClick();
            }}
            disabled={disabled}
            variant="contained"
            disableRipple
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsClicked(false)}

            sx={{
                textTransform: "none", 
                backgroundColor: isIconButton
                    ? "#E6F5FC"
                    : variant === "primary"
                        ? "#009CDC"
                        : variant === "teritary"
                            ? "#253746"
                            :variant === "secondary"
                                ? "#E6F5FC"
                            : "transparent",

                color: isChipButton ? (isHovered || isClicked ? "#009CDC" : "#818B94")
                    : isIconButton ? "#009CDC"
                        : variant === "secondary" ? "#009CDC" : "#fff",
                fontWeight: "bold",
                borderRadius: rounded === "full" ? "9999px" : "12px",
                border: isIconButton
                    ? "1px solid #CBDBE4"
                    : isChipButton
                        ? "1px solid #CBDBE4"
                        : variant === "secondary"
                            ? "1px solid #CBDBE4"
                            : "none",
                width: isIconButton ? iconSize : isChipButton ? "114px" : "auto",
                height: isIconButton ? iconSize : isChipButton ? "32px" : "auto",
                minWidth: isIconButton ? iconSize : "auto",
                minHeight: isIconButton ? iconSize : "auto",
                padding: isIconButton ? "0px" : isChipButton ? "var(--sds-size-space-300) var(--sds-size-space-400)" : "12px 16px",
                gap: "8px",
                boxShadow: "none",
                "&:hover": {
                    backgroundColor: isChipButton ? "#E6F5FC"
                        : isIconButton ? "#E6F5FC"
                            : variant === "primary" ? "#006D9A"
                                : variant === "secondary" ? "#E6F5FC" : "#1A2731",

                    border: isChipButton ? "1px solid #009CDC"
                        : isIconButton ? "1px solid #009CDC"
                            : variant === "secondary" ? "1px solid #009CDC" : "",

                    color: isChipButton || isIconButton ? "#009CDC"
                        : variant === "secondary" ? "#009CDC" : "",
                },

                "&:active": {
                    backgroundColor: isChipButton ? "#FFFFFF"
                        : isIconButton ? "#FFFFFF"
                            : variant === "primary" ? "#009CDC"
                                : variant === "teritary" ? "#253746" : "transparent",

                    border: isIconButton ? "1px solid #009CDC"
                        : variant === "secondary" ? "1px solid #009CDC" : "",

                    color: isChipButton ? "#009CDC"
                        : isIconButton ? "#FFFFFF"
                            : variant === "secondary" ? "#009CDC" : "",
                },

                "&:focus": {
                    border: isChipButton ? "1px solid #009CDC"
                        : isIconButton ? "1px solid #009CDC"
                            : variant === "secondary" ? "1px solid #009CDC" : "",
                    backgroundColor: variant === "secondary" ? "transparent" : "",
                    color: isChipButton ? "#009CDC"
                        : isIconButton ? "#FFFFFF" : variant === "secondary" ? "#009CDC" : "",
                },

                "&.Mui-disabled": {
                    border: isChipButton ? "1px solid #CBDBE4" : variant === "secondary" ? "1px solid #009CDC" : "",
                    backgroundColor: isChipButton || isIconButton
                        ? "transparent"
                        : variant === "primary"
                            ? "#009CDC"
                            : variant === "secondary"
                                ? "transparent"
                                : "#253746",

                    color: isChipButton ? "#818B94" : variant === "secondary" ? "#009CDC" : "white",
                    opacity: 0.5,
                },
            }}

            className={
                clsx(
                    "flex items-center justify-center gap-2 transition-all duration-200",
                    buttonStyles[variant] || buttonStyles["primary"],
                    rounded === "full" ? "rounded-full" : "rounded-lg",
                    buttonSize,
                    padding
                )}
        >
            {/* Start Icon */}
            {
                startIcon && (
                    <img
                        src={getIcon(variant, isHovered, isClicked, disabled, iconImg)} // Default/disabled state
                        alt="Start Icon"
                        className="w-4 h-4"
                    />
                )
            }

            {/* Button Text (optional) */}
            {showText && <span>{text}</span>}

            {/* End Icon */}
            {
                endIcon && (
                    <img
                        src={getIcon(variant, isHovered, isClicked, disabled, iconImg)} // Default/disabled state
                        alt="End Icon"
                        className="w-4 h-4"
                    />
                )
            }
        </Button >
    );
};

export default CustomButton;
