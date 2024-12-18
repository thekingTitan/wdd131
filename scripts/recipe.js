document.addEventListener("DOMContentLoaded", () => {
    const recipeList = document.getElementById("recipe-list");
    const recipeForm = document.getElementById("recipe-form");
    const searchBar = document.getElementById("search-bar");

    const recipes = [
        {
            title: "Chocolate Cake",
            description: "A rich and moist chocolate cake recipe.",
            image: "images/Chocolate-Cake103.jpg",
        },
        {
            title: "Grilled Chicken",
            description: "A savory grilled chicken with herbs.",
            image: "images/grilled-chicken.jpg",
        },
        {
            title: "Veggie Pasta",
            description: "Healthy and delicious pasta with fresh veggies.",
            image: "images/veggies.webp",
        },
    ];

    const loadRecipes = () => {
        if (recipeList) {
            recipeList.innerHTML = "";
            recipes.forEach((recipe) => {
                const recipeCard = document.createElement("article");
                recipeCard.className = "recipe-card";

                recipeCard.innerHTML = `
                    <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
                    <h3>${recipe.title}</h3>
                    <p>${recipe.description}</p>
                `;

                recipeList.appendChild(recipeCard);
            });
        }
    };

    recipeForm?.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("recipe-title").value.trim();
        const description = document.getElementById("recipe-description").value.trim();
        const imageInput = document.getElementById("recipe-image");
        const imageFile = imageInput.files[0];

        if (title && description && imageFile) {
            const reader = new FileReader();

            reader.onload = (event) => {
                recipes.push({
                    title,
                    description,
                    image: event.target.result, // Base64 image data
                });

                loadRecipes();
                recipeForm.reset();
                alert("Your recipe has been added!");
            };

            reader.readAsDataURL(imageFile);
        } else {
            alert("Please fill out all fields and upload an image.");
        }
    });

    searchBar?.addEventListener("input", (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const recipeCards = recipeList.querySelectorAll(".recipe-card");

        recipeCards.forEach((card) => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            card.style.display = title.includes(searchQuery) ? "block" : "none";
        });
    });

    loadRecipes();
});
