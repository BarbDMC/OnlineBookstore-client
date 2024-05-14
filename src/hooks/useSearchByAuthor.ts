import { axiosInstance } from '../config/axiosInstance';

const useSearchByAuthor = () => {

  const searchByAuthor = async (author: string) => {
    const response = await axiosInstance.get(`/authors/${author}/books`);
    return response.data;
  };

  return { searchByAuthor };
};

export default useSearchByAuthor;
