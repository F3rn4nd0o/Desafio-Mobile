import { HomeHeader } from "@components/HomeHeader";
import { Container } from "./style";
import { BrandList } from "@components/BrandList";

export function Home() {
  return (
    <Container>
      <HomeHeader showExitButton={true} />
      
      <BrandList />
    </Container>
  )
}