import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { Model } from '@screens/Model';
import { SignIn } from '@screens/SignIn';

type AppRoutes = {
  signIn: undefined;
  home: undefined;
  model: {
    brand: string;
  };
}

type AppRoutesProps = {
  userIsLogged: boolean;
  setUserIsLogged: (value: boolean) => void;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes({ userIsLogged, setUserIsLogged }: AppRoutesProps) {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {userIsLogged ? (
        <>
          <Screen name="home" component={Home} />
          <Screen name="model" component={Model} />
        </>
      ) : (
        <Screen name="signIn">
          {(props) => <SignIn {...props} setUserLogged={setUserIsLogged} />}
        </Screen>
      )}
    </Navigator>
  );
}