import { createContext, useContext } from "react";
import type { WorkoutType } from "../schemas/WorkoutSchema";

interface AppContextType {
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  workouts: WorkoutType;
  setWorkouts: React.Dispatch<React.SetStateAction<WorkoutType>>;
  noOfDays: number;
  setNoOfDays: React.Dispatch<React.SetStateAction<number>>;
  showSettings: boolean;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
  progressRef: React.RefObject<HTMLDivElement | null>;
}

export const AppContext = createContext<AppContextType | null>(null);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContext.Provider");
  }
  return context;
}
