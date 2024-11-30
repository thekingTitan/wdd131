// Get references to the footer paragraphs
const copyrightElement = document.getElementById('copyright');
const lastModifiedElement = document.getElementById('last-modified');

// Dynamically set the current year in the copyright section
const currentYear = new Date().getFullYear();
copyrightElement.textContent = `© ${currentYear} 🌴Emmanuel Igwe 🌴 Nigeria`;

// Dynamically set the last modified date of the document
const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate}`;


document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("header nav");
  
    // Toggle the navigation menu visibility on click
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("hidden");
    });
  });
  
