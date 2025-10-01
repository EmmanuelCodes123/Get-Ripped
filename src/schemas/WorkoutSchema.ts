import { ratings } from "@/lib/constants";
import z, { number } from "zod";

const ExerciseSchema = z.object({
  name: z.string().min(3, "Exercise name should be at least 3 characters long"),
  mode: z.enum(["reps", "time"]),
  sets: z.number().min(1, "Must have at least 1 set"),
  reps: z.number().min(0).optional(),      // Only required if mode = "reps"
  duration: z.number().min(0).optional(),  // Only required if mode = "time"
  rest_time: z.number().min(0),
});

export const WorkoutSchema = z.object({
  title: z.string().min(3, "Title should be at least 3 characters long"),
  exercises: z.array(ExerciseSchema).min(1, "At least one exercise required"),
  total_mins: z.number(),
  total_secs: z.number(),
  rating: z.enum(ratings).optional(),
  id: number().optional(),
});

export const WorkoutFormSchema = WorkoutSchema; // same rules for form

// ✅ Types
export type ExerciseType = z.infer<typeof ExerciseSchema>;
export type WorkoutType = z.infer<typeof WorkoutSchema>;
export type WorkoutFormType = z.infer<typeof WorkoutFormSchema>;
