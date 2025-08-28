import type React from "react";
import { AppContext } from "./useAppContext";
import { useRef, useState } from "react";
import type { WorkoutType } from "../schemas/WorkoutSchema";

export default function UseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPopup, setShowPopup] = useState(false);
  const [workouts, setWorkouts] = useState<WorkoutType>([]);
  const [noOfDays, setNoOfDays] = useState(3);
  const [showSettings, setShowSettings] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  return (
    <AppContext
      value={{
        showPopup,
        setShowPopup,
        workouts,
        setWorkouts,
        noOfDays,
        setNoOfDays,
        showSettings,
        setShowSettings,
        progressRef
      }}
    >
      {children}
    </AppContext>
  );
}
