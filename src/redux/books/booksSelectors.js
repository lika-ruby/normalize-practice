import { booksAdapter } from "./booksReducer.js";

const selectBooksState = (state) => state.books;

export const {
    selectAll: selectBooks,
    selectById: selectBookById,
    selectIds: selectBookIds,
} = booksAdapter.getSelectors(selectBooksState);

export const selectAuthor = (state) => state.books.author;
export const selectFilter = (state) => state.books.filter;

export const selectFilteredBooks = (state) => {
    const books = selectBooks(state);
    const filter = selectFilter(state).toLowerCase();

    return books.filter((book) =>
        book.title.toLowerCase().includes(filter)
    );
};