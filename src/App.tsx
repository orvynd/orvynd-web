import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05070a] text-slate-100">
      <div className="page-shell relative flex min-h-screen flex-col">
        <Header />
        <main className="relative z-10 flex flex-1 items-center">
          <Hero />
        </main>
        <Footer />
      </div>
    </div>
  );
}
