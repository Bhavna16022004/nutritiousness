document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const categories = document.querySelectorAll('.category-item');
    let found = false;

    categories.forEach(function(category) {
        const categoryName = category.querySelector('.category-card').innerText.toLowerCase();
        if (categoryName.includes(query)) {
            category.style.display = 'block';
            found = true;
        } else {
            category.style.display = 'none';
        }
    });

    if (!found) {
        alert('No matching recipes found.');
    }
});

const recipes = {
    recipe1: {
        title: "Instant Pot Mac and Cheese",
        image: "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Best-Instant-Pot-Mac-and-Cheese.jpg",
        time: "30 minutes",
        ingredients: [
            "200g macaroni",
            "1 cup cheddar cheese (shredded)",
            "2 cups milk",
            "Salt (to taste)",
            "Pepper (to taste)"
        ],
        instructions: `
            1. Set your Instant Pot to the "Sauté" function and add a splash of water or a small amount of oil.
            2. Once the pot is hot, add the macaroni and stir for about 1 minute.
            3. Add 2 cups of water or broth to the pot, along with a pinch of salt.
            4. Close the lid and set the valve to "Sealing." Cook on high pressure for 4 minutes.
            5. After the cooking time is up, do a quick release by carefully turning the valve to "Venting."
            6. Open the lid, then stir in the shredded cheddar cheese and milk. Mix until the cheese is fully melted and the sauce is creamy.
            7. Season with additional salt and pepper to taste.
        `
    },
    recipe2: {
        title: "Caprese Grilled Cheese",
        image: "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Caprese-Grilled-Cheese-5.jpg",
        time: "15 minutes",
        ingredients: [
            "2 slices of bread (sourdough or your choice)",
            "2-3 slices of mozzarella cheese",
            "1 ripe tomato, sliced",
            "Fresh basil leaves",
            "Balsamic glaze (optional, for drizzling)"
        ],
        instructions: `
            1. Heat a skillet or griddle over medium heat.
            2. Layer slices of mozzarella cheese on one slice of bread.
            3. Add slices of tomato on top of the cheese.
            4. Place fresh basil leaves over the tomato slices.
            5. Top with the second slice of bread.
            6. Spread a thin layer of butter on the outside of each slice of bread.
            7. Grill the sandwich in the skillet for 2-3 minutes on each side, or until the bread is golden brown and the cheese is melted.
            8. Drizzle with balsamic glaze if desired before serving.
        `
    },
    recipe3: {
        title: "Noodles",
        image: "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Gochujang-Noodles-4.jpg",
        time: "20 minutes",
        ingredients: [
            "200g noodles (any type you prefer)",
            "2 tablespoons soy sauce",
            "Mixed vegetables (carrots, bell peppers, snap peas, etc.)",
            "Gochujang (Korean chili paste)"
        ],
        instructions: `
            1. Boil the noodles according to package instructions. Drain and set aside.
            2. In a large skillet or wok, heat a small amount of oil over medium-high heat.
            3. Add mixed vegetables and stir-fry for 3-4 minutes until tender-crisp.
            4. Add the cooked noodles to the skillet.
            5. Stir in soy sauce and Gochujang. Mix well to coat the noodles and vegetables.
            6. Cook for an additional 2-3 minutes, stirring frequently.
            7. Serve hot, garnished with additional Gochujang if desired.
        `
    },
    recipe4: {
        title: "Squash Salad",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScI5VpXku0FQxDpKQoGwN24k0lptMoEmkpRblikSQKAoqO7JJeQuYHILoe_-vwV3ptypU&usqp=CAU",
        time: "25 minutes",
        ingredients: [
            "1 cup roasted squash",
            "Mixed greens",
            "Feta cheese (crumbled)",
            "Olive oil",
            "Balsamic vinegar"
        ],
        instructions: `
            1. Preheat the oven to 400°F (200°C).
            2. Cut squash into cubes, toss with olive oil, salt, and pepper. Roast for 20-25 minutes until tender.
            3. In a large bowl, mix roasted squash with mixed greens.
            4. Add crumbled feta cheese on top.
            5. Drizzle with olive oil and balsamic vinegar just before serving.
        `
    },
    recipe5: {
        title: "Roasted Brussels Sprouts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1CDvHS2ym13Jn4AJbhElP2lh-tV8-Nqcqr9B-sMOJtVBfj8CWqY99USL5w9K1gKXIio0&usqp=CAU",
        time: "35 minutes",
        ingredients: [
            "400g Brussels sprouts",
            "Olive oil",
            "Salt",
            "Pepper",
            "Balsamic glaze"
        ],
        instructions: `
            1. Preheat the oven to 425°F (220°C).
            2. Trim the ends of the Brussels sprouts and cut them in half.
            3. Toss Brussels sprouts with olive oil, salt, and pepper.
            4. Spread them out in a single layer on a baking sheet.
            5. Roast for 25-30 minutes, stirring halfway through, until crispy and browned.
            6. Drizzle with balsamic glaze before serving.
        `
    },
    recipe6: {
        title: "Sopa Tarasca",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGVSgiiCyDcjGG-Q0ciJiBBzjpiTgZqEfGdeULgHZteP9f1hqG6qxwY89gFQiMuBErYs8&usqp=CAU",
        time: "40 minutes",
        ingredients: [
            "3 tomatoes",
            "1 onion",
            "2 cloves garlic",
            "Tortilla strips",
            "Avocado"
        ],
        instructions: `
            1. Blend tomatoes, onion, and garlic until smooth.
            2. Pour the blended mixture into a pot and bring to a simmer over medium heat.
            3. Cook for about 20 minutes, allowing the flavors to meld.
            4. Serve hot, garnished with tortilla strips and sliced avocado.
        `
    },
    recipe7: {
        title: "Momo",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zjuEAmMxeyjsh7kkTQ0MrhO5H3ohvWLWy_pNEaaemvJE6dWYJi5O9J_ewv53LBmfOSQ&usqp=CAU",
        time: "50 minutes",
        ingredients: [
            "500g ground meat",
            "1 onion, finely chopped",
            "2 cloves garlic, minced",
            "1 tablespoon ginger, minced",
            "Dumpling wrappers"
        ],
        instructions: `
            1. In a bowl, mix ground meat with chopped onion, minced garlic, and ginger.
            2. Place a small spoonful of the meat mixture in the center of each dumpling wrapper.
            3. Fold and seal the wrappers according to package instructions or your preferred method.
            4. Steam the dumplings in a steamer for 15-20 minutes until the meat is fully cooked.
            5. Serve with dipping sauce of your choice.
        `
    }
};

function openRecipe(recipeId) {
    const recipe = recipes[recipeId];
    document.getElementById('recipeImage').src = recipe.image;
    document.getElementById('recipeTitle').innerText = recipe.title;
    document.getElementById('recipeTime').innerText = `Time: ${recipe.time}`; // Fixed template literal
    
    const ingredientsList = document.getElementById('recipeIngredients');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.innerText = ingredient;
        ingredientsList.appendChild(li);
    });

    document.getElementById('recipeInstructions').innerText = recipe.instructions;
    document.getElementById('recipeModal').style.display = "block";
}

function closeRecipe() {
    document.getElementById('recipeModal').style.display = "none";
}
