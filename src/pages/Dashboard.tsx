import Progress from "../Components/Dashboard/Progress";
import Navbar from "../Components/Dashboard/Navbar";
import Category from "../Components/Dashboard/Category";
import Footer from "../Components/Dashboard/Footer";

export default function Dashboard() {
  return (
    <main className="gradient-brand min-h-screen overflow-hidden p-2 relative">
      <Navbar />
      <section className="mt-4">
        <Progress />
        <Category />
      </section>
      <div className="left-0 right-0">
        <Footer />
      </div>
    </main>
  );
}
