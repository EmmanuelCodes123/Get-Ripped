import type { UseFormReturn } from "react-hook-form";
import type { WorkoutFormType } from "../../schemas/WorkoutSchema";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

export default function NewWorkout({
  form,
}: {
  form: UseFormReturn<WorkoutFormType>;
}) {
  const onSubmit = (data: WorkoutFormType) => {
    console.log(data);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <header>
            <h1>Create A Workout</h1>
          </header>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
}
