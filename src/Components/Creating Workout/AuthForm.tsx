import { useForm } from "react-hook-form";
import {
  WorkoutFormSchema,
  type WorkoutFormType,
} from "../../schemas/WorkoutSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import NewWorkout from "./NewWorkout";
import { useMemo } from "react";
import generatePremaidExercise from "@/lib/generatePremaidExercise";
import { useAppContext } from "@/hooks/useAppContext";
import { useNavigate } from "react-router-dom";
import generateId from "@/lib/generateId";

export default function AuthForm() {
  const form = useForm<WorkoutFormType>({
    resolver: zodResolver(WorkoutFormSchema),
    defaultValues: {
      title: "Arm",
      total_mins: 0,
      total_secs: 0,
      exercises: generatePremaidExercise(),
    },
  });

  const { watch } = form;
  const navigate = useNavigate();

  const exercises = watch("exercises");
  const { setWorkouts } = useAppContext();
  const { totalMins, totalSecs } = useMemo(() => {
    if (!exercises || exercises.length === 0) {
      return { totalMins: 0, totalSecs: 0 };
    }

    let total = 0;

    exercises.forEach((ex) => {
      if (!ex.sets || ex.sets <= 0) return;

      if (ex.mode === "time") {
        total +=
          ex.sets * (ex.duration || 0) + (ex.sets - 1) * (ex.rest_time || 0);
      } else {
        // reps mode → don’t ask per-rep duration, just count rests
        total += (ex.sets - 1) * (ex.rest_time || 0);
      }
    });

    return {
      totalMins: Math.floor(total / 60),
      totalSecs: total % 60,
    };
  }, [exercises]);

  function onSubmit(values: WorkoutFormType) {
    console.log("Workout Submitted:", values);
    values.id = generateId()
    setWorkouts((prev) => [...prev, values]);
    navigate("/");
  }

  function belowZero(number: number) {
    return number < 0 ? 0 : number;
  }

  return (
    <NewWorkout
      form={form}
      onSubmit={onSubmit}
      belowZero={belowZero}
      totalMins={totalMins}
      totalSecs={totalSecs}
    />
  );
}
