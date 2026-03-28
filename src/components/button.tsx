import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { colors } from "../styles";


interface ButtonProps extends TouchableOpacityProps {
	title: string
}
export function Button(props: ButtonProps ){
	return <TouchableOpacity {...props} style={styles.button} activeOpacity={.8}>
		<Text style={styles.text}>{props.title}</Text>
	</TouchableOpacity>
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 100,
	},
	text:{
		color: colors["primary-foreground"] 
	}
})
