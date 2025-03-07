import { useLocation } from "react-router-dom";

const UserSchemeDetails = () => {
  const location = useLocation();
  const schemes = location.state?.schemes || []; // Access schemes from navigation state, default to empty array if not found

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
        Available Schemes / கிடைக்கும் திட்டங்கள்
      </h1>

      {schemes.length === 0 ? (
        <p className="text-center text-gray-600">
          No schemes found based on your criteria. / உங்கள் அளவுகோல்களின்
          அடிப்படையில் எந்த திட்டங்களும் கிடைக்கவில்லை.
        </p>
      ) : (
        <div className="grid gap-4 max-w-4xl mx-auto">
          {schemes.map((scheme) => (
            <div
              key={scheme._id} // Assuming each scheme has a unique _id from MongoDB
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-green-800">
                {scheme.name}
              </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserSchemeDetails;
