import React, { useState, useEffect } from 'react';
import { Book } from '../../interfaces/bookInterface';
import FormField from '../FormField/FormField';

type BookModalProps = {
  book?: Book;
  isOpen: boolean;
  onClose: () => void;
  onSave: (book: Book) => void;
};

const BookModal = ({ book, isOpen, onClose, onSave }: BookModalProps) => {
  const [formData, setFormData] = useState<Book>({
    title: '',
    author: '',
    price: 0,
    inventory: 0,
    description: '',
    image: ''
  });

  useEffect(() => {
    if (book) {
      setFormData(book);
    }
  }, [book]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' || name === 'inventory' ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-4 mb-4">
            <FormField
                label="Title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
              />
              <FormField
                label="Author"
                name="author"
                type="text"
                value={formData.author}
                onChange={handleChange}
              />
          </div>
          <div className="flex space-x-4 mb-4">
            <FormField
                label="Price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
              />
              <FormField
                label="Inventory"
                name="inventory"
                type="number"
                value={formData.inventory}
                onChange={handleChange}
              />
          </div>
          <div className="mb-4">
            <FormField
                label="Description"
                name="description"
                type="textarea"
                value={formData.description}
                onChange={handleChange}
                rows={4}
              />
          </div>
          <div className="flex-col justify-center">
            <button type="submit" className="mb-2 bg-red-400 w-full px-4 py-2 text-center text-stone-50 text-xl font-extrabold font-['Poppins'] rounded-3xl">{book ? 'Save' : 'Add'}</button>
            <button type="submit" className="bg-stone-400 w-full px-4 py-2 text-center text-stone-50 text-xl font-extrabold font-['Poppins'] rounded-3xl" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookModal;
