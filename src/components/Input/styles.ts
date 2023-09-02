import styled, { DefaultTheme, css } from "styled-components/native";

type Props = {
  error: string;
};

export const Container = styled.TextInput<Props>`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};
  `}

  border-width: 2px;
  border-color: ${({ theme, error }: { theme: DefaultTheme } & Props) =>
    error !== undefined
      ? theme.COLORS.RED_100
      : theme.COLORS.GRAY_700
  };

  width: 300px;

  border-radius: 6px;
  padding: 16px;
  margin-bottom: ${(props: Props) => (props.error !== undefined ? '0px' : '20px')};
`;

export const Container2 = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<Props>`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.RED_100};
  `};

  width: 200px;
  margin-bottom: 12px;
  margin-right: 80px
`;
