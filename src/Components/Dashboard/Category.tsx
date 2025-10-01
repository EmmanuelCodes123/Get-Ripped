import { useAppContext } from "@/hooks/useAppContext";
import Workout from "../Workout";
import SelectCategory from "./SelectCategory";
import { motion } from "framer-motion";

export default function Category() {
  const { workouts } = useAppContext();
  
  function handleDelete(id: number) {
      workouts.filter((workout) => workout.id !== id);
  }

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
          {workouts.map(workout => (
            <motion.div
              key={workout.id}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: length + 0.5,
              }}
            >
              <Workout title={workout.title} rating={workout.rating} totalTime={workout.total_mins} onDelete={handleDelete} id={workout.id}/>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
