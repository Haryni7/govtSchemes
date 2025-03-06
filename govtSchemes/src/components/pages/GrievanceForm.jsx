import { useState } from "react";
import { motion } from "framer-motion";

const GrievanceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scheme: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Grievance submitted:", formData);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <motion.h1
        className="text-3xl font-bold text-center text-orange-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Grievance Form / புகார் படிவம்
      </motion.h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
      >
        <div className="mb-4">
          <label className="block mb-2 text-green-800 font-semibold">
            Name / பெயர்
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your name / உங்கள் பெயரை உள்ளிடவும்"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-green-800 font-semibold">
            Email / மின்னஞ்சல்
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your email / உங்கள் மின்னஞ்சலை உள்ளிடவும்"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-green-800 font-semibold">
            Scheme / திட்டம்
          </label>
          <input
            type="text"
            name="scheme"
            value={formData.scheme}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter scheme name / திட்டத்தின் பெயரை உள்ளிடவும்"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-green-800 font-semibold">
            Message / செய்தி
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-24"
            placeholder="Enter your grievance / உங்கள் புகாரை உள்ளிடவும்"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200"
        >
          Submit / சமர்ப்பி
        </button>
      </form>
    </div>
  );
};

export default GrievanceForm;
