import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Book = ({ title, author}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 15,
        marginHorizontal: 10

    },
    title:{
        fontSize:20,
        fontWeight: 'bold',
    }

})

export default Book;