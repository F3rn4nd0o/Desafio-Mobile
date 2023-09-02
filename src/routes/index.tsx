import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { AppRoutes } from './app.routes';
import { useEffect, useState } from 'react';
import { useAuth } from '@hooks/useAuth';
import { Loading } from '@components/Loading/Index';

export function Routes(){
  const { COLORS } = useTheme();
  const { user, isLoadingUserStorageData, userIsLogged, setUserIsLogged } = useAuth();

  useEffect(() => {
    if (user.id) {
      setUserIsLogged(true);
    }
  }, [user]);

  if (isLoadingUserStorageData) {
    return <Loading />;
  }
  
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_700 }}>
      <NavigationContainer>
        <AppRoutes userIsLogged={userIsLogged} setUserIsLogged={setUserIsLogged} />
      </NavigationContainer>
    </View>
  );
}
