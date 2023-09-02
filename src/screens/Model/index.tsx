
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { apiModel } from "@services/apiModel";
import { Container } from "./styles";
import { HomeHeader } from "@components/HomeHeader";
import { ModelList } from '@components/ModelList';

type RouteParams = {
  brand: string;
}

export type ModelProps = {
  codigo: string;
  nome: string;
}

export function Model() {
  const route = useRoute();
  const { brand } = route.params as RouteParams;

  const [isLoading, setIsLoading] = useState(true);
  const [modelData, setModelData] = useState<ModelProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await apiModel.get(`${brand}/modelos`)
        setModelData(response.data.modelos)
      } catch (error) {
        throw error
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();
  }, []);
  return (
    <Container>
      <HomeHeader showBackButton={true} showUserData={false}/>

      <ModelList modelData={modelData} isLoading={isLoading} />
    </Container>
  )
}