import React from "react";
import { APP_NAME } from "@/lib/config";
import Image from "next/image";

const CustomImage = ({
    src = "",
    width = 100,
    height = 100,
    onClick,
    alt = APP_NAME,
    title = APP_NAME,
    priority = false,
    className = "",
    placeholder,
    blurDataURL, // Placeholder for blur data URL, optional
    ...other
}) => {
    const imageProps = {
        src,
        width,
        height,
        title,
        alt,
        priority,
        className,
        onClick,
        unoptimized: true,
        ...other,
    };

    // Conditionally add placeholder and blurDataURL if they are provided
    if (placeholder) {
        imageProps.placeholder = placeholder;
    }
    if (blurDataURL) {
        imageProps.blurDataURL = blurDataURL;
    }

    return <Image {...imageProps} />;
};

export default CustomImage;
