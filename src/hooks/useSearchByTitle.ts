import { axiosInstance } from '../config/axiosInstance';

const useSearchByTitle = () => {

  const searchByTitle = async (title: string) => {
    const response = await axiosInstance.get(`/books/${title}`);
    return response.data;
  };

  return { searchByTitle };
};

export default useSearchByTitle;