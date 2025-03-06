import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    income: "",
    caste: "",
    gender: "",
    education: "",
    maritalStatus: "",
    religion: "",
    occupation: "",
    location: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [schemes, setSchemes] = useState([]); // State to store fetched schemes
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch schemes from backend when component mounts
  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/schemes/");
        // Assuming the response data is an array of scheme objects with a 'scheme' field
        const schemeNames = response.data.map((item) => item.scheme);
        setSchemes(schemeNames);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch schemes. Please try again later.");
        setLoading(false);
      }
    };

    fetchSchemes();
  }, []); // Empty dependency array means it runs once on mount

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query as user types
  };

  // Filter schemes based on search query
  const filteredSchemes = schemes.filter((scheme) =>
    scheme.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <motion.h1
        className="text-3xl font-bold text-center text-orange-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Schemes Finder - தமிழ்நாடு அரசு திட்டங்கள்
      </motion.h1>

      {/* Form Section */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name / முழு பெயர்"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="mb-4">
          <select
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Age / வயதை தேர்ந்தெடு</option>
            <option value="Below 18">Below 18 / 18 க்கு கீழ்</option>
            <option value="18-35">18-35</option>
            <option value="35-60">35-60</option>
            <option value="Above 60">Above 60 / 60 க்கு மேல்</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="income"
            value={formData.income}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Income / வருமானத்தை தேர்ந்தெடு</option>
            <option value="Below 1.5 Lakh">
              Below 1.5 Lakh / 1.5 லட்சத்திற்கு கீழ்
            </option>
            <option value="1.5-3 Lakhs">1.5-3 Lakhs</option>
            <option value="3-6 Lakhs">3-6 Lakhs</option>
            <option value="6-12 Lakhs">6-12 Lakhs</option>
            <option value="Above 12 Lakhs">
              Above 12 Lakhs / 12 லட்சத்திற்கு மேல்
            </option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="caste"
            value={formData.caste}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Caste / சாதியை தேர்ந்தெடு</option>
            <option value="SC">SC / எஸ்சி (Scheduled Caste)</option>
            <option value="ST">ST / எஸ்டி (Scheduled Tribe)</option>
            <option value="OBC">OBC / ஓபிசி (Other Backward Class)</option>
            <option value="MBC">MBC / எம்பிசி (Most Backward Class)</option>
            <option value="FC">FC / எஃப்சி (Forward Caste)</option>
            <option value="General">General / பொது</option>
            <option value="Others">Others / மற்றவை</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Gender / பாலினத்தை தேர்ந்தெடு</option>
            <option value="Male">Male / ஆண்</option>
            <option value="Female">Female / பெண்</option>
            <option value="Other">Other / மற்றவை</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Education / கல்வியை தேர்ந்தெடு</option>
            <option value="Below 8th">
              Below 8th / 8 ஆம் வகுப்புக்கு கீழ்
            </option>
            <option value="8th Pass">8th Pass / 8 ஆம் வகுப்பு</option>
            <option value="10th Pass">10th Pass / 10 ஆம் வகுப்பு</option>
            <option value="12th Pass">12th Pass / 12 ஆம் வகுப்பு</option>
            <option value="Graduate">Graduate / பட்டதாரி</option>
            <option value="Postgraduate">Postgraduate / முதுகலை</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">
              Select Marital Status / திருமண நிலையை தேர்ந்தெடு
            </option>
            <option value="Single">Single / திருமணமாகாதவர்</option>
            <option value="Married">Married / திருமணமானவர்</option>
            <option value="Divorced">Divorced / விவாகரத்து பெற்றவர்</option>
            <option value="Widowed">Widowed / விதவை/விதவர்</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Religion / மதத்தை தேர்ந்தெடு</option>
            <option value="Hindu">Hindu / இந்து</option>
            <option value="Muslim">Muslim / முஸ்லிம்</option>
            <option value="Christian">Christian / கிறிஸ்தவர்</option>
            <option value="Sikh">Sikh / சீக்கியர்</option>
            <option value="Other">Other / மற்றவை</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Occupation / தொழிலை தேர்ந்தெடு</option>
            <option value="Agriculture">Agriculture / விவசாயம்</option>
            <option value="Government Employee">
              Government Employee / அரசு ஊழியர்
            </option>
            <option value="Private Sector">
              Private Sector / தனியார் துறை
            </option>
            <option value="Self-Employed">Self-Employed / சுயதொழில்</option>
            <option value="Unemployed">Unemployed / வேலையில்லாதவர்</option>
            <option value="Student">Student</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Location / இடத்தை தேர்ந்தெடு</option>
            <option value="Ariyalur">Ariyalur / அரியலூர்</option>
            <option value="Chengalpattu">Chengalpattu / செங்கல்பட்டு</option>
            <option value="Chennai">Chennai / சென்னை</option>
            <option value="Coimbatore">Coimbatore / கோயம்புத்தூர்</option>
            <option value="Cuddalore">Cuddalore / கடலூர்</option>
            <option value="Dharmapuri">Dharmapuri / தர்மபுரி</option>
            <option value="Dindigul">Dindigul / திண்டுக்கல்</option>
            <option value="Erode">Erode / ஈரோடு</option>
            <option value="Kallakurichi">Kallakurichi / கல்லக்குறிச்சி</option>
            <option value="Kanchipuram">Kanchipuram / காஞ்சிபுரம்</option>
            <option value="Kanyakumari">Kanyakumari / கன்னியாகுமரி</option>
            <option value="Karur">Karur / கரூர்</option>
            <option value="Krishnagiri">Krishnagiri / கிருஷ்ணகிரி</option>
            <option value="Madurai">Madurai / மதுரை</option>
            <option value="Mayiladuthurai">Mayiladuthurai / மயிலாடுதுறை</option>
            <option value="Nagapattinam">Nagapattinam / நாகப்பட்டினம்</option>
            <option value="Namakkal">Namakkal / நாமக்கல்</option>
            <option value="Perambalur">Perambalur / பெரம்பலூர்</option>
            <option value="Pudukkottai">Pudukkottai / புதுக்கோட்டை</option>
            <option value="Ramanathapuram">Ramanathapuram / ராமநாதபுரம்</option>
            <option value="Ranipet">Ranipet / ராணிப்பேட்டை</option>
            <option value="Salem">Salem / சேலம்</option>
            <option value="Sivaganga">Sivaganga / சிவகங்கை</option>
            <option value="Tenkasi">Tenkasi / தென்காசி</option>
            <option value="Thanjavur">Thanjavur / தஞ்சாவூர்</option>
            <option value="Theni">Theni / தேனி</option>
            <option value="Thoothukudi">Thoothukudi / தூத்துக்குடி</option>
            <option value="Tiruchirappalli">
              Tiruchirappalli / திருச்சிராப்பள்ளி
            </option>
            <option value="Tirunelveli">Tirunelveli / திருநெல்வேலி</option>
            <option value="Tirupathur">Tirupathur / திருப்பத்தூர்</option>
            <option value="Tiruppur">Tiruppur / திருப்பூர்</option>
            <option value="Tiruvallur">Tiruvallur / திருவள்ளூர்</option>
            <option value="Tiruvannamalai">
              Tiruvannamalai / திருவண்ணாமலை
            </option>
            <option value="Tiruvarur">Tiruvarur / திருவாரூர்</option>
            <option value="Vellore">Vellore / வேலூர்</option>
            <option value="Viluppuram">Viluppuram / விழுப்புரம்</option>
            <option value="Virudhunagar">Virudhunagar / விருதுநகர்</option>
            <option value="Other">Other / மற்றவை</option>
          </select>
        </div>

        <button className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200">
          Search / தேடு
        </button>
      </div>

      {/* Schemes List Section */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
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
                    className=" text-gray-700 hover:text-orange-800 transition-all duration-300  rounded-lg shadow-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      to={`/schemes/${schemes._id}`}
                      className="block w-full h-full"
                    >
                      {scheme}
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
    </div>
  );
};

export default HomePage;
