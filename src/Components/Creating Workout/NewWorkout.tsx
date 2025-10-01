import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import type { WorkoutFormType } from "@/schemas/WorkoutSchema";
import { useFieldArray } from "react-hook-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useEffect } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "@hello-pangea/dnd";
import { GripVertical } from "lucide-react";

export default function WorkoutForm({
  form,
  onSubmit,
  belowZero,
  totalMins,
  totalSecs,
}: {
  form: any;
  onSubmit: (values: WorkoutFormType) => void;
  belowZero: (number: number) => number;
  totalMins: number;
  totalSecs: number;
}) {
  const { control, watch, setValue } = form;
  const { fields, append, remove, move } = useFieldArray({
    control,
    name: "exercises",
  });

  useEffect(() => {
    setValue("total_mins", totalMins);
    setValue("total_secs", totalSecs);
  }, [totalMins, totalSecs, setValue]);

  function handleDragEnd(result: DropResult) {
    if (!result.destination) return;
    move(result.source.index, result.destination.index);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 p-3 bg-[var(--primary-clr)] h-screen overflow-auto"
      >
        <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex justify-center text-3xl">
                Workout Title
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. Chest Day"
                  {...field}
                  className="input"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Total Time */}
        <div className="flex gap-2 items-center text-5xl font-semibold justify-center">
          <p>{String(totalMins).padStart(2, "0")}:</p>
          <p>{String(totalSecs).padStart(2, "0")}</p>
          <FormField
            control={control}
            name="total_mins"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} type="hidden" value={totalMins} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="total_secs"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} type="hidden" value={totalSecs} />
                </FormControl>
              </FormItem>
            )}
          />
          <Popover>
            <PopoverTrigger asChild>
              <p className="rounded-full border border-black text-xs text-gray-400 w-4 h-fit text-center cursor-pointer">
                ?
              </p>
            </PopoverTrigger>
            <PopoverContent
              side="top"
              align="center"
              className="max-w-xs text-sm bg-white/5"
            >
              <p className="text-xs">
                The total can only be calculated accurately when all exercises
                use the <strong>time</strong> format, not reps.
              </p>
            </PopoverContent>
          </Popover>
        </div>

        {/* Exercises with Drag and Drop */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="exercises">
            {(provided) => (
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-2"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {fields.map((field, index) => {
                  const exercise = watch(`exercises.${index}`);

                  return (
                    <Draggable
                      key={field.id}
                      draggableId={field.id}
                      index={index}
                    >
                      {(draggableProvided) => (
                        <AccordionItem
                          value={`exercise-${index}`}
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.draggableProps}
                        >
                          <AccordionTrigger className="bg-[var(--secondary-clr)] px-1.5 text-black font-bold">
                            <div className="flex gap-x-5 items-center w-full">
                              <span
                                className="cursor-grab active:cursor-grabbing"
                                {...draggableProvided.dragHandleProps}
                              >
                                <GripVertical className="text-gray-600" />
                              </span>
                              {exercise?.name || `Exercise ${index + 1}`}{" "}
                              {exercise?.mode === "reps"
                                ? `(${exercise?.sets || 0} × ${
                                    exercise?.reps || 0
                                  } reps)`
                                : `(${exercise?.sets || 0} × ${
                                    exercise?.duration || 0
                                  }s)`}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="bg-[var(--secondary-clr)] text-black font-bold">
                            <div className="p-4 space-y-4 border rounded-lg">
                              {/* Exercise Name */}
                              <FormField
                                control={control}
                                name={`exercises.${index}.name`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Exercise Name</FormLabel>
                                    <FormControl>
                                      <Input
                                        className="input"
                                        placeholder="e.g. Push Ups"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              {/* Mode */}
                              <FormField
                                control={control}
                                name={`exercises.${index}.mode`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Mode</FormLabel>
                                    <FormControl>
                                      <select
                                        {...field}
                                        className="w-full rounded-md border p-2"
                                      >
                                        <option value="reps">Reps</option>
                                        <option value="time">Time</option>
                                      </select>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              {/* Conditional fields */}
                              {exercise?.mode === "reps" ? (
                                <FormField
                                  control={control}
                                  name={`exercises.${index}.reps`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Reps</FormLabel>
                                      <FormControl>
                                        <Input
                                          className="input"
                                          type="number"
                                          placeholder="e.g. 12"
                                          {...field}
                                          onChange={(e) =>
                                            field.onChange(
                                              belowZero(
                                                parseInt(e.target.value, 10) ||
                                                  0
                                              )
                                            )
                                          }
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              ) : (
                                <FormField
                                  control={control}
                                  name={`exercises.${index}.duration`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Time (in seconds)</FormLabel>
                                      <FormControl>
                                        <Input
                                          className="input"
                                          type="number"
                                          placeholder="e.g. 45"
                                          {...field}
                                          onChange={(e) =>
                                            field.onChange(
                                              belowZero(
                                                parseInt(e.target.value, 10) ||
                                                  0
                                              )
                                            )
                                          }
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              )}

                              {/* Sets */}
                              <FormField
                                control={control}
                                name={`exercises.${index}.sets`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Sets</FormLabel>
                                    <FormControl>
                                      <Input
                                        className="input"
                                        type="number"
                                        placeholder="e.g. 3"
                                        {...field}
                                        onChange={(e) =>
                                          field.onChange(
                                            belowZero(
                                              parseInt(e.target.value, 10) || 0
                                            )
                                          )
                                        }
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              {/* Rest Time */}
                              <FormField
                                control={control}
                                name={`exercises.${index}.rest_time`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Rest time (secs)</FormLabel>
                                    <FormControl>
                                      <Input
                                        className="input"
                                        type="number"
                                        placeholder="e.g. 30"
                                        {...field}
                                        onChange={(e) =>
                                          field.onChange(
                                            belowZero(
                                              parseInt(e.target.value, 10) || 0
                                            )
                                          )
                                        }
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <Button
                                type="button"
                                variant="destructive"
                                onClick={() => remove(index)}
                              >
                                Remove Exercise
                              </Button>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </Accordion>
            )}
          </Droppable>
        </DragDropContext>

        {/* Buttons */}
        <Button
          type="button"
          className="mr-3"
          onClick={() =>
            append({
              name: "",
              mode: "reps",
              reps: 0,
              duration: 0,
              sets: 1,
              rest_time: 0,
            })
          }
        >
          + Add Exercise
        </Button>
        <Button type="submit">Create Workout</Button>
      </form>
    </Form>
  );
}
