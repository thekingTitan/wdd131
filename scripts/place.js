// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
}

// Check if wind chill calculation conditions are met
function displayWindChill() {
    const temp = 10; // Static value for temperature (°C)
    const windSpeed = 5; // Static value for wind speed (km/h)

    const windChillElement = document.getElementById('wind-chill');

    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temp, windSpeed);
        windChillElement.textContent = `${windChill}°C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

// Footer Date Logic
function updateFooterDates() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;
}

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    displayWindChill();
    updateFooterDates();
});
