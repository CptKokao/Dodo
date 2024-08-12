import { Container } from "@/shared/components/shared/container";
import { Title } from "@/shared/components/shared/title";
import { TopBar } from "@/shared/components/shared/top-bar";
import { Button } from "@/shared/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="mt-10">
      <Title text="Все пиццы" className="font-extrabold" />

      <TopBar />
    </Container>
  );
}
