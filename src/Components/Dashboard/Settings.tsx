import { useAppContext } from "@/hooks/useAppContext";
import { Minus, Plus } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Settings() {
  const { noOfDays, setNoOfDays, showSettings, setShowSettings, progressRef } =
    useAppContext();
  const optionsRef = useRef<HTMLDivElement>(null);

  function handleDays(type: "increment" | "decrement") {
    if (noOfDays > 3 && type === "decrement") {
      setNoOfDays(noOfDays - 1);
    } else if (noOfDays < 7 && type === "increment") {
      setNoOfDays(noOfDays + 1);
    }
  }

  useEffect(() => {
    function handleSetShowOptions(e: MouseEvent) {
      const target = e.target as Node;

      // list of refs that should NOT close when clicked
      const exceptions = [optionsRef, progressRef];

      // check if click was inside ANY of the exceptions
      const isException = exceptions.some(
        (ref) => ref.current && ref.current.contains(target)
      );

      if (!isException) {
        setShowSettings(false);
      }
    }

    document.addEventListener("mousedown", handleSetShowOptions);
    return () => {
      document.removeEventListener("mousedown", handleSetShowOptions); // <-- important fix here too
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="rounded-lg bg-[var(--primary-clr)] fixed bottom-2 left-2 right-2 h-50 border-2 border-[var(--brd-clr)] p-4 flex flex-col justify-center gap-4 z-20"
            ref={optionsRef}
          >
            <h2 className="text-xl text-center">
              Set no. days you can workout in a week (min-3 max-7)
            </h2>
            <div className="flex items-center gap-6 w-full justify-center">
              <button
                onClick={() => {
                  handleDays("decrement");
                }}
                className="border-1 border-black p-2 rounded-full"
              >
                <Minus />
              </button>
              <h2 className="text-2xl border-1 border-[var(--brd-clr)] px-6 py-2 rounded-lg">
                {noOfDays}
              </h2>
              <button
                onClick={() => {
                  handleDays("increment");
                }}
                className="border-1 border-black p-2 rounded-full"
              >
                <Plus />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
