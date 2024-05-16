import { Book } from "../../interfaces/bookInterface";

type CardProps = {
  book: Book;
  userRole: number | undefined;
};

const Card = ({ book, userRole } : CardProps) => {
  return (
    <div key={book.id} className="bg-transparent border-2 border-[#E6DBCD] shadow-md rounded-lg p-4 flex flex-col justify-between">
      <div>
        <div className="flex justify-center">
          <img
            src={book.image}
            alt={book.title}
            className="h-48 w-32 object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold">{book.title}</h2>
          <p className="text-gray-500">by {book.author}</p>
          <p className="text-gray-500">${book.price}</p>
        </div>
      </div>
      {
        userRole === 1 && 
        <button className="bg-red-400 text-white font-semibold px-4 py-2 rounded-lg self-end">
          Add to Cart
        </button>
      }
      {
        userRole == 0 && 
        <div className="flex justify-end">
          <button className="bg-lime-600 text-white font-semibold mx-4 px-4 py-2 rounded-lg">Edit</button>
          <button className="bg-red-400 text-white font-semibold px-4 py-2 rounded-lg">Delete</button>
        </div>
      }
    </div>
  );
};


export default Card;