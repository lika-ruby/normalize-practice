import axios from 'axios';

axios.defaults.baseURL = 'https://69d0ea7490cd06523d5da2f8.mockapi.io/reselect';

export async function fetchAuthors() {
  const { data } = await axios.get(`/authors/`);
  return data;
}

export async function fetchBooks() {
  const { data } = await axios.get(`/books/`);
  return data;
}

export async function fetchBookById(bookId) {
  const { data } = await axios.get(`/books/${bookId}`);
  return data;
}

export async function fetchAuthorById(authorId) {
  const { data } = await axios.get(`/authors/${authorId}`);
  return data;
}
