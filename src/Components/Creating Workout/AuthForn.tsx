import { useForm } from "react-hook-form";
import { WorkoutFormSchema, type WorkoutFormType } from "../../schemas/WorkoutSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import NewWorkout from "./NewWorkout";

export default function AuthForm(){
    const form = useForm<WorkoutFormType>({
        resolver: zodResolver(WorkoutFormSchema), defaultValues: {}
    })

    return <>
        <NewWorkout form={form}/>
    </>
}