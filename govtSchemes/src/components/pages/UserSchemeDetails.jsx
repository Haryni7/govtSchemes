import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

const UserSchemeDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Ensure schemes exist, otherwise default to an empty array
  const schemes = location.state?.schemes || [];

  useEffect(() => {
    if (!location.state) {
      alert("No schemes found. Redirecting...");
      navigate("/"); // Redirect to home or previous page
    }
  }, [location, navigate]);

  // console.log("Schemes:", schemes);

  return (
    <div className="min-h-screen p-6 bg-gray-100 mt-36">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
        Available Schemes / கிடைக்கும் திட்டங்கள்
      </h1>

      <p className="text-center text-gray-700 font-medium">
        Total Schemes Found: {schemes.length}
      </p>

      {schemes.length === 0 ? (
        <p className="text-center text-gray-500 italic">
          No schemes found based on your criteria. / உங்கள் அளவுகோல்களின்
          அடிப்படையில் எந்த திட்டங்களும் கிடைக்கவில்லை.
        </p>
      ) : (
        <ul className="space-y-4">
          {schemes.map((scheme) => (
            <Link
              key={scheme._id}
              to={`/schemes/${scheme._id}`}
              className="block"
            >
              <li className="p-2 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:bg-orange-50 transition-all duration-300">
                <h2 className="text-lg font-semibold text-gray-800">
                  {scheme.scheme}
                </h2>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserSchemeDetails;
