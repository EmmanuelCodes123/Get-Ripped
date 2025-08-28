import Progress from "../Components/Dashboard/Progress";
import Navbar from "../Components/Dashboard/Navbar";
import Category from "../Components/Dashboard/Category";
import Footer from "../Components/Dashboard/Footer";
import PopUp from "../Components/Creating Workout/PopUp";
import { useAppContext } from "../hooks/useAppContext";
import Settings from "@/Components/Dashboard/Settings";


export default function Dashboard() {
  const {showPopup} =  useAppContext()

  return (
    <main className="gradient-brand min-h-screen overflow-hidden p-2 relative">
      <Navbar />
      <section className="mt-4">
        <Progress />
        <Category />
      </section>
      {showPopup && 
        <PopUp />
      }
      <Settings />
      <div className="left-0 right-0">
        <Footer />
      </div>
    </main>
  );
}
