document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipe-form');
    const recipeGrid = document.getElementById('recipe-grid');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const backBtn = document.getElementById('back-btn');
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    function saveRecipes() {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    // Load recipes from localStorage
    recipes.forEach(addRecipeToGrid);

    // Handle form submission
    recipeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('recipe-ingredients').value;
        const instructions = document.getElementById('recipe-instructions').value;
        const image = document.getElementById('recipe-image').value;
        
        if (name && ingredients && instructions && image) {
            const newRecipe = { name, ingredients, instructions, image };
            recipes.push(newRecipe);
            saveRecipes();
            addRecipeToGrid(newRecipe);
            recipeForm.reset();
            window.scrollTo(0, document.body.scrollHeight); // Scroll to bottom
        }
    });

    // Function to add recipe to grid
    function addRecipeToGrid(recipe) {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <button onclick='openModal(${JSON.stringify(recipe).replace(/'/g, "\\'")})'>View Recipe</button>
            <button onclick='deleteRecipe("${recipe.name}")'>Delete Recipe</button>
        `;
        
        recipeGrid.appendChild(recipeCard);
    }

    // Open modal
    window.openModal = (recipe) => {
        document.getElementById('modal-image').src = recipe.image;
        document.getElementById('modal-name').textContent = recipe.name;
        document.getElementById('modal-ingredients').textContent = recipe.ingredients;
        document.getElementById('modal-instructions').textContent = recipe.instructions;
        document.getElementById('recipe-modal').style.display = 'flex';
    }

    // Close modal
    window.closeModal = () => {
        document.getElementById('recipe-modal').style.display = 'none';
    }

    // Delete recipe
    window.deleteRecipe = (name) => {
        recipes = recipes.filter(recipe => recipe.name !== name);
        saveRecipes();
        recipeGrid.innerHTML = '';
        recipes.forEach(addRecipeToGrid);
    }

    // Search functionality
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(query) || 
            recipe.ingredients.toLowerCase().includes(query)
        );
        recipeGrid.innerHTML = '';
        filteredRecipes.forEach(addRecipeToGrid);
    });

    // Back button functionality
    backBtn.addEventListener('click', () => {
        searchInput.value = '';
        recipeGrid.innerHTML = '';
        recipes.forEach(addRecipeToGrid);
        backBtn.style.display = 'none';
    });

    // Show back button when searching
    searchInput.addEventListener('input', () => {
        backBtn.style.display = searchInput.value ? 'inline-block' : 'none';
    });
});
