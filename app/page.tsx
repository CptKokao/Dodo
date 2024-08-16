import {
  Filters,
  ProductCard,
  ProductsGroupList,
} from "@/shared/components/shared";
import { Container } from "@/shared/components/shared/container";
import { Title } from "@/shared/components/shared/title";
import { TopBar } from "@/shared/components/shared/top-bar";
import { Button } from "@/shared/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Пицца1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 100 }, { price: 150 }, { price: 200 }],
                  },
                  {
                    id: 2,
                    name: "Пицца2",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 100 }, { price: 150 }, { price: 200 }],
                  },
                  {
                    id: 3,
                    name: "Пицца3",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 100 }, { price: 150 }, { price: 200 }],
                  },
                  {
                    id: 4,
                    name: "Пицца1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 100 }, { price: 150 }, { price: 200 }],
                  },
                  {
                    id: 5,
                    name: "Пицца2",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 100 }, { price: 150 }, { price: 200 }],
                  },
                  {
                    id: 6,
                    name: "Пицца3",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 100 }, { price: 150 }, { price: 200 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Пицца1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 100 }, { price: 150 }, { price: 200 }],
                  },
                  {
                    id: 2,
                    name: "Пицца2",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 100 }, { price: 150 }, { price: 200 }],
                  },
                  {
                    id: 3,
                    name: "Пицца3",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 100 }, { price: 150 }, { price: 200 }],
                  },
                  {
                    id: 4,
                    name: "Пицца1",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 100 }, { price: 150 }, { price: 200 }],
                  },
                  {
                    id: 5,
                    name: "Пицца2",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 100 }, { price: 150 }, { price: 200 }],
                  },
                  {
                    id: 6,
                    name: "Пицца3",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 100 }, { price: 150 }, { price: 200 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
