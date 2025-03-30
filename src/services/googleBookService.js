import axios from 'axios';
const apiKey = import.meta.env.VITE_API_KEY_GOOGLE_BOOKS;
/**
 * Fetches the book cover image by ISBN.
 * @param {string} isbn - The ISBN of the book.
 * @returns {Promise<string>} The URL of the book cover image or a placeholder if not available.
 */
const fetchBookCoverByISBN = async (isbn) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${encodeURIComponent(isbn)}&key=${apiKey}`;
    const placeholder = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmlJTqJ7Xzd3cU-nEyR0bf9W2PadKD7kI9Q&s';

    try {
        const response = await axios.get(url);
        if (response.data.items && response.data.items.length > 0) {
            const book = response.data.items[0]; // Assuming the first result is the most relevant
            const imageUrl = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : placeholder;
            return imageUrl;
        }
        return placeholder; // Return placeholder if no image is available
    } catch (error) {
        console.error('Error fetching book cover:', error);
        return placeholder; // Return placeholder if an error occurs
    }
};

export { fetchBookCoverByISBN };