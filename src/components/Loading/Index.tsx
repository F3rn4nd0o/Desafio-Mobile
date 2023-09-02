import { Spinner } from "native-base";
import { Container } from "./styles"

type Props = {
	trasparent?: boolean;
}

export function Loading({ trasparent }: Props) {
  return (
    <Container trasparent={trasparent}>
      <Spinner color="green.500" />
    </Container>
  );
}