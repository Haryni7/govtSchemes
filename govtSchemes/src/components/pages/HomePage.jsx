import FormSection from "../FormSection";
import SchemeList from "../SchemeList";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gray-100 mt-36">
      <motion.h1
        className="text-3xl font-bold text-center text-orange-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Schemes Finder - தமிழ்நாடு அரசு திட்டங்கள்
      </motion.h1>
      <motion.div
        className="text-md  text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        No need to Select All Filters <br /> அனைத்து வடிப்பான்களையும்
        தேர்ந்தெடுக்க வேண்டிய அவசியமில்லை.
      </motion.div>

      <FormSection />

      <SchemeList />
    </div>
  );
};

export default HomePage;
