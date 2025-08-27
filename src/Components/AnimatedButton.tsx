// GetStartedButton.tsx
import { motion } from "framer-motion";

export default function GetStartedButton({
  onClick,
  text
}: {
  onClick?: () => void;
  text: string
}) {
  return (
    <button
      className="w-80 h-17 text-black rounded-full bg-white flex text-2xl justify-between items-center p-7  transition"
      onClick={onClick}
    >
      {text}
      <motion.span
        className="ml-2"
        animate={{ x: [0, 8, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {">>>"}
      </motion.span>
    </button>
  );
}
