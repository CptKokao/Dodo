"use client";

import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useIngredients } from "@/shared/hooks/useIngredients";
import { useSet } from "react-use";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { loading, ingredients, selectedIngredients, toggleIngredients } =
    useIngredients();

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [types, { toggle: toggleTypes }] = useSet(new Set<string>([]));

  const [prices, setPrices] = React.useState({ priceMax: 0, priceMin: 5000 });

  const updatePrice = (key: "priceMax" | "priceMin", value: number) => {
    setPrices({ ...prices, [key]: value });
  };

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Тип теста */}
      <CheckboxFiltersGroup
        title="Тип теста"
        name="types"
        className="mt-5"
        onClickCheckbox={toggleTypes}
        selected={types}
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
      />

      {/* Размеры пиццы */}
      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mt-5"
        onClickCheckbox={toggleSizes}
        selected={sizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
      />

      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.priceMin)}
            onChange={(e) => updatePrice("priceMin", Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            value={String(prices.priceMax)}
            onChange={(e) => updatePrice("priceMax", Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceMin, prices.priceMax]}
          onValueChange={([min, max]) =>
            setPrices({ priceMin: min, priceMax: max })
          }
        />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={toggleIngredients}
        selected={selectedIngredients}
      />
    </div>
  );
};
