import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SchemeDetails = () => {
  const { id } = useParams();
  const [scheme, setScheme] = useState(null);

  useEffect(() => {
    const fetchScheme = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/schemes/schemes/${id}`
      );
      setScheme(response.data);
    };
    fetchScheme();
  }, [id]);

  if (!scheme) return <p>Loading...</p>;

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 border my-28">
      <h1 className="text-3xl font-bold text-blue-700 border-b pb-2">
        {scheme.scheme}
      </h1>

      <h2 className="text-xl font-semibold text-gray-800 mt-4">
        Eligibility Criteria
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        <p className="text-gray-700">
          <strong className="text-blue-600">Age:</strong>{" "}
          {scheme.eligibility.age.min} - {scheme.eligibility.age.max}
        </p>

        <p className="text-gray-700">
          <strong className="text-blue-600">Income:</strong>{" "}
          {scheme.eligibility.income.min} - {scheme.eligibility.income.max}
        </p>

        <p className="text-gray-700">
          <strong className="text-blue-600">Caste:</strong>{" "}
          {scheme.eligibility.caste.filter(Boolean).join(", ")}
        </p>

        <p className="text-gray-700">
          <strong className="text-blue-600">Gender:</strong>{" "}
          {scheme.eligibility.gender.filter(Boolean).join(", ")}
        </p>

        <p className="text-gray-700">
          <strong className="text-blue-600">Education:</strong>{" "}
          {scheme.eligibility.education.filter(Boolean).join(", ")}
        </p>

        <p className="text-gray-700">
          <strong className="text-blue-600">Marital Status:</strong>{" "}
          {scheme.eligibility.maritalStatus.filter(Boolean).join(", ")}
        </p>

        <p className="text-gray-700">
          <strong className="text-blue-600">Religion:</strong>{" "}
          {scheme.eligibility.religion.filter(Boolean).join(", ")}
        </p>

        <p className="text-gray-700">
          <strong className="text-blue-600">Occupation:</strong>{" "}
          {scheme.eligibility.occupation.join(", ")}
        </p>

        <p className="text-gray-700">
          <strong className="text-blue-600">Location:</strong>{" "}
          {scheme.eligibility.location.filter(Boolean).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default SchemeDetails;
