import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Coleta nas estações Gaia",
    description:
      "Sensores de chuva, umidade, temperatura, pressão e vento capturam leituras em tempo real em escolas e comunidades.",
    badge: "Hardware e datalogger"
  },
  {
    title: "2. Trânsito de dados via MQTT",
    description:
      "Os dados passam pelo broker HiveMQ e são processados por serviços em Node, sendo salvos em MongoDB e PostgreSQL.",
    badge: "Infraestrutura de dados"
  },
  {
    title: "3. Portal educacional",
    description:
      "O portal web traduz as leituras em dashboards, mapas, relatórios e alertas para professores e estudantes.",
    badge: "Visualização e ensino"
  }
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="max-w-6xl mx-auto px-4 py-16 sm:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mb-10"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
          Do sensor ao dashboard
        </h2>
        <p className="text-base sm:text-lg text-slate-300">
          Gaia é um ecossistema completo que integra hardware, comunicação IoT,
          armazenamento de dados e visualização pensada para o contexto escolar.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className="relative rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 sm:p-7 overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-gaia-primary/10 to-gaia-accent/10 transition-opacity" />
            <div className="relative space-y-3">
              <div className="text-sm text-gaia-primary font-medium">
                {step.badge}
              </div>
              <h3 className="text-base sm:text-lg font-semibold">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300">
                {step.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
