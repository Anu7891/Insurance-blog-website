import React from "react";
import { THEME_COLOR_BTN } from "@/lib/config";

const CustomButton = ({
    label = "Click Me",
    onClick,
    type = "button",
    disabled = false,
    primaryColor = THEME_COLOR_BTN,  // Default primary color if none is provided
    className = "",
    style = {},
    height = 44,
    ...other
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btnClass ${className}`}
            style={{
                cursor: disabled ? "not-allowed" : "pointer",
                backgroundColor: primaryColor,
                color: "#fff", // Optional: ensure text contrasts with primaryColor
                opacity: disabled ? 0.6 : 1,
                border: `1px solid ${primaryColor}`,
                ...style,
                height:{height}
            }}
            {...other}
        >
            {label}
        </button>
    );
};

export default CustomButton;
