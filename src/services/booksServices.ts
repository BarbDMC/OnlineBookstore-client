import { AxiosError } from 'axios';
import { Book } from '../interfaces/bookInterface';
import { axiosInstance } from '../config/axiosInstance';

interface AxiosErrorData {
  errors: Error[];
}

export const addBook = async (book: Book) => {
  try {
    const response = await axiosInstance.post('/book', book);
    return response.data;
  } catch (err) {
    const axiosError = err as AxiosError;
    
    if (axiosError.response) {
      const errorData = (axiosError.response.data as AxiosErrorData).errors;
      const errorMessage = errorData[0].message as string;

      throw new Error(errorMessage);
    } else {
      throw new Error('An unexpected error occurred. Please try again later.');
    }

  }
};

export const updateBook = async (book: Book) => {
  try {
    const bookID = book.id;
    delete book.id;

    const response = await axiosInstance.put(`/book/${bookID}`, book);
    return response.data;
  } catch (err) {
    const axiosError = err as AxiosError;
    
    if (axiosError.response) {
      const errorData = (axiosError.response.data as AxiosErrorData).errors;
      const errorMessage = errorData[0].message as string;

      throw new Error(errorMessage);
    } else {
      throw new Error('An unexpected error occurred. Please try again later.');
    }

  }
};

export const deleteBook = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/book/${id}`);
    return response.data;
  } catch (err) {
    const axiosError = err as AxiosError;
    
    if (axiosError.response) {
      const errorData = (axiosError.response.data as AxiosErrorData).errors;
      const errorMessage = errorData[0].message as string;

      throw new Error(errorMessage);
    } else {
      throw new Error('An unexpected error occurred. Please try again later.');
    }

  }
};
