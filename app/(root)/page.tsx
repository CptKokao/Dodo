import { prisma } from '@/prisma/prisma-client';
import { Filters, ProductsGroupList, Stories } from '@/shared/components/shared';
import { Container } from '@/shared/components/shared/container';
import { Title } from '@/shared/components/shared/title';
import { TopBar } from '@/shared/components/shared/top-bar';
import { findPizzas, GetSearchParams } from '@/shared/lib/find-pizzas';
import { Suspense } from 'react';

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
	const categories = await findPizzas(searchParams);

	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' className='font-extrabold' />
			</Container>

			<TopBar categories={categories} />

			<Stories />

			<Container className='mt-10 pb-14'>
				<div className='flex gap-[80px]'>
					{/* Фильтрация */}
					<div className='w-[250px]'>
						<Suspense>
							<Filters />
						</Suspense>
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
