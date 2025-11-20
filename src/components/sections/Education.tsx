import { motion } from "framer-motion";
import { ArduinoCanvas } from "../three/ArduinoCanvas";

export function Education() {
  return (
    <section
      id="educacao"
      className="max-w-6xl mx-auto px-4 py-16 sm:py-20"
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Laboratório de clima na tela da sala de aula
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            O portal Gaia foi pensado como uma ferramenta de Aprendizagem
            Baseada em Problemas. Em vez de dados artificiais, estudantes
            exploram medições reais de risco meteorológico da própria região.
          </p>
          <ul className="space-y-2 text-sm sm:text-base text-slate-300">
            <li>
              • Atividades que cruzam física, geografia, matemática e tecnologia.
            </li>
            <li>
              • Dashboards que mostram tendências, extremos e padrões de chuva e temperatura.
            </li>
            <li>
              • Alertas que conectam conceitos de risco com situações concretas da comunidade.
            </li>
          </ul>

          <div className="grid sm:grid-cols-3 gap-3 text-sm">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-3">
              <div className="text-gaia-primary font-semibold mb-1">
                Estatística em contexto
              </div>
              <p className="text-slate-300">
                Médias, máximos, mínimos e distribuições aplicados a dados reais.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-3">
              <div className="text-gaia-accent font-semibold mb-1">
                Hardware visível
              </div>
              <p className="text-slate-300">
                Estudantes entendem na prática como sensores conversam com o portal.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/80 bg-slate-950/80 p-3">
              <div className="text-slate-200 font-semibold mb-1">
                Foco em prevenção
              </div>
              <p className="text-slate-300">
                Cenários de risco discutidos de forma crítica em sala de aula.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-md lg:max-w-lg mx-auto"
        >
          <ArduinoCanvas />
        </motion.div>
      </div>
    </section>
  );
}
