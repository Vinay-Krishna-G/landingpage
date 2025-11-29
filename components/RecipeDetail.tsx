"use client";

import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Recipe {
  name: string;
  description: string;
  tags: string[];
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
  nutritionalInfo: {
    calories: string;
    protein: string;
    carbs: string;
    fiber: string;
  };
}

interface RecipeDetailProps {
  recipe: Recipe;
  onClose: () => void;
}

export function RecipeDetail({ recipe, onClose }: RecipeDetailProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header with close button */}
        <div className="relative h-64 sm:h-80">
          <img
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-slate-800" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8">
          {/* Recipe title and meta */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-slate-800 mb-3 text-balance">
              {recipe.name}
            </h2>
            <p className="text-slate-600 text-lg mb-4 leading-relaxed">
              {recipe.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {recipe.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-full bg-emerald-100 text-emerald-700 border-none px-3 py-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Recipe stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 p-4 bg-slate-50 rounded-xl">
            <div>
              <p className="text-xs text-slate-500 mb-1">Prep Time</p>
              <p className="font-semibold text-slate-800">{recipe.prepTime}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">Cook Time</p>
              <p className="font-semibold text-slate-800">{recipe.cookTime}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">Servings</p>
              <p className="font-semibold text-slate-800">{recipe.servings}</p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">Difficulty</p>
              <p className="font-semibold text-slate-800">
                {recipe.difficulty}
              </p>
            </div>
          </div>

          {/* Nutritional Info */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Nutritional Info (per serving)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-emerald-700">
                  {recipe.nutritionalInfo.calories}
                </p>
                <p className="text-xs text-slate-600 mt-1">Calories</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-emerald-700">
                  {recipe.nutritionalInfo.protein}
                </p>
                <p className="text-xs text-slate-600 mt-1">Protein</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-emerald-700">
                  {recipe.nutritionalInfo.carbs}
                </p>
                <p className="text-xs text-slate-600 mt-1">Carbs</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-emerald-700">
                  {recipe.nutritionalInfo.fiber}
                </p>
                <p className="text-xs text-slate-600 mt-1">Fiber</p>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Ingredients
            </h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-600 mr-3 mt-1">•</span>
                  <span className="text-slate-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Instructions
            </h3>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-700 leading-relaxed pt-1">
                    {instruction}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action button */}
          <div className="pt-4 border-t border-slate-200">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
              Add to My Meal Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
