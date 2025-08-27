import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgImg from "../assets/bgimg.jpg";
import cal1 from "../assets/cal1.jpg";
import backgroundImg from "../assets/backgroundImg.jpg";
import GetStartedButton from "../Components/AnimatedButton";

export default function LandingPage() {
  const sections = [
    {
      title: "default",
      text: "GET RIPPED",
      subText: "Take complete control of your workout journey.",
      btnText: "Next",
      img: bgImg,
    },
    {
      title: "section1",
      text: "More Than Just a Timer",
      subText: "Design, customize, and manage your workouts effortlessly.",
      btnText: "Next",
      img: cal1,
    },
    {
      title: "section2",
      text: "Start Your Fitness Journey",
      btnText: "Begin",
      img: backgroundImg,
    },
  ];

  const [currentSection, setCurrentSection] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const handleNext = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const subVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <main className="w-full h-screen relative flex flex-col pb-60  overflow-hidden">
      {/* Overlapping images */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
        <AnimatePresence>
          <motion.div
            className="absolute inset-0 bg-gray-400 animate-pulse"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />

          <motion.img
            key={sections[currentSection].img}
            src={sections[currentSection].img}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onLoad={() => setLoaded(true)}
          />
        </AnimatePresence>
      </div>

      {/* Text & Button */}
      <AnimatePresence mode="wait">
        <motion.div
          key={sections[currentSection].title}
          className="w-full mt-auto h-40 flex flex-col space-y-10"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="flex flex-col space-y-4"
            variants={{
              visible: {
                transition: {
                  delayChildren: 0.8, // wait for image fade
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.h1
              className="text-6xl text-center text-white font-bold"
              variants={textVariants}
            >
              {sections[currentSection].text}
            </motion.h1>

            <motion.p
              className="text-xl text-center text-white"
              variants={subVariants}
            >
              {sections[currentSection].subText}
            </motion.p>
          </motion.div>

          <motion.div
            className="h-fit w-full flex justify-center"
            variants={subVariants}
          >
            <GetStartedButton
              text={sections[currentSection].btnText}
              onClick={handleNext}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
