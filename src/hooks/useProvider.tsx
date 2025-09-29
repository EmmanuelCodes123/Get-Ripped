import type React from "react";
import { AppContext } from "./useAppContext";
import { useRef, useState } from "react";
import type { ExerciseType, WorkoutType } from "../schemas/WorkoutSchema";

export default function UseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPopup, setShowPopup] = useState(false);
  const [exercises, setExercises] = useState<ExerciseType[]>([]);
  const [workouts, setWorkouts] = useState<WorkoutType[]>([])
  const [noOfDays, setNoOfDays] = useState(3);
  const [showSettings, setShowSettings] = useState(false);
  const [bodyPart, setBodyPart] = useState("arm");
  const progressRef = useRef<HTMLDivElement>(null);

  return (
    <AppContext
      value={{
        showPopup,
        setShowPopup,
        exercises,
        setExercises,
        noOfDays,
        setNoOfDays,
        showSettings,
        setShowSettings,
        progressRef,
        setBodyPart,
        bodyPart,
        workouts,
        setWorkouts
      }}
    >
      {children}
    </AppContext>
  );
}
