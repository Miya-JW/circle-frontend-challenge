import { createStore } from 'vuex';
import axios from 'axios';
import { fetchBookCoverByISBN } from '../services/googleBookService';

const VITE_API_URL = import.meta.env.VITE_API_URL;
export default createStore({
    state: {
        books: [],
        currentIndex:0,
        currentBook: null  // add a new state to store the current selected book
    },
    mutations: {
        setBooks(state, books) {
            state.books = books;
        },
        setCurrentBook(state, book) {
            state.currentBook = book;  // store the current selected book
        },
        updateCurrentIndex(state, newIndex) {
            state.currentIndex = newIndex;
        }
    },
    actions: {
        async fetchBooks({ commit }) {
            try {
                const response = await axios.get(`${VITE_API_URL}/books`);
                const booksWithIsbn = response.data.books;

                const booksWithCovers = await Promise.all(
                    booksWithIsbn.map(async (book) => {
                        const coverUrl = await fetchBookCoverByISBN(book.isbn);
                        return {
                            ...book,
                            cover: coverUrl
                        };
                    })
                );

                commit('setBooks', booksWithCovers);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        },
        selectBook({ commit }, book) {
            commit('setCurrentBook', book);  // call the mutation to store the current selected book
        }
    }
});