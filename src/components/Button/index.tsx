import { TouchableOpacityProps } from "react-native";

import { Title, Container, ButtonTypeStyleProps } from "./styles";
import { Loading } from "@components/Loading/Index";

type Props = TouchableOpacityProps & {
	title: string;
	type?: ButtonTypeStyleProps;
	isLoading?: boolean;
}

export function Button({ title, isLoading, type = 'PRIMARY', ...rest}: Props){
    return (
			<Container 
				type={type} 
				{...rest}
			>
				{ 
					isLoading === true 
					?
					<Loading trasparent={true}/>
					:
					<Title>
						{title}
					</Title>
				}
			</Container>
    )
}