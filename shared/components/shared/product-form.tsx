'use client';

import { ProductWithRelations } from '@/@types/prisma';
// import { useCartStore } from '@/shared/store';
import React from 'react';
// import toast from 'react-hot-toast';
import { ChoosePizzaForm } from './choose-pizza-form';
import { ChooseProductForm } from './choose-product-form';

interface Props {
	product: ProductWithRelations;
	onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({ product, onSubmit: _onSubmit }) => {
	// const [addCartItem, loading] = useCartStore((state) => [state.addCartItem, state.loading]);

	const firstItem = product.variants[0];
	const isPizzaForm = Boolean(firstItem.pizzaType);

	const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
		try {
			// const itemId = productItemId ?? firstItem.id;

			// await addCartItem({
			// 	productItemId: itemId,
			// 	ingredients,
			// });

			// toast.success(product.name + ' добавлена в корзину');

			_onSubmit?.();
		} catch (err) {
			// toast.error('Не удалось добавить товар в корзину');
			console.error(err);
		}
	};

	if (isPizzaForm) {
		return (
			<ChoosePizzaForm
				imageUrl={product.imgUrl}
				name={product.name}
				ingredients={product.ingredients}
				items={product.variants}
				onSubmit={onSubmit}
				loading={false}
				// loading={loading}
			/>
		);
	}

	return (
		<ChooseProductForm
			imageUrl={product.imgUrl}
			name={product.name}
			onSubmit={onSubmit}
			price={firstItem.price}
			loading={false}
			// loading={loading}
		/>
	);
};