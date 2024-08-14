import { Filters } from "@/shared/components/shared";
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
            <div className="flex flex-col gap-16"></div>
          </div>
        </div>
      </Container>
    </>
  );
}
