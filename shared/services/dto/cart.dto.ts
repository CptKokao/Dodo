import { Cart, CartItem, Ingredient, Product, Variants } from '@prisma/client';

export type CartItemDTO = CartItem & {
	variants: Variants & {
		product: Product;
	};
	ingredients: Ingredient[];
};

export interface CartDTO extends Cart {
	cartItem: CartItemDTO[];
}

export interface CreateCartItemValues {
	variantsId: number;
	ingredients?: number[];
}
