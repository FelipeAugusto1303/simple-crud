import React from 'react';
import {
    View,
    Text,
} from 'react-native';

const Bookshelf = () => {

    const [books, setBooks] = React.useState(null);

    React.useEffect(() => {
        fetch('http://192.168.0.15:3003/library')
        .then(response => response.json())
        .then(data => {
            setBooks(data)
        })
        .catch(error => console.log(error))
        
    }, [])

    return(
        <View>
            <Text>Bookshelf</Text>
        </View>
    )
}

export default Bookshelf