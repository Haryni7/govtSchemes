import { useState } from "react";

const GrievanceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scheme: "",
    message: ""
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
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Grievance Form</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <label className="block mb-2 text-gray-700">Name</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          required
        />

        <label className="block mb-2 text-gray-700">Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          required
        />

        <label className="block mb-2 text-gray-700">Scheme</label>
        <input 
          type="text" 
          name="scheme" 
          value={formData.scheme} 
          onChange={handleChange} 
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          required
        />

        <label className="block mb-2 text-gray-700">Message</label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          className="w-full p-2 border border-gray-300 rounded-lg mb-4 h-24"
          required
        ></textarea>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default GrievanceForm;