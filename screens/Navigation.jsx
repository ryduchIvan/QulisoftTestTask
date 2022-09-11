//Instruments
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
//Components
import { GoodList } from "./GoodsList";
import { FullImage } from "./FullImage";
const Stack = createNativeStackNavigator();

export const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={GoodList} options={{ title: "Users" }} />
				<Stack.Screen name="FullImage" component={FullImage} options={{ title: "Image" }} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}