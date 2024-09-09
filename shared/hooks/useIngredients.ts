"use client";

import { Ingredient } from "@prisma/client";
import React from "react";
import { Api } from "../services/api-clients";
import { useSet } from "react-use";

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIngredients: Set<string>;
  toggleIngredients: (ingredient: string) => void;
}

export const useIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>([])
  );
  React.useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAllIngredients();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);

  return {
    ingredients,
    loading,
    selectedIngredients,
    toggleIngredients,
  };
};
