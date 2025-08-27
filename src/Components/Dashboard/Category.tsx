import Workouts from "../Workouts";
import SelectCategory from "./SelectCategory";
import { motion } from "framer-motion";

export default function Category() {
  return (
    <>
      <div>
        <SelectCategory />
      </div>
      <div className="mt-4 w-full">
        <div>
          <h1 className="text-l">Your Workouts</h1>
        </div>
        <div className="flex w-full overflow-scroll gap-2 mt-2">
          {Array.from({ length: 4 }, () => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: length + 0.5,
              }}
            >
              <Workouts />
            </motion.div>
          ))}
        </div>
      </div>
      {/* Add an expanding animation to the top */}
    </>
  );
}
