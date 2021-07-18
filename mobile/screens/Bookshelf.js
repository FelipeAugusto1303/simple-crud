import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import Book from '../components/Book';

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
            {books && books.map((book, idx) => {
                return(
                    <Book key={idx} title={book.title} author={book.author}/>
                )
            })}
            
        </View>
    )
}

export default Bookshelf