"use client";

import { useState } from "react";
import type { Recipe } from "@/types";

interface RecipeFilterProps {
  recipes: Recipe[];
}

const difficulties = ["All", "Easy", "Medium", "Hard"];

export function RecipeFilter({ recipes }: RecipeFilterProps) {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  const filtered = recipes.filter((r) => {
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.ingredients?.some(i => i.toLowerCase().includes(search.toLowerCase()));
    const matchDiff = difficulty === "All" || r.difficulty === difficulty;
    return matchSearch && matchDiff;
  });

  return (
    <>
      <div className="recipe-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search recipes or ingredients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="filter-buttons">
          {difficulties.map((d) => (
            <button
              key={d}
              className={`filter-btn ${difficulty === d ? "active" : ""}`}
              onClick={() => setDifficulty(d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
      <div className="card-grid three-col">
        {filtered.map((recipe) => (
          <article key={recipe.title} className="recipe-card">
            <div className="recipe-img">
              <img src={recipe.image} alt={recipe.title} />
            </div>
            <div className="recipe-meta">
              {recipe.difficulty && (
                <span className={`difficulty ${recipe.difficulty.toLowerCase()}`}>
                  {recipe.difficulty}
                </span>
              )}
              {recipe.cookTime && <span className="cook-time">{recipe.cookTime}</span>}
            </div>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="no-results">No recipes found. Try a different search.</p>
      )}
    </>
  );
}