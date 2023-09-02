import { Container, Container2, Text } from "./styles";

import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>;
    errorMessage?: string;
}

export function Input({inputRef, errorMessage, ...rest}: Props){
  const {COLORS} = useTheme();

  return(
    <Container2>
      <Container
        error={errorMessage}
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_300}
        {...rest}
      />
      {
        errorMessage !== undefined
        ? <Text>{errorMessage}</Text>
        : null
      } 
    </Container2>
  )
}