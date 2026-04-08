import { Button } from "@/src/components/button";
import { Filter } from "@/src/components/filter";
import { Input } from "@/src/components/input";
import { ListItem } from "@/src/components/list-item";
import {
	type MarketItems,
	storageMarketItems,
} from "@/src/storage/market-items";
import { theme } from "@/src/styles";
import { useCallback, useEffect, useState } from "react";
import {
	Alert,
	FlatList,
	Image,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export default function Index() {
	const [filter, setFilter] =
		useState<MarketItems[number]["status"]>("PENDING");
	const [stageItem, setStageItem] = useState("");
	const [items, setItems] = useState<MarketItems>([]);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const getItems = async () => {
		const items = await storageMarketItems.getByStatus(filter);
		setItems(items);
	};

	const addItem = useCallback(() => {
		storageMarketItems.add({
			name: stageItem,
			status: "PENDING",
		});
		getItems();
		setFilter("PENDING");
		Alert.alert("Adicionado", `Item adicionado ${stageItem}`);
		setStageItem("");
		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	}, [stageItem, getItems]);

	const removeItem = async (id: string) => {
		const items = await storageMarketItems.removeById(id);
		setItems(items);
	};

	const removeAll = async () => {
		await storageMarketItems.removeAll();
		getItems();
	};

	useEffect(() => {
		getItems();
		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	}, [getItems]);

	return (
		<View
			style={{
				paddingTop: theme.spacing * 10,
				backgroundColor: theme.colors.background,
				height: "100%",
			}}
		>
			<View
				style={{
					paddingHorizontal: theme.spacing * 3,
					width: "100%",
					height: "25%",
					flex: 1,
					alignItems: "center",
					gap: theme.spacing * 3,
				}}
			>
				<Image source={require("@/src/assets/images/logo.png")} />
				<Input
					placeholder="O que você precisa comprar?"
					onChangeText={(e) => setStageItem(e)}
					value={stageItem}
				/>
				<Button
					disabled={stageItem.trim().length === 0}
					title="Adicionar"
					onPress={addItem}
				/>
			</View>
			<View
				style={{
					width: "100%",
					height: "75%",
					padding: theme.spacing * 6,
					gap: theme.spacing * 5,
					borderRadius: theme.spacing * 6,
					backgroundColor: "#FFFF",
					overflow: "hidden",
				}}
			>
				<View
					style={{
						width: "100%",
						flexDirection: "row",
						gap: theme.spacing * 4,
						borderBottomWidth: 1,
						borderColor: theme.colors.border,
						paddingBottom: theme.spacing * 4,
					}}
				>
					<Filter
						status={"PENDING"}
						title={"Pendentes"}
						setFilter={setFilter}
						filter={filter}
					/>
					<Filter
						status={"DONE"}
						title={"Comprados"}
						setFilter={setFilter}
						filter={filter}
					/>
					<TouchableOpacity style={{ marginLeft: "auto" }} onPress={removeAll}>
						<Text style={{ color: theme.colors.muted }}>Limpar</Text>
					</TouchableOpacity>
				</View>

				<FlatList
					data={items}
					keyExtractor={(item) => item.id}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ gap: theme.spacing * 2 }}
					ItemSeparatorComponent={() => (
						<View
							style={{
								borderBottomWidth: 1,
								borderColor: theme.colors.border,
								paddingVertical: theme.spacing * 1,
							}}
						/>
					)}
					renderItem={({ item }) => (
						<ListItem data={item} onDelete={removeItem} />
					)}
					ListEmptyComponent={() => (
						<Text style={{ color: theme.colors.muted, textAlign: "center" }}>
							😴 Não há itens
						</Text>
					)}
				/>
			</View>
		</View>
	);
}
