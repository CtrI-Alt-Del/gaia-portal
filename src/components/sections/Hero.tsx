import { motion } from "framer-motion";
import { EarthCanvas } from "../three/EarthCanvas";

export function Hero() {
  return (
    <section
      id="inicio"
      className="max-w-6xl mx-auto px-4 py-16 sm:py-24 flex flex-col lg:flex-row items-center gap-12"
    >
      <div className="flex-1 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
        >
          Gaia transforma dados do clima em{" "}
          <span className="bg-gradient-to-r from-gaia-primary to-gaia-accent bg-clip-text text-transparent">
            experimentos vivos
          </span>{" "}
          para o ensino médio.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-base sm:text-lg text-slate-300 max-w-xl"
        >
          Estações meteorológicas de baixo custo coletam dados reais de chuva,
          temperatura e vento. O portal Gaia transforma esses dados em dashboards,
          alertas e atividades de aprendizagem baseadas em problemas para estudantes
          e comunidades.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#educacao"
            className="rounded-full bg-gaia-primary text-slate-950 text-base font-medium px-6 py-3 shadow-glow hover:translate-y-0.5 hover:shadow-none transition-all"
          >
            Explorar experiência educacional
          </a>
          <a
            href="#como-funciona"
            className="text-base text-slate-300 hover:text-gaia-primary transition-colors"
          >
            Ver como o ecossistema Gaia funciona
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 w-full max-w-md lg:max-w-lg"
      >
        <EarthCanvas />
      </motion.div>
    </section>
  );
}
