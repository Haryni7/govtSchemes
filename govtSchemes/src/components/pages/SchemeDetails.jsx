import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SchemeDetails = () => {
  const { id } = useParams();
  const [scheme, setScheme] = useState(null);

  useEffect(() => {
    const fetchScheme = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/schemes/schemes/${id}`
        );
        setScheme(response.data);
      } catch (error) {
        console.error("Error fetching scheme:", error);
      }
    };
    fetchScheme();
  }, [id]);

  if (!scheme) return <p>Loading...</p>;

  const eligibility = scheme.eligibility || {};

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 border my-36">
      <h1 className="text-3xl font-bold text-blue-700 border-b pb-2">
        {scheme.scheme}
      </h1>

      <h2 className="text-xl font-semibold text-gray-800 mt-4">
        Eligibility Criteria
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        <p className="text-gray-700">
          <strong className="text-blue-600">Age:</strong>{" "}
          {eligibility.age?.min || "No Minimum"}
        </p>

        <p className="text-gray-700">
          <strong className="text-blue-600">Income:</strong>{" "}
          {eligibility.income?.min !== null
            ? eligibility.income.min
            : "No Minimum"}
        </p>

        <p className="text-gray-700">
          <strong className="text-blue-600">Caste:</strong>{" "}
          {eligibility.caste?.filter(Boolean).join(", ") || "All Castes"}
        </p>

        <p className="text-gray-700">
          <strong className="text-blue-600">Gender:</strong>{" "}
          {eligibility.gender?.filter(Boolean).join(", ") || "All Genders"}
        </p>

        <p className="text-gray-700">
          <strong className="text-blue-600">Education:</strong>{" "}
          {eligibility.education?.filter(Boolean).join(", ") ||
            "No Education Restriction"}
        </p>

        <p className="text-gray-700">
          <strong className="text-blue-600">Marital Status:</strong>{" "}
          {eligibility.maritalStatus?.filter(Boolean).join(", ") ||
            "All Marital Statuses"}
        </p>

        <p className="text-gray-700">
          <strong className="text-blue-600">Religion:</strong>{" "}
          {eligibility.religion?.filter(Boolean).join(", ") || "All Religions"}
        </p>

        <p className="text-gray-700">
          <strong className="text-blue-600">Occupation:</strong>{" "}
          {eligibility.occupation?.filter(Boolean).join(", ") ||
            "All Occupations"}
        </p>
      </div>

      <div className="flex justify-center mt-6">
        <a
          href="https://www.tn.gov.in/scheme_search.php"
          className="max-w-fit bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          target="_blank"
        >
          Apply on Site
        </a>
      </div>
    </div>
  );
};

export default SchemeDetails;
