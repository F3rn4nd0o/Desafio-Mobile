import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

type Props = {
	trasparent: boolean;
}

export const Container = styled.View<Props>`
  background-color: ${({theme, trasparent}: { theme: DefaultTheme } & Props) => 
  trasparent === true 
  ? 'transparent'
  : theme.COLORS.GRAY_700
  };

  flex: 1;
  align-items: center;
  justify-content: center;
`;