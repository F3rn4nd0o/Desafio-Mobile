import { ModelItem, ModelName, Container } from "./styles";

export type ModelProps = {
  name: string
}

export function ModelCard({ name }: ModelProps) {
  return (
    <Container>
      <ModelItem>
        <ModelName>{name}</ModelName>
      </ModelItem>
    </Container>
  )
}