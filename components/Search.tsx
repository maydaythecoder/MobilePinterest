import { ThemedText } from "./Default/ThemedText";
import { ThemedView } from "./Default/ThemedView";
import { StyleSheet } from "react-native";
export const Search = () => {
    return (
        <ThemedView style={styles.SearchBar}>
        <ThemedText type="title" style={styles.SearchBarText}>Search</ThemedText>
      </ThemedView>
    );
};

export default Search;

const styles = StyleSheet.create({
    SearchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: -600,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 16,
        width: '100%',
        height: 30,
        backgroundColor: 'transparent',
        justifyContent: 'center',
      },
      SearchBarText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'gray',
        zIndex: 10,
      },
});
