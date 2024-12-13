const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Oakland California Temple",
        location: "Oakland, California, United State",
        dedicated: "17–19 November 1964",
        area: 94602-2535,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/oakland-california-temple/oakland-california-temple-2654-main.jpg"
    },
    {
        templeName: "Dallas Texas Temple",
        location: "Dallas, Texas, United State",
        dedicated: "19–24 October 1984",
        area: 75230-2227,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240-main.jpg"
    },
    {
        templeName: "Abidjan Ivory Coast Temple",
        location: "Abidjan, Cote d'Ivoire",
        dedicated: "25 May 2025",
        area: 30120-2227,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-1108-main.jpg"
    },

      
      
    // Add more temple objects here...
  ];
  
  // On DOM Content Loaded
  document.addEventListener("DOMContentLoaded", () => {
    const imagesSection = document.querySelector(".images");
  
    // Function to Display Temples
    function displayTemples(temples) {
      imagesSection.innerHTML = ""; // Clear existing content
      temples.forEach((temple) => {
        // Create a container div for each temple
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");
  
        // Image with lazy loading
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = `${temple.templeName} Temple`;
        img.loading = "lazy";
  
        // Temple details
        const title = document.createElement("h3");
        title.textContent = temple.templeName;
  
        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;
  
        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq. ft.`;
  
        // Append elements to the templeCard
        templeCard.appendChild(img);
        templeCard.appendChild(title);
        templeCard.appendChild(location);
        templeCard.appendChild(dedicated);
        templeCard.appendChild(area);
  
        // Append templeCard to the section
        imagesSection.appendChild(templeCard);
      });
    }
  
    // Display all temples by default
    displayTemples(temples);
  
    // Filter Functions
    function filterTemples(criteria) {
      switch (criteria) {
        case "old":
          return temples.filter(
            (temple) => new Date(temple.dedicated).getFullYear() < 1900
          );
        case "new":
          return temples.filter(
            (temple) => new Date(temple.dedicated).getFullYear() > 2000
          );
        case "large":
          return temples.filter((temple) => temple.area > 90000);
        case "small":
          return temples.filter((temple) => temple.area < 10000);
        default:
          return temples;
      }
    }
  
    // Navigation Menu Event Listeners
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const criteria = link.textContent.toLowerCase(); // Get filter criteria from link text
        displayTemples(filterTemples(criteria));
      });
    });
  
    // Footer Updates
    const copyrightElement = document.getElementById("copyright");
    const lastModifiedElement = document.getElementById("last-modified");
  
    const currentYear = new Date().getFullYear();
    copyrightElement.textContent = `© ${currentYear} Emmanuel Igwe`;
  
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate}`;
  });
  