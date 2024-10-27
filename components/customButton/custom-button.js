import React from "react";
import { THEME_COLOR_BTN } from "@/lib/config";

const CustomButton = ({
    label = "Click Me",
    onClick,
    type = "button",
    disabled = false,
    primaryColor = THEME_COLOR_BTN,  // Default primary color if none is provided
    secondaryColor = "#666666", // Default secondary color if none is provided
    variant = "primary", // "primary" or "secondary" variant
    className = "",
    style = {},
    height = 44,
    ...other
}) => {
    // Determine the background and border color based on variant
    const buttonColor = variant == "secondary" ? secondaryColor : primaryColor;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btnClass ${className}`}
            style={{
                cursor: disabled ? "not-allowed" : "pointer",
                backgroundColor: buttonColor,
                color: "#fff", // Ensures text contrasts with buttonColor
                opacity: disabled ? 0.6 : 1,
                border: `1px solid ${buttonColor}`,
                ...style,
                height: height,
            }}
            {...other}
        >
            {label}
        </button>
    );
};

export default CustomButton;
