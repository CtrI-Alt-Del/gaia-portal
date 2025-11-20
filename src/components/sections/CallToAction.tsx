import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl border border-gaia-primary/40 bg-slate-950/80 p-8 sm:p-10 text-center shadow-glow"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
          Pronto para levar Gaia para a sala de aula
        </h2>
        <p className="text-base sm:text-lg text-slate-300 mb-7 max-w-2xl mx-auto">
          Use o portal como base para roteiros de aula, oficinas de Arduino,
          projetos de feira de ciências e discussões sobre prevenção de desastres
          em áreas de risco.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm sm:text-base">
          <span className="rounded-full bg-gaia-primary text-slate-950 px-5 py-2.5">
            Dados em tempo real da escola
          </span>
          <span className="rounded-full border border-gaia-primary/50 px-5 py-2.5 text-gaia-primary">
            Dashboards e relatórios de risco
          </span>
          <span className="rounded-full border border-slate-700 px-5 py-2.5 text-slate-300">
            Experiência 3D com estações e Arduino
          </span>
        </div>
      </motion.div>
    </section>
  );
}
