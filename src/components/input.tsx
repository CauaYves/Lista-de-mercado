import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { theme } from "../styles";

export function Input(props: TextInputProps) {
	return <TextInput {...props} style={styles.input}></TextInput>
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: theme.colors.input,
		borderColor: theme.colors.border,
		borderWidth: 1,
		width: "100%",
		borderRadius: 10,
		height: 60,
		paddingHorizontal: 15,
	}
})
