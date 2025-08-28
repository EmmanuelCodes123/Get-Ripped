import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../../hooks/useAppContext";
import { useNavigate } from "react-router-dom";

export default function PopUp() {
  const { setShowPopup } = useAppContext();
  const navigate = useNavigate();

  const bodyParts = [
    { name: "Arm", icon: "💪" },
    { name: "Chest", icon: "🏋️" },
    { name: "Back", icon: "🏋️‍♂️" },
    { name: "Legs", icon: "🦵" },
    { name: "Abs", icon: "🤸" },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -500 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-20"
      >
        <div className="w-fit p-4 rounded-lg h-fit bg-[var(--primary-clr)] absolute top-47 right-2 left-2 backdrop-opacity-25">
          <div className="w-full text-center flex">
            <h2 className="text-2xl">Where do u wish to improve</h2>
            <button
              className="text-2xl mr-4"
              onClick={() => setShowPopup(false)}
            >
              X
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 place-items-center">
            {bodyParts.map((part) => (
              <div
                key={part.name}
                className="flex flex-col items-center"
                onClick={() => {
                  navigate("/create-workout");
                  setShowPopup(false);
                }}
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full flex justify-center items-center text-2xl">
                  {part.icon}
                </div>
                <span className="mt-2 text-lg font-bold">{part.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
