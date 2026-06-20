import { Capabilities } from "@/components/Capabilities";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Capabilities />
      </main>
      <Footer />
    </div>
  );
}
