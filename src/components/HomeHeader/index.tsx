import { Container, BackIcon, ExitIcon, BackButton, ExitButton, Text, Container2, ProfileSvg } from "./styles";

import { BackHandler } from 'react-native';
import { StatusBar } from 'react-native';

import { useAuth } from "@hooks/useAuth";
import { useNavigation } from '@react-navigation/native';

type Props = {
  showExitButton?: boolean;
  showBackButton?: boolean;
  showUserData?: boolean;
}

export function HomeHeader({ showUserData = true, showBackButton = false, showExitButton = false}: Props){
  const { user } = useAuth()
  const navigation = useNavigation()

  function handleExitApp() {
    BackHandler.exitApp()
  }

  function handleGoBack() {
    navigation.goBack()
  }

  return(
    <Container>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="#29292E"
        translucent 
      />
      {
        showUserData&&
        <Container2>
          <ProfileSvg />
          <Text>
            {user.name}
          </Text>
        </Container2>
      }
      
      {
        showExitButton&&
        <ExitButton onPress={handleExitApp}>
          <ExitIcon />
        </ExitButton>
      }

      {
        showBackButton&&
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      }
    </Container>
  )
}