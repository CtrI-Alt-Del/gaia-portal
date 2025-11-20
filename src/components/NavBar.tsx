import { motion } from "framer-motion";

export function NavBar() {
  const sections = [
    { id: "inicio", label: "Início" },
    { id: "como-funciona", label: "Como funciona" },
    { id: "educacao", label: "Para escolas" },
    { id: "tecnologia", label: "Tecnologia" }
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 inset-x-0 z-20 backdrop-blur border-b border-slate-800/70 bg-slate-950/70"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="/public/images/logo.png" className="h-12" alt="Projeto Gaia Logo" />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold">Projeto Gaia</span>
            <span className="text-xs text-slate-400">
              Monitoramento meteorológico educativo
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className="text-slate-300 hover:text-gaia-primary transition-colors"
            >
              {section.label}
            </button>
          ))}
        </div>

        <a
          href="#educacao"
          className="text-sm rounded-full border border-gaia-primary/60 px-4 py-2 bg-slate-950/80 hover:bg-gaia-primary/10 transition-colors"
        >
          Ver portal educacional
        </a>
      </nav>
    </motion.header>
  );
}
