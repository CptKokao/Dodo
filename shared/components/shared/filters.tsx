'use client';

import { useFilters, useIngredients, useQueryFilters } from '@/shared/hooks';
import React from 'react';
import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { RangeSlider } from './range-slider';
import { Title } from './title';
interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	const filters = useFilters();

	const { ingredients, loading } = useIngredients();
	const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));
	const updatePrices = (prices: number[]) => {
		filters.setPrices('priceMin', prices[0]);
		filters.setPrices('priceMax', prices[1]);
	};

	useQueryFilters(filters);

	return (
		<div className={className}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			{/* Тип теста */}
			<CheckboxFiltersGroup
				title='Тип теста'
				name='types'
				className='mt-5'
				onClickCheckbox={filters.setPizzaTypes}
				selected={filters.pizzaTypes}
				items={[
					{ text: 'Тонкое', value: '1' },
					{ text: 'Традиционное', value: '2' },
				]}
			/>

			{/* Размеры пиццы */}
			<CheckboxFiltersGroup
				title='Размеры'
				name='sizes'
				className='mt-5'
				onClickCheckbox={filters.setSizes}
				selected={filters.sizes}
				items={[
					{ text: '20 см', value: '20' },
					{ text: '30 см', value: '30' },
					{ text: '40 см', value: '40' },
				]}
			/>

			{/* Фильтр цен */}
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						value={String(filters.prices.priceMin)}
						onChange={(e) => filters.setPrices('priceMin', Number(e.target.value))}
					/>
					<Input
						type='number'
						min={100}
						max={1000}
						placeholder='1000'
						value={String(filters.prices.priceMax)}
						onChange={(e) => filters.setPrices('priceMax', Number(e.target.value))}
					/>
				</div>

				<RangeSlider
					min={0}
					max={1000}
					step={10}
					value={[filters.prices.priceMin || 0, filters.prices.priceMax || 1000]}
					onValueChange={updatePrices}
				/>
			</div>

			<CheckboxFiltersGroup
				title='Ингредиенты'
				name='ingredients'
				className='mt-5'
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={filters.setSelectedIngredients}
				selected={filters.selectedIngredients}
			/>
		</div>
	);
};
