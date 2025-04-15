import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SchemeList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await axios.get("https://backend-a9uh.onrender.com/api/schemes/");
        // Assuming the response data is an array of scheme objects with a 'scheme' field
        // const schemeNames = response.data;
        setSchemes(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch schemes. Please try again later.");
        setLoading(false);
      }
    };

    fetchSchemes();
  }, []); // Empty dependency array means it runs once on mount
  // console.log(schemes);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query as user types
  };

  // Filter schemes based on search query
  const filteredSchemes = schemes.filter((scheme) =>
    scheme.scheme.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // console.log(schemes);
  return (
    <>
      {/* Schemes List Section */}
      <div className="w-full max-w-4xl max-h-[600px] bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Available Schemes / கிடைக்கும் திட்டங்கள்
        </h2>

        {/* Search Filter Input */}
        <input
          type="text"
          placeholder="Search Schemes / திட்டங்களைத் தேடு"
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full max-w-md p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        {/* Schemes List */}

        <div className="w-full max-h-[1200px] overflow-y-auto bg-white shadow-lg rounded-xl p-6">
          {loading ? (
            <p className="text-gray-500 text-center animate-pulse">
              🔄 Loading schemes... / 📜 திட்டங்கள் ஏற்றப்படுகின்றன...
            </p>
          ) : error ? (
            <p className="text-red-500 text-center font-semibold">{error}</p>
          ) : (
            <ul className="list-disc pl-6 space-y-4 text-gray-800">
              {filteredSchemes.length > 0 ? (
                filteredSchemes.map((scheme, index) => (
                  <motion.li
                    key={index}
                    className=" text-gray-700 hover:text-orange-800 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={`/schemes/${scheme._id}`}
                      className="block w-full h-full no-underline"
                    >
                      {scheme.scheme}
                    </Link>
                  </motion.li>
                ))
              ) : (
                <li className="text-gray-500 text-center italic">
                  🚫 No schemes found / திட்டங்கள் எதுவும் கிடைக்கவில்லை
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
export default SchemeList;
