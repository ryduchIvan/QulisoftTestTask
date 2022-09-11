//Tags
import { Image, View, Text } from "react-native";
import styled from "react-native-styled-components";

const ImgContainer = styled(View, {
	dispay: "flex",
	alignItems: "center",
	justifyContent: "center",
	height: "100%",
	objectFit: "cover"
})

const FullImg = styled(Image, {
	width: "90%",
	height: 600,
	objectFit: "cover",
	borderRadius: 25
})
function FullImage({ route }) {
	const { url } = route.params;
	return (
		<ImgContainer>
			<FullImg source={{ uri: url }} />
		</ImgContainer>
	)
}

export { FullImage }