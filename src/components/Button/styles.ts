import { TouchableOpacity } from "react-native";
import styled, {DefaultTheme, css} from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled.TouchableOpacity<Props>`
  flex: 1;

  width: 150px;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({theme, type}: { theme: DefaultTheme } & Props) => 
  type === 'PRIMARY' 
  ? theme.COLORS.GRAY_600 
  : theme.COLORS.BRAND_MID
  };

  border-radius: 6px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({theme}: { theme: DefaultTheme }) => css `
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `};   
`;

export const Text = styled.Text`
    ${({theme}: { theme: DefaultTheme }) => `
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family: ${theme.FONT_FAMILY.BOLD};
      color: ${theme.COLORS.WHITE};
    `};   
`; 