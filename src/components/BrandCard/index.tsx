import { BrandItem, BrandName, Container } from "./styles";

export type BrandProps = {
  name: string
  onPress: () => void
}

export function BrandCard({ name, onPress }: BrandProps) {
  return (
    <Container>
      <BrandItem onPress={onPress}>
        <BrandName>{name}</BrandName>
      </BrandItem>
    </Container>
  )
}