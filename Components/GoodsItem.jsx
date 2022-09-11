//Tags
import { View, Text, Image, TouchableOpacity } from "react-native";
//styleid
import styled from 'react-native-styled-components';

const GoodsItemViev = styled(View, {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	width: "95%",
	padding: 15,
	borderColor: "#D5D5D5",
	borderStyle: "solid",
	borderWidth: 1,
	borderRadius: 30,
	backgroundColor: "#F4F9FD",
	marginLeft: "auto",
	marginRight: "auto",
	marginBottom: 10,
	marginTop: 10
})
const UserImage = styled(Image, {
	width: 100,
	height: 100,
	marginRight: 15,
	borderRadius: 30
})
const LocationText = styled(Text, {
})
function GoodsItem(props) {
	const { profile_image, name, location, navigation } = props;
	return (
		<TouchableOpacity onPress={() => navigation.navigate("FullImage", { url: profile_image.large })}>
			<GoodsItemViev >
				<View >
					<UserImage source={{ uri: profile_image.large }} />
				</View>
				<View >
					<Text >{name}</Text>
					<LocationText>Location: {location ? location : "This user has no location"}</LocationText>
				</View>
			</GoodsItemViev>
		</TouchableOpacity>
	)
}

export { GoodsItem }