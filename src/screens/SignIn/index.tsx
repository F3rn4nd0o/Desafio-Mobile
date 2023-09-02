import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { Container, ContainerCenter, Title } from './styles';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { useAuth } from '@hooks/useAuth';
import { useToast } from 'native-base';
import { AppError } from '@utils/AppError';

import BackGroundIMG from "@assets/background.png";

type FormData = {
  user: string;
  password: string;
};

type SignInProps = {
  setUserLogged: (value: boolean) => void;
};

export function SignIn({ setUserLogged }: SignInProps) {
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { signIn } = useAuth();

  const toast = useToast()

  async function handleSignIn({ user, password }: FormData) {
    try {
      setIsLoading(true);
  
      await signIn(user, password);

      navigation.navigate('home');
      setUserLogged(true);
    } catch (error: any) {
      const isAppError = error instanceof AppError;
  
      let title = isAppError ? error.message : 'Não foi possível entrar. Tente novamente mais tarde.';
  
      if (error.response && error.response.status === 401) {
        title = 'Usuário e/ou senha inválido(s).';
      }
  
      toast.show({
        title,
        duration: 1000,
        placement: 'top',
        bgColor: 'red.500'
      });
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <Container source={BackGroundIMG}>
        <ContainerCenter>
          <Title>
            Acesse a conta
          </Title>

          <Controller 
            control={control}
            name="user"
            rules={{ required: 'Informe o user' }}
            render={({ field: { onChange } }) => (
              <Input 
                placeholder="User" 
                keyboardType="default"
                autoCapitalize="none"
                onChangeText={onChange}
                errorMessage={errors.user?.message}
              />
            )}
          />
          
          <Controller 
            control={control}
            name="password"
            rules={{ required: 'Informe a senha' }}
            render={({ field: { onChange } }) => (
              <Input 
                placeholder="Senha" 
                secureTextEntry
                onChangeText={onChange}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Button 
            title="Acessar"
            type='SECONDARY'
            isLoading={isLoading}
            onPress={handleSubmit(handleSignIn)}
          />
        </ContainerCenter>
      </Container>
    </ScrollView>
  );
}
