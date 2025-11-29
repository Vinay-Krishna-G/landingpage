"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { RecipeDetail } from "./RecipeDetail";

const recipesData = [
  {
    name: "Foxtail Millet Ambali – Morning reset",
    description:
      "A traditional fermented porridge that's light on the stomach and energizing. Perfect for starting your day with gut-friendly probiotics.",
    tags: ["High fiber", "Easy to digest"],
    image: "/foxtail-millet-ambali-porridge-breakfast.jpg",
    prepTime: "5 mins",
    cookTime: "10 mins",
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "1 cup foxtail millet, soaked overnight",
      "2 cups water",
      "1/2 cup buttermilk or yogurt",
      "1 tsp cumin seeds",
      "1 green chili, chopped",
      "Few curry leaves",
      "Salt to taste",
      "Coriander leaves for garnish",
    ],
    instructions: [
      "Drain the soaked foxtail millet and rinse well.",
      "In a pan, add millet and water. Bring to a boil and simmer for 10-12 minutes until the millet is cooked and soft.",
      "Remove from heat and let it cool slightly. Blend to a smooth consistency.",
      "Add buttermilk or yogurt and mix well. Add salt to taste.",
      "In a small pan, heat oil and add cumin seeds, green chili, and curry leaves. Let them splutter.",
      "Pour the tempering over the ambali and mix well.",
      "Garnish with coriander leaves and serve warm or chilled.",
    ],
    nutritionalInfo: {
      calories: "180",
      protein: "6g",
      carbs: "32g",
      fiber: "4g",
    },
  },
  {
    name: "Barnyard Millet Khichdi – Comfort lunch",
    description:
      "One-pot wholesome comfort food that's gentle on digestion. Packed with protein and perfect for a satisfying midday meal.",
    tags: ["Gut-friendly", "High fiber"],
    image: "/barnyard-millet-khichdi-comfort-food.jpg",
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: 3,
    difficulty: "Easy",
    ingredients: [
      "1 cup barnyard millet",
      "1/2 cup split moong dal (yellow lentils)",
      "2 cups mixed vegetables (carrots, peas, beans)",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "1 tsp ginger-garlic paste",
      "1 tsp turmeric powder",
      "1 tsp cumin seeds",
      "2 tbsp ghee or oil",
      "Salt to taste",
      "Fresh coriander for garnish",
    ],
    instructions: [
      "Rinse barnyard millet and moong dal together. Soak for 15 minutes.",
      "In a pressure cooker, heat ghee and add cumin seeds. Let them splutter.",
      "Add chopped onions and sauté until translucent. Add ginger-garlic paste and cook for a minute.",
      "Add tomatoes, turmeric powder, and salt. Cook until tomatoes are soft.",
      "Add the soaked millet and dal, mixed vegetables, and 4 cups of water.",
      "Close the lid and cook for 3-4 whistles on medium heat.",
      "Once pressure releases naturally, open and mix well. Adjust consistency with water if needed.",
      "Garnish with fresh coriander and serve hot with pickle or yogurt.",
    ],
    nutritionalInfo: {
      calories: "245",
      protein: "9g",
      carbs: "42g",
      fiber: "6g",
    },
  },
  {
    name: "Kodo Millet Veg Pulao – Busy day dinner",
    description:
      "Quick, flavorful, and nutritious rice alternative loaded with vegetables. Ready in 25 minutes for those hectic evenings.",
    tags: ["Meal prep friendly", "High fiber"],
    image: "/kodo-millet-pulao-vegetables-dinner.jpg",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "1.5 cups kodo millet",
      "2.5 cups water",
      "2 cups mixed vegetables (carrots, beans, peas, bell peppers)",
      "1 large onion, sliced",
      "2 green chilies, slit",
      "1 tsp ginger-garlic paste",
      "Whole spices: 1 bay leaf, 3-4 cloves, 1 cinnamon stick, 2 cardamoms",
      "1 tsp cumin seeds",
      "2 tbsp oil or ghee",
      "Fresh mint and coriander leaves",
      "Salt to taste",
    ],
    instructions: [
      "Rinse kodo millet thoroughly and soak for 10 minutes. Drain well.",
      "Heat oil in a pan and add whole spices. Let them release their aroma.",
      "Add cumin seeds and let them splutter. Add sliced onions and green chilies.",
      "Sauté until onions turn golden brown. Add ginger-garlic paste and cook for a minute.",
      "Add all the mixed vegetables and sauté for 3-4 minutes on high heat.",
      "Add the drained kodo millet and roast for 2 minutes, stirring continuously.",
      "Add water and salt. Bring to a boil, then reduce heat to low, cover, and cook for 12-15 minutes.",
      "Once cooked, turn off heat and let it rest for 5 minutes. Fluff with a fork.",
      "Garnish with fresh mint and coriander leaves. Serve hot with raita or curry.",
    ],
    nutritionalInfo: {
      calories: "220",
      protein: "7g",
      carbs: "38g",
      fiber: "5g",
    },
  },
];

export function RecipeHighlights() {
  const [selectedRecipe, setSelectedRecipe] = useState<
    (typeof recipesData)[0] | null
  >(null);

  return (
    <>
      <section id="recipes" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 text-balance">
              Sample meals from MilletMate
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Discover delicious millet-based breakfasts, lunches, and dinners
              that are easy to prepare and incredibly nutritious.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {recipesData.map((recipe, index) => (
              <div
                key={index}
                onClick={() => setSelectedRecipe(recipe)}
                className="bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={recipe.image || "/placeholder.svg"}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800">
                    {recipe.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {recipe.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {recipe.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full bg-emerald-100 text-emerald-700 border-none px-3 py-1 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </>
  );
}
