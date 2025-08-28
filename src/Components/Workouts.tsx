import { useEffect, useRef, useState } from "react";
import bgImg from "../assets/bgimg.jpg";
import { Clock, Delete, Edit, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Workouts() {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleSetShowOptions(e: MouseEvent) {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(e.target as Node)
      ) {
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleSetShowOptions);
    return () => {
      document.addEventListener("mousedown", handleSetShowOptions);
    };
  });
  return (
    <>
      <div
        className="p-1.5 w-70 flex-shrink-0 rounded-[7px] bg-[var(--primary-clr)] relative"
        onClick={() => setShowOptions((c) => !c)}
      >
        <div>
          <img src={bgImg} alt="" />
        </div>
        <div className="p-2 bg-[#f9e6d079] w-fit rounded-full absolute top-3 left-3">
          <h4 className="text-xs">Intermediate</h4>
        </div>
        <div className="mt-1">
          <h2>Calistenics Push Workout</h2>
          <p className="flex gap-1 text-sm items-center">
            <Clock /> 45 mins
          </p>
        </div>
        <AnimatePresence>
          {showOptions && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-60 m-auto flex justify-around absolute bottom-10 right-0 left-0 backdrop-blur-sm rounded-lg"
              ref={optionsRef}
            >
              <button>
                <Edit size={30} color="var(--icons-clr)"/>
              </button>
              <button className="rounded-full w-20 h-20 flex justify-center items-center secBtnBg ">
                <Play size={30} />
              </button>
              <button>
                <Delete size={30} color="var(--icons-clr)" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
