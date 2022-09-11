//Tags
import { View, FlatList, ActivityIndicator, RefreshControl } from "react-native";
//Instruments
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
//Actions and select
import { loadGoods, loadIGoods } from "../store/goods/goods-actions";
import { selectGoods } from "../store/goods/goods-select";
//Components
import { GoodsItem } from "../Components/GoodsItem";
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
function GoodList({ navigation }) {
	const dispatch = useDispatch();
	const { status, goods, error } = useSelector(selectGoods);
	React.useEffect(() => {
		dispatch(loadGoods())
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
				data={goods}
				renderItem={({ item }) => <GoodsItem {...item.user} navigation={navigation} />}
			/>
		</ImageListView>
	)
}

export { GoodList }