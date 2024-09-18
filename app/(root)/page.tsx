import { ingredients } from '@/prisma/constans';
import { prisma } from '@/prisma/prisma-client';
import { Filters, ProductCard, ProductsGroupList } from '@/shared/components/shared';
import { Container } from '@/shared/components/shared/container';
import { Title } from '@/shared/components/shared/title';
import { TopBar } from '@/shared/components/shared/top-bar';
import { Button } from '@/shared/components/ui/button';
import Image from 'next/image';

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			products: {
				include: {
					variants: true,
					ingredients: true,
				},
			},
		},
	});

	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' className='font-extrabold' />
			</Container>

			<TopBar categories={categories} />

			<Container className='mt-10 pb-14'>
				<div className='flex gap-[80px]'>
					{/* Фильтрация */}
					<div className='w-[250px]'>
						<Filters />
					</div>

					{/* Список товаров */}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							{categories.map(
								(category) =>
									category.products.length > 0 && (
										<ProductsGroupList
											categoryId={category.id}
											key={category.id}
											title={category.name}
											items={category.products}
										/>
									),
							)}
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
