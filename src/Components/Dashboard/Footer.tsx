import { ChevronLeft, ChevronRight, Moon, Plus, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleSetFooter(e: MouseEvent) {
      if (footerRef.current && !footerRef.current.contains(e.target as Node)) {
        setShowFooter(false);
      }
    }

    document.addEventListener("mousedown", handleSetFooter);
    return () => {
      document.addEventListener("mousedown", handleSetFooter);
    };
  });
  
  return (
    <footer className="w-full fixed bottom-2 left-0">
      <AnimatePresence>
        {showFooter && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full flex justify-around"
            ref={footerRef}
          >
            <button>
              <Settings size={40} color="var(--icons-clr)" />
            </button>
            <button className="rounded-full w-[68px] h-[68px] flex justify-center items-center secBtnBg shadow-[0_0_20px_10px_var(--secondary-clr)]">
              <Plus size={40} />
            </button>
            <button>
              <Moon size={40} color="var(--icons-clr)"/>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-8 h-8 bg-black/70 flex justify-center items-center border-1 border-white absolute right-0 bottom-4">
        {showFooter ? (
          <button onClick={() => setShowFooter(false)}>
            <ChevronRight color="white" />
          </button>
        ) : (
          <button onClick={() => setShowFooter(true)}>
            <ChevronLeft color="white" />
          </button>
        )}
      </div>
    </footer>
  );
}
