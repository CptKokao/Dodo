import { CartItemDTO } from '@/shared/services/dto/cart.dto';
import React from 'react';

interface Props {
	orderId: number;
	items: CartItemDTO[];
}

export const OrderSuccessTemplate: React.FC<Props> = ({ orderId, items }) => (
	<div>
		<h1>Спасибо за покупку! 🎉</h1>

		<p>Ваш заказ #{orderId} оплачен. Список товаров:</p>

		<hr />

		<ul>
			{items.map((item) => (
				<li key={item.id}>
					{item.variants.product.name} | {item.variants.price} ₽ x {item.quantity} шт. ={' '}
					{item.variants.price * item.quantity} ₽
				</li>
			))}
		</ul>
	</div>
);