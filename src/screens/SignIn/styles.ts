import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native'

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  padding: 52px;
  background-color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_800};
`;

export const ContainerCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BRAND_LIGHT};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.XXXL}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;

  margin-bottom: 20px;
`;

export const Text = styled.Text`
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.BRAND_LIGHT};
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.XXXL}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`;