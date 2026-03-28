import {
	StyleSheet,
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";
import { theme } from "../styles";

interface ButtonProps extends TouchableOpacityProps {
	title: string;
}
export function Button(props: ButtonProps) {
	return (
		<TouchableOpacity {...props} style={styles.button} activeOpacity={0.8}>
			<Text style={styles.text}>{props.title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: theme.colors.primary,
		paddingVertical: theme.spacing * 4,
		borderRadius: theme.radius,
		width: "100%",
		display: "flex",
		alignItems: "center",
	},
	text: {
		color: theme.colors["primary-foreground"],
	},
});
