// Function to convert image source to WebP format
export const convertToWebP = (src) => {

    if (src) {
        const extensionRegex = /\.(png|jpg|jpeg)$/i;
        if (extensionRegex.test(src)) {
            return src.replace(extensionRegex, ".webp");
        }
    }
    return src;
};

