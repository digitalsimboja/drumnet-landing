import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-28 md:py-32">
        <div className="w-full max-w-md text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-100 dark:border-slate-700/50 dark:bg-slate-800/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="text-sm text-gray-600 font-mono dark:text-gray-400">Contact</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            Tell us about your project. We respond within one business day.
          </p>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 text-left hover-glow dark:border-slate-800 dark:bg-slate-850">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
