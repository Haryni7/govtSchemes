import { useState } from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    income: "",
    occupation: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <motion.h1 
        className="text-3xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Government Schemes Finder
      </motion.h1>
      
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <input 
          type="text" 
          name="name" 
          placeholder="Full Name" 
          value={formData.name} 
          onChange={handleChange} 
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="number" 
          name="age" 
          placeholder="Age" 
          value={formData.age} 
          onChange={handleChange} 
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="number" 
          name="income" 
          placeholder="Annual Income" 
          value={formData.income} 
          onChange={handleChange} 
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="text" 
          name="occupation" 
          placeholder="Occupation" 
          value={formData.occupation} 
          onChange={handleChange} 
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="text" 
          name="location" 
          placeholder="Location" 
          value={formData.location} 
          onChange={handleChange} 
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Search
        </button>
      </div>
    </div>
  );
};

export default HomePage;