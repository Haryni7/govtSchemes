import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-white text-black p-4 shadow-md border-b-4 border-orange-600 top-0 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo and Title */}
        <div className="flex items-center space-x-4">
          {/* Tamil Nadu Emblem Placeholder */}
          <img
            src="https://www.tn.gov.in/sites/default/Tamil_Nadu_emb.png"
            alt="Tamil Nadu Emblem"
            className="size-18"
          />
          <Link to="/" className="text-xl font-bold flex flex-col">
            <span className="text-orange-600">தமிழ்நாடு அரசு</span>{" "}
            {/* Tamil: Tamil Nadu Government */}
            <span className="text-green-800">Government of Tamil Nadu</span>
          </Link>
        </div>
        <motion.h1
          className="text-3xl font-bold text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Government Schemes Finder
        </motion.h1>
        {/* Navigation Section */}
        <nav className="space-x-6 text-lg flex  text-center">
          <Link
            to="/"
            className="hover:text-orange-600 transition-colors duration-200"
          >
            முகப்பு {/* Tamil: Home */}
            <span className="block text-sm text-gray-600">Home</span>
          </Link>
          <Link
            to="/grievance"
            className="hover:text-orange-600 transition-colors duration-200"
          >
            புகார் {/* Tamil: Grievance */}
            <span className="block text-sm text-gray-600">Grievance</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
