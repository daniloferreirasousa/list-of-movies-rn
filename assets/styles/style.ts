import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#333'
    },
    loadingArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        color: '#FFF'
    },
    totalMoviesText: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    list: {
        flex: 1
    },
    movieItem: {
        marginBottom: 30
    },
    movieImage: {
        height: 400
    },
    movieTitle: {
        color: '#FFF',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 5
    }
})