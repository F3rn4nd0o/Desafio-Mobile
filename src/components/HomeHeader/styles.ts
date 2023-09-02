import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

import { SignOut, User, CaretLeft} from "phosphor-react-native";

export const Container = styled.View`
  background-color: ${({theme}: {theme: DefaultTheme}) => theme.COLORS.GRAY_700};

  height: 70px;

  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Container2 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ExitButton = styled.TouchableOpacity`
`;

export const Text = styled.Text`
  color: ${({ theme }: {theme: DefaultTheme}) => theme.COLORS.WHITE};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD};
  margin-left: 10px;
`

export const ExitIcon = styled(SignOut).attrs(({theme}: {theme: DefaultTheme}) => ({
  size: 32,
  color: theme.COLORS.RED_100
}))``;

export const BackButton = styled.TouchableOpacity`
`;

export const BackIcon = styled(CaretLeft).attrs(({theme}: {theme: DefaultTheme}) => ({
  size: 32,
  color: theme.COLORS.WHITE
}))``;

export const ProfileSvg = styled(User).attrs(({theme}: {theme: DefaultTheme}) => ({
  size: 32,
  color: theme.COLORS.WHITE
}))``;