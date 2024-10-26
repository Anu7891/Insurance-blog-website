import React from "react";

const CustomButton = ({
    label = "Click Me",
    onClick,
    type = "button",
    disabled = false,
    className = "",
    style = {},
    ...other
}) => {
    

    return (
        <button
            type={type}
            // onClick={handleClick}
            disabled={disabled}
            className={`btnClass ${className}`}
            style={{
                cursor: disabled ? "not-allowed" : "pointer",
                // opacity: disabled ? 0.6 : 1,
                ...style,
            }}
            {...other}
        >
            {label}
        </button>
    );
};

export default CustomButton;


