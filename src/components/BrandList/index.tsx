import { BrandCard } from "@components/BrandCard";
import { Loading } from "@components/Loading/Index";

import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { FlatList } from "react-native";

import { apiBrand } from "@services/apiBrand";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export type BrandProps = {
  codigo: string
  nome: string
}

export function BrandList() {
  const [isLoading, setIsLoading] = useState(true);
  const [brandData, setBrandData] = useState<BrandProps[]>([]);

  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleOpenModel(id: string) {
    navigation.navigate('model', {brand: id})
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await apiBrand.get("/marcas");
        setBrandData(response.data);
      } catch (error) {
        throw error
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();
  }, []);

  return (
    <>
      { isLoading ? <Loading trasparent={true} /> : 
      <FlatList
        data={brandData}
        keyExtractor={item => item.codigo}   
        renderItem={({ item }) => (
          <BrandCard 
          name={item.nome}
          onPress={() => handleOpenModel(item.codigo)}  
          />
        )} 
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={brandData.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <Loading trasparent={true}/>
        )}
      />
      }
    </>
  );
};