import { createContext, ReactNode, useEffect, useState } from "react";

import { storageAuthTokenSave, storageAuthTokenGet, storageAuthTokenRemove } from '@storage/storageAuthToken';
import { storageUserGet, storageUserRemove, storageUserSave } from '@storage/storageUser';

import { apiLogin } from "@services/apiLogin";
import { UserDTO } from "@dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO;
  userIsLogged: boolean;
  setUserIsLogged: (value: boolean) => void;
  signIn: (email: string, password: string) => Promise<void>;
  updateUserProfile: (userUpdated: UserDTO) => Promise<void>;
  signOut: () => Promise<void>;
  isLoadingUserStorageData: boolean;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps)  {

  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true);
  const [userIsLogged, setUserIsLogged] = useState(false);

  async function signIn(user: string, password: string) {
    try {
      const { data } = await apiLogin.post('/signIn', { user, password });
  
      if (data.user && data.user.token) {
        const { token, ...userDataWithoutToken } = data.user;
        
        await storageUserSave(userDataWithoutToken);
        await storageAuthTokenSave(token);

        setUserIsLogged(true)
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function userUpdate(userData: UserDTO) {
    setUser(userData);
    setUserIsLogged(true)
  }

  async function signOut() {
    try {
      setIsLoadingUserStorageData(true);
      setUser({} as UserDTO);
      setUserIsLogged(false)
      await storageUserRemove();
      await storageAuthTokenRemove();
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function updateUserProfile(userUpdated: UserDTO) {
    try {
      setUser(userUpdated);
      setUserIsLogged(true)
      await storageUserSave(userUpdated);
    } catch (error) {
      throw error;
    }
  }

  async function loadUserData() {
    try {
      setIsLoadingUserStorageData(true);

      const userLogged = await storageUserGet();
      const { token } = await storageAuthTokenGet();
      
      if(token && userLogged) {
        await userUpdate(userLogged);
      } 
    } catch (error) {
      throw error
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  useEffect(() => {
    loadUserData()
  },[userIsLogged])

  return (
    <AuthContext.Provider value={{ 
      user,
      userIsLogged,
      setUserIsLogged,
      signIn,
      updateUserProfile,
      signOut,
      isLoadingUserStorageData
    }}>
      {children}
    </AuthContext.Provider>
  )
}