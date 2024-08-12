"use client";

import React from "react";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
  const categories = [
    "Пиццы",
    "Комбо",
    "Закуски",
    "Коктейли",
    "Кофе",
    "Напитки",
    "Десерты",
  ];
  const categoryActiveId = 0;

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories.map((el, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            index === 0 && "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`#`}
          key={index}
        >
          <button>{el}</button>
        </a>
      ))}
    </div>
  );
};
