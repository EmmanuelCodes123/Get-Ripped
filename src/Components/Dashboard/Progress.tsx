import { motion } from "framer-motion";
import MotivationalQuotes from "../MotivationalQuotes";

export default function Progress() {
  return (
    <>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="w-full p-3 border-[var(--accent-clr)] rounded-2xl bg-[var(--primary-clr)] flex flex-col mt-4"
      >
        <div className="flex justify-center">
          <h2 className="text-xl">Your Progress</h2>
        </div>
        <div className="flex justify-center w-full mt-4 space-x-2">
          {Array.from({ length: 4, }, (_, i) => (
            <div key={i} className="rounded-full w-10 h-10 border-[var(--accent-clr)] border-4"></div>
          ))}
        </div>
        <div className="flex space-x-15 justify-center mt-4 w-full ">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl">16</h2>
            <h2 className="text-xl">Workouts</h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl">10:00</h2>
            <h2 className="text-xl">Mins</h2>
          </div>
        </div>
        <MotivationalQuotes />
      </motion.div>
    </>
  );
}
