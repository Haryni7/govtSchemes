import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/components/pages/HomePage";
import SchemeDetails from "../src/components/pages/SchemeDetails";
import GrievanceForm from "../src/components/pages/GrievanceForm";
import Header from "./components/Header";
import UserSchemeDetails from "./components/pages/UserSchemeDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schemes/:id" element={<SchemeDetails />} />
          <Route path="/grievance" element={<GrievanceForm />} />
          <Route path="/UserSchemeDetails" element={<UserSchemeDetails />} />.
        </Routes>
      </div>
    </Router>
  );
}

export default App;
