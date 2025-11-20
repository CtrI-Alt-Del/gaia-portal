import { motion } from "framer-motion";

const items = [
  {
    title: "Hardware",
    description: "Sensores meteorológicos, microcontroladores, datalogger embarcado.",
    tech: "Estações Gaia"
  },
  {
    title: "Infraestrutura de dados",
    description:
      "Broker MQTT HiveMQ, serviços em Node, dados brutos em Mongo e dados tratados em PostgreSQL.",
    tech: "MQTT, Node, MongoDB, PostgreSQL"
  },
  {
    title: "Portal web",
    description:
      "Frontend moderno com React, Vite, TypeScript, Tailwind e visualização 3D com Three JS.",
    tech: "React, TypeScript, Tailwind"
  },
  {
    title: "Qualidade e DevOps",
    description:
      "Pipelines de Integração Contínua, deploy automatizado e documentação de APIs.",
    tech: "CI CD, documentação"
  }
];

export function TechStack() {
  return (
    <section
      id="tecnologia"
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
          Arquitetura pensada para escalar e ensinar
        </h2>
        <p className="text-base sm:text-lg text-slate-300">
          Cada camada do Gaia foi desenhada para ser didática. Do código ao
          painel, tudo pode virar conteúdo de aula sobre tecnologia, ciência de
          dados e engenharia de software.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.07 }}
            className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mb-3">
                {item.description}
              </p>
            </div>
            <div className="text-sm text-gaia-primary">{item.tech}</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
