import React, { memo } from "react";

const AspectRatioWrapper = memo(({ children, className = "" }) => {
    // Using React.memo to prevent unnecessary re-renders if the props have not changed.
    return (
        <div className={className}>
            {children}
        </div>
    );
});

export default AspectRatioWrapper;
