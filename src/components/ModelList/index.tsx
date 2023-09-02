import { Loading } from "@components/Loading/Index";
import { ModelCard } from "@components/ModelCard";
import { ModelProps } from "@screens/Model";
import { FlatList } from "react-native";

type ModelList = {
  modelData: ModelProps[]
  isLoading: boolean
}

export function ModelList({ modelData, isLoading }: ModelList) {
  return (
    <>
      { isLoading ? <Loading trasparent={true} /> : 
      <FlatList
        data={modelData}
        keyExtractor={item => item.codigo}   
        renderItem={({ item }) => (
          <ModelCard 
          name={item.nome}
          />
        )} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={modelData.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <Loading trasparent={true}/>
        )}
      />
      }
    </>
  );
};