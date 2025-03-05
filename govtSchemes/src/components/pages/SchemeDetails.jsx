import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SchemeDetails = () => {
  const { id } = useParams();
  const [scheme, setScheme] = useState(null);

  useEffect(() => {
    // Fetch scheme details from an API or database (mocked here)
    const fetchScheme = async () => {
      const data = {
        id,
        name: "Mock Scheme Name",
        description: "This is a detailed description of the scheme.",
        eligibility: "Eligibility criteria details.",
        benefits: "List of benefits included in the scheme.",
      };
      setScheme(data);
    };
    fetchScheme();
  }, [id]);

  if (!scheme) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{scheme.name}</h1>
        <p className="text-gray-700 mb-4">{scheme.description}</p>
        <h2 className="text-xl font-semibold text-gray-800">Eligibility</h2>
        <p className="text-gray-600 mb-4">{scheme.eligibility}</p>
        <h2 className="text-xl font-semibold text-gray-800">Benefits</h2>
        <p className="text-gray-600">{scheme.benefits}</p>
      </div>
    </div>
  );
};

export default SchemeDetails;