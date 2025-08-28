import z from "zod";

const ratings = ["amateur", "intermediate", "advanced", "expert"] as const;

export const WorkoutSchema = z.object({
  title: z.string(),
  exercise: z.object({
    name: z.string(),
    mode: z.enum(["reps", "time"]),
    sets: z.number(),
    reps: z.number(),
    rest_time: z.number(),
    duration: z.number(),
  }),
  total_time: z.number(),
  rating: z.enum(ratings),
});

export const WorkoutFormSchema = z.object({
  title: z.string().min(3, "Title should be at least 3 characters long"),
  exercise: z.object({
    name: z
      .string()
      .min(3, "Exercise name should be at least 3 characters long"),
    mode: z
      .enum(["reps", "time"])
      .refine((val) => val === "reps" || val === "time", {
        message: "Mode must be either 'reps' or 'time'",
      }),
    sets: z.number(),
    reps: z.number(),
    rest_time: z.number(),
    duration: z.number(),
  }),
  total_time: z.number(),
  rating: z.enum(ratings),
});

export type WorkoutType = z.infer<typeof WorkoutSchema[]>;
export type WorkoutFormType = z.infer<typeof WorkoutFormSchema>;