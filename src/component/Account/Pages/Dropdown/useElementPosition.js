import * as React from "react";

export const useElementPosition = (elementRef) => {
    const [isInUpperHalf, setIsInUpperHalf] = React.useState(false);
    const [isInLowerHalf, setIsInLowerHalf] = React.useState(false);

    const handleScroll = React.useCallback(() => {
        if (!elementRef.current) return;

        const { top, bottom } = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        setIsInUpperHalf(top < windowHeight / 2);
        setIsInLowerHalf(bottom > windowHeight / 2);
    }, [elementRef]);

    React.useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return { isInUpperHalf, isInLowerHalf };
};
