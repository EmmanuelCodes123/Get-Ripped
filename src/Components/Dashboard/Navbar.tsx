import bgImg from "../../assets/bgimg.jpg";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex space-x-2.5 items-center">
        <div className="w-17 h-17 rounded-full">
          <img className="rounded-full" src={bgImg} alt="" />
        </div>
        <div>
            {/* reduce long text */}
          <h1 className="text-xl overflow-auto text-[var(--primary-text-clr)]"> Ezuma Emmanuel</h1>
          <p className="text-[var(--primary-text-clr)]">Get Ready 🔥</p>
        </div>
      </div>
      
    </nav>
  );
}
