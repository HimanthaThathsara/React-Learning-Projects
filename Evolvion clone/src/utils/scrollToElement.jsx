export const scrollToElement = (elementId, offset = 0) => {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
        // Calculate the position where you want to scroll (default offset = 0)
        const targetPosition = targetElement.offsetTop + offset;

        window.scroll({
            top: targetPosition,
            behavior: "smooth",
        });
    }
};
