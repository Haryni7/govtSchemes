import { Link } from "react-router-dom";

const SchemeCard = ({ scheme }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800">{scheme.name}</h2>
      <p className="text-gray-600 mt-2">{scheme.description}</p>
      <Link 
        to={`/scheme/${scheme.id}`} 
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default SchemeCard;