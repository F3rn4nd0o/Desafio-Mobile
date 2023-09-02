import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
  background-color: ${({theme}: {theme: DefaultTheme}) => theme.COLORS.GRAY_600};
`;

export const BrandItem = styled.Pressable`
  background-color: ${({theme}: {theme: DefaultTheme}) => theme.COLORS.GRAY_700};

  width: 180px;
  border-radius: 10px;
  padding: 16px;
  margin: 8px;
`;

export const BrandName = styled.Text`
  color: ${({theme}: {theme: DefaultTheme}) => theme.COLORS.WHITE};
  font-size: ${({theme}: {theme: DefaultTheme}) => theme.FONT_SIZE.LG}px;
  font-family: ${({theme}: {theme: DefaultTheme}) => theme.FONT_FAMILY.REGULAR};
`;