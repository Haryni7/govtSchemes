import { createContext, useState, useEffect } from "react";

const SchemesContext = createContext();

const SchemesProvider = ({ children }) => {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    // Fetch schemes from an API or database (mocked here)
    const fetchSchemes = async () => {
      const data = [
        { id: 1, name: "Education Support", description: "Financial aid for students." },
        { id: 2, name: "Health Benefits", description: "Free medical support for citizens." },
        { id: 3, name: "Employment Assistance", description: "Job opportunities and training programs." },
      ];
      setSchemes(data);
    };
    fetchSchemes();
  }, []);

  return (
    <SchemesContext.Provider value={{ schemes }}>
      {children}
    </SchemesContext.Provider>
  );
};

export { SchemesContext, SchemesProvider };