import React from "react";

export function AIApplied() {
  const proposalCards = [
    {
      title: "Optimización de procesos con inteligencia artificial",
      description: "Implementamos algoritmos predictivos y modelos de aprendizaje para automatizar la toma de decisiones clave y mejorar la eficiencia interna.",
      tag: "OPTIMIZACIÓN",
    },
    {
      title: "Integración con Chatbots y asistentes virtuales",
      description: "Desarrollamos asistentes conversacionales avanzados e inteligentes, entrenados con la base de conocimiento específica de tu empresa.",
      tag: "CONVERSACIONAL",
    },
    {
      title: "Procesamiento de documentos automatizado y clasificado",
      description: "Digitalizamos, clasificamos y extraemos información valiosa de grandes volúmenes de documentos utilizando visión por computadora y NLP.",
      tag: "DOCUMENTACIÓN",
    },
  ];

  return (
    <section id="ia" className="w-full bg-zinc-950 py-20 lg:py-28 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00d0b8]">
            NUESTRA PROPUESTA
          </span>
          <h2 className="mt-4 text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-[38px] leading-[1.2]">
            IA aplicada para agregar valor
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-400">
            Novit se enfoca en integrar IA en tus procesos para optimizar tus resultados y potenciar el crecimiento de tu negocio.
          </p>
        </div>

        {/* Dynamic Dark Cards Grid (Static - No hover - No leer más) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {proposalCards.map((card) => (
            <div 
              key={card.title} 
              className="relative flex flex-col justify-start rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8"
            >
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#00d0b8] bg-[#00d0b8]/5 px-2.5 py-1 rounded-full border border-[#00d0b8]/10">
                  {card.tag}
                </span>
                
                <h3 className="mt-6 text-xl font-bold text-white leading-snug">
                  {card.title}
                </h3>
                
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
