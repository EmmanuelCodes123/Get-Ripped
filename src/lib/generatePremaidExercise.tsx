import type { ExerciseType } from "@/schemas/WorkoutSchema";
import { useSearchParams } from "react-router-dom";

export default function generatePremaidExercise(): ExerciseType[] {
  const [searchParams] = useSearchParams();
  const bodyPart = searchParams.get("part") || "arm";

  switch (bodyPart.toLowerCase()) {
    case "arm":
      return [
        {
          name: "Diamond Push Ups",
          mode: "reps",
          reps: 12,
          sets: 3,
          rest_time: 30,
          duration: 0,
        },
        {
          name: "Tricep Dips (Chair)",
          mode: "reps",
          reps: 10,
          sets: 3,
          rest_time: 30,
          duration: 0,
        },
        {
          name: "Close Grip Push Ups",
          mode: "reps",
          reps: 12,
          sets: 3,
          rest_time: 30,
          duration: 0,
        },
        {
          name: "Plank to Push Up",
          mode: "reps",
          reps: 8,
          sets: 3,
          rest_time: 30,
          duration: 0,
        },
        {
          name: "Arm Circles",
          mode: "time",
          duration: 30,
          sets: 3,
          rest_time: 20,
          reps: 0,
        },
      ];

    case "chest":
      return [
        {
          name: "Push Ups",
          mode: "reps",
          reps: 12,
          sets: 3,
          rest_time: 30,
          duration: 0,
        },
        {
          name: "Incline Push Ups",
          mode: "reps",
          reps: 10,
          sets: 3,
          rest_time: 30,
          duration: 0,
        },
        {
          name: "Decline Push Ups",
          mode: "reps",
          reps: 8,
          sets: 3,
          rest_time: 30,
          duration: 0,
        },
        {
          name: "Wide Push Ups",
          mode: "reps",
          reps: 12,
          sets: 3,
          rest_time: 30,
          duration: 0,
        },
        {
          name: "Chest Dips (Chair)",
          mode: "reps",
          reps: 10,
          sets: 3,
          rest_time: 40,
          duration: 0,
        },
      ];

    case "back":
      return [
        {
          name: "Superman Hold",
          mode: "time",
          duration: 20,
          sets: 3,
          rest_time: 30,
          reps: 0,
        },
        {
          name: "Reverse Snow Angels",
          mode: "reps",
          reps: 12,
          sets: 3,
          rest_time: 25,
          duration: 0,
        },
        {
          name: "Prone Y-T-W Raises",
          mode: "reps",
          reps: 6,
          sets: 3,
          rest_time: 30,
          duration: 0,
        },
        {
          name: "Bird Dog",
          mode: "time",
          duration: 30,
          sets: 3,
          rest_time: 30,
          reps: 0,
        },
        {
          name: "Reverse Plank",
          mode: "time",
          duration: 25,
          sets: 3,
          rest_time: 30,
          reps: 0,
        },
      ];

    case "legs":
      return [
        {
          name: "Squats",
          mode: "reps",
          reps: 15,
          sets: 3,
          rest_time: 30,
          duration: 0,
        },
        {
          name: "Lunges",
          mode: "reps",
          reps: 10,
          sets: 3,
          rest_time: 30,
          duration: 0,
        },
        {
          name: "Glute Bridges",
          mode: "reps",
          reps: 12,
          sets: 3,
          rest_time: 25,
          duration: 0,
        },
        {
          name: "Wall Sit",
          mode: "time",
          duration: 30,
          sets: 3,
          rest_time: 30,
          reps: 0,
        },
        {
          name: "Calf Raises",
          mode: "reps",
          reps: 20,
          sets: 3,
          rest_time: 20,
          duration: 0,
        },
      ];

    case "abs":
      return [
        {
          name: "Crunches",
          mode: "reps",
          reps: 15,
          sets: 3,
          rest_time: 25,
          duration: 0,
        },
        {
          name: "Leg Raises",
          mode: "reps",
          reps: 10,
          sets: 3,
          rest_time: 30,
          duration: 0,
        },
        {
          name: "Plank",
          mode: "time",
          duration: 30,
          sets: 3,
          rest_time: 30,
          reps: 0,
        },
        {
          name: "Bicycle Crunches",
          mode: "reps",
          reps: 12,
          sets: 3,
          rest_time: 30,
          duration: 0,
        },
        {
          name: "Mountain Climbers",
          mode: "time",
          duration: 20,
          sets: 3,
          rest_time: 25,
          reps: 0,
        },
      ];

    default:
      return [];
  }
}
