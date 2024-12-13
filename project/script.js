// Example JavaScript for the Site Plan
document.addEventListener("DOMContentLoaded", () => {
    console.log("Site Plan Page Loaded");

    // Example: Highlight the 'Scenarios' section when hovered
    const scenariosSection = document.querySelector("#scenarios");

    scenariosSection.addEventListener("mouseover", () => {
        scenariosSection.style.backgroundColor = "#e0f7e4"; // Light green highlight
    });

    scenariosSection.addEventListener("mouseout", () => {
        scenariosSection.style.backgroundColor = ""; // Reset background color
    });
});
