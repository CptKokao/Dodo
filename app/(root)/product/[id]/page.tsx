import { prisma } from '@/prisma/prisma-client';
import { Container, GroupVariants, PizzaImage, Title } from '@/shared/components/shared';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
	const product = await prisma.product.findFirst({
		where: { id: Number(id) },
		include: {
			ingredients: true,
			category: {
				include: {
					products: {
						include: {
							variants: true,
						},
					},
				},
			},
			variants: true,
		},
	});

	if (!product) {
		return notFound();
	}

	return (
		<Container className='flex flex-col my-10'>
			<div className='flex flex-1'>
				<PizzaImage imageUrl={product.imgUrl} size={40} />

				<div className='w-[490px] bg-[#F3F3F7] p-7'>
					<Title text={product.name} size='md' className='font-extrabold mb-1' />

					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, perferendis!</p>

					<GroupVariants
						items={[
							{ name: 'Маленькая', value: '1' },
							{ name: 'Средняя', value: '2' },
							{ name: 'Большая', value: '3' },
						]}
					/>
				</div>
			</div>
		</Container>
	);
}
