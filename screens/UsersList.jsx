//Tags
import { View, FlatList, ActivityIndicator, RefreshControl, Text } from "react-native";
//Instruments
import { useSelector, useDispatch } from "react-redux";
import React from "react";
//Actions and select
import { loadUsers } from "../store/users/users-actions";
import { selectUsers } from "../store/users/users-select";
//Components
import { UsersItem } from "../Components/UsersItem";
//styleId
import styled from 'react-native-styled-components';
const ImageListView = styled(View, {
	width: "100%",
	position: "relative",
	height: "100%"
})
const Preload = styled(View, {
	flex: 1,
	alignItems: "center",
	justifyContent: "center"
})
function UsersList({ navigation }) {
	const dispatch = useDispatch();
	const { status, users, error } = useSelector(selectUsers);
	React.useEffect(() => {
		dispatch(loadUsers())
	}, []);
	return (
		<ImageListView>
			{
				status === "loading" && <Preload><ActivityIndicator size="large" /></Preload>
			}
			{
				error && <Text >{error}</Text>
			}
			<FlatList
				data={users}
				renderItem={({ item }) => <UsersItem {...item.user} navigation={navigation} />}
			/>
		</ImageListView>
	)
}

export { UsersList }