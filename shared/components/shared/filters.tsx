import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <FilterCheckbox text="Можно собирать" value="1" />
      <FilterCheckbox text="Новинки" value="2" />

      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>

        <RangeSlider min={0} max={1000} step={10} />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
          { text: "40 см", value: "40" },
          { text: "40 см", value: "40" },
          { text: "40 см", value: "40" },
          { text: "40 см", value: "40" },
          { text: "40 см", value: "40" },
        ]}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
          { text: "40 см", value: "40" },
          { text: "40 см", value: "40" },
          { text: "40 см", value: "40" },
          { text: "40 см", value: "40" },
          { text: "40 см", value: "40" },
        ]}
        loading={false}
      />
    </div>
  );
};
