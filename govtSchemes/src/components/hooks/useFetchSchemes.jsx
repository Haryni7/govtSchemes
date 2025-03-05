import { useState, useEffect } from "react";

const useFetchSchemes = () => {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        // Fetch schemes from an API or database (mocked here)
        const data = [
          { id: 1, name: "Education Support", description: "Financial aid for students." },
          { id: 2, name: "Health Benefits", description: "Free medical support for citizens." },
          { id: 3, name: "Employment Assistance", description: "Job opportunities and training programs." },
        ];
        setSchemes(data);
      } catch (err) {
        setError("Failed to fetch schemes");
        console.log(err)
      } finally {
        setLoading(false);
      }
    };
    fetchSchemes();
  }, []);

  return { schemes, loading, error };
};

export default useFetchSchemes;