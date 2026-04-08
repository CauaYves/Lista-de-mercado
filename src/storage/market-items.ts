import AsyncStorage from "@react-native-async-storage/async-storage";
import { randomUUID } from "expo-crypto";
import { z } from "zod";

// ==============================================
// Schema e key
// ==============================================
const KEY = "@comprar:market-items";
export type MarketItems = z.infer<typeof schema>;
const schema = z.array(
	z.object({
		id: z.string(),
		status: z.enum(["PENDING", "DONE"]),
		name: z.string(),
	}),
);

// ==============================================
// Getters
// ==============================================
async function get(): Promise<MarketItems> {
	const items = await AsyncStorage.getItem(KEY);
	if (items) {
		const parsedItems = schema.safeParse(JSON.parse(items));
		if (parsedItems.success) {
			return parsedItems.data;
		}
		throw new Error("@comprar:market-items - Retorno não esperado");
	} else {
		return [];
	}
}

async function getByStatus(status: MarketItems[number]["status"]) {
	const filteredItems = (await get()).filter((item) => item.status === status);
	return filteredItems;
}

// ==============================================
// Setters
// ==============================================
async function save(items: MarketItems) {
	await AsyncStorage.setItem(KEY, JSON.stringify(items));
}

async function add(newItem: Omit<MarketItems[number], "id">) {
	const items = await get();
	const updatedItems = [...items, { ...newItem, id: randomUUID() }];

	await save(updatedItems);
}

// ==============================================
// Remove ou delete
// ==============================================
async function removeById(id: string) {
	const items = await get();
	const filteredItems = items.filter((item) => item.id !== id);
	save(filteredItems);
	return filteredItems;
}

async function removeAll() {
	await AsyncStorage.clear();
}

async function toggleStatus(id: string) {
	const items = await get();

	const updatedItems = items.map((item) => {
		if (item.id === id) {
			const updatedStatus: MarketItems[number]["status"] =
				item.status === "DONE" ? "PENDING" : "DONE";

			return { ...item, status: updatedStatus };
		}
		return item;
	});

	save(updatedItems);
}

export const storageMarketItems = {
	get,
	add,
	getByStatus,
	removeById,
	removeAll,
	toggleStatus,
};
