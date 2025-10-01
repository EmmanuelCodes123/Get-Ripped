// import type { WorkoutType } from "@/schemas/WorkoutSchema";


// export default function rateWorkout(workout: WorkoutType): { rating: "amateur" | "intermediate" | "advanced" | "expert"; notes: string[] } {
//   let totalReps = 0;
//   let totalDuration = 0;
//   let hasPush = false, hasPull = false, hasCore = false, hasLegs = false;
//   const notes: string[] = [];

//   workout.exercises.forEach(ex => {
//     if (ex.mode === "reps" && ex.reps) {
//       totalReps += ex.reps * ex.sets;
//       if (ex.reps > 30) notes.push(`${ex.name}: very high reps in one set`);
//     }
//     if (ex.mode === "time" && ex.duration) {
//       totalDuration += ex.duration * ex.sets;
//     }
//     if (ex.rest_time < 15) notes.push(`${ex.name}: short rest makes it harder`);

//     // crude category tagging
//     const n = ex.name.toLowerCase();
//     if (n.includes("push") || n.includes("dip") || n.includes("skull")) hasPush = true;
//     if (n.includes("pull")) hasPull = true;
//     if (n.includes("sit") || n.includes("plank") || n.includes("crunch")) hasCore = true;
//     if (n.includes("squat") || n.includes("lunge") || n.includes("leg")) hasLegs = true;
//   });

//   // Balance check
//   if (!hasPull) notes.push("Workout lacks pulling movements");
//   if (!hasCore) notes.push("No core work included");
//   if (!hasLegs) notes.push("No leg work included");

//   // Difficulty calculation
//   const workload = totalReps + Math.floor(totalDuration / 5); // duration weighted down
//   let rating: "easy" | "intermediate" | "hard";

//   if (workload < 80) rating = "easy";
//   else if (workload < 160) rating = "intermediate";
//   else rating = "hard";

//   return { rating, notes };
// }
