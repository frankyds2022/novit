"use client";

import React from "react";
import Image from "next/image";
import { ContactSection } from "@/components/sections/ContactSection";
import { Clients } from "@/components/sections/Clients";
import { MapContactSection } from "@/components/sections/MapContactSection";

export default function ClinicsHealthInsurance() {
  const timelineItems = [
    {
      years: "2001 – 2006",
      side: "right",
      title: "Novasalud, Rímac y Pacífico Seguros",
      description: "Desarrollamos el sistema EPS para Novasalud, y brindamos outsourcing TI y soporte de fábrica de software a Rímac Seguros y Pacífico, asegurando la continuidad de operaciones en el entorno asegurador."
    },
    {
      years: "2007 – Hoy",
      side: "left",
      title: "Mapfre Perú",
      description: "Acompañamos a MAPFRE Perú en una relación de largo plazo que abarca: Desarrollo y mantenimiento de sistemas EPS, SCTR, SOAT, Asistencia Médica y Accidentes Personales. Implementación de módulos en su Portal de Clientes. Desarrollo y mantenimiento de la Oficina de Internet MAPFRE (OIM). Evolución de su plataforma de eCommerce. Migración de sistemas core hacia arquitecturas web modernas."
    },
    {
      years: "2008 – 2012",
      side: "right",
      title: "Pacíficos Seguros",
      description: "Durante esta etapa, brindamos outsourcing tecnológico y mantenimiento continuo para las plataformas críticas de Pacífico Seguros, integrándonos al equipo interno con un enfoque de mejora continua."
    },
    {
      years: "2011 – 2014",
      side: "left",
      title: "Ricardo Palma",
      description: "Diseñamos y desarrollamos el sistema Nukleus, especializado en la gestión de planes de salud prepagos. El proyecto incluyó soporte técnico, mesa de ayuda y operación continua para una clínica de alta complejidad."
    },
    {
      years: "2012 – 2018",
      side: "right",
      title: "Cardif – BNP Paribas",
      description: "Brindamos soporte funcional y técnico a Cardif, integrándonos bajo el modelo de outsourcing TI, con foco en aplicaciones críticas alineadas a estándares internacionales."
    },
    {
      years: "2014",
      side: "left",
      title: "Auna",
      description: "Realizamos una consultoría completa de procesos (AS IS / TO BE) para AUNA, que incluyó la propuesta de un plan de transformación tecnológica alineado a su estructura médica-administrativa."
    },
    {
      years: "2015",
      side: "right",
      title: "Rimac",
      description: "Desarrollamos un portal especializado en la gestión de TRAMAS TEDEF, automatizando procesos de facturación electrónica y asegurando cumplimiento con regulaciones del sector."
    },
    {
      years: "2016",
      side: "left",
      title: "Clínica San Pablo (NEXXO Salud)",
      description: "Participamos en la implementación de componentes del sistema NEXXO Salud, asegurando integración con plataformas como SITEDS, TEDEF y REGAFI, bajo los estándares exigidos por SUSALUD."
    },
    {
      years: "2017 – 2018",
      side: "right",
      title: "Clínica Aviva – Intercorp",
      description: "Diseñamos el sistema de planes médicos para Clínica Aviva, optimizando procesos de afiliación, validación y aseguramiento. También rediseñamos la arquitectura digital y la experiencia de usuario."
    },
    {
      years: "2020 – 2021",
      side: "left",
      title: "Sharky (HIS SaaS)",
      description: "Desde su conceptualización hasta su consolidación, incubamos Sharky, un sistema HIS moderno que hoy opera bajo el modelo SaaS, con más de 2,000 usuarios activos en clínicas de Lima y provincias. Incluye módulos clínicos integrados, caja, agenda, farmacia y conexiones con WhatsApp, SITEDS, TEDEF y convenios con aseguradoras."
    },
    {
      years: "2021 – 2022",
      side: "right",
      title: "Pacífico Seguros",
      description: "Lideramos el rediseño del sistema de autorizaciones médicas, incluyendo mapeo AS IS – TO BE, validación con usuarios y prototipado UX. El proyecto elevó la eficiencia y trazabilidad del proceso de atención a asegurados."
    },
    {
      years: "2022",
      side: "left",
      title: "BUPA",
      description: "Diseñamos una autorización médica tipo SITEDS, planteada como estándar regional para BUPA en todos los países donde opera. El proyecto —canalizado a través de Integramédica Perú— combinó visión regulatoria, diseño UX y arquitectura escalable."
    },
    {
      years: "2024",
      side: "right",
      title: "Clínica Peruano Americana de Trujillo",
      description: "Diseñamos su roadmap de transformación digital, abarcando diagnóstico organizacional, rediseño de procesos, propuesta de arquitectura y enfoque en la mejora de experiencia del paciente."
    },
    {
      years: "2024",
      side: "left",
      title: "MAPFRE Ecuador",
      description: "Este año comenzamos a trabajar con MAPFRE Ecuador, participando en el levantamiento de requerimientos funcionales y técnicos para la evolución de sus plataformas digitales en salud."
    }
  ];

  return (
    <div className="flex flex-col flex-1 bg-white font-sans transition-colors duration-300">

      {/* 1. Hero Section (White Background with Circular Health Microchip SVG on the right) */}
      <section className="relative w-full bg-white overflow-hidden py-16 lg:py-24 border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left text column */}
            <div className="lg:col-span-8 flex flex-col text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00d0b8]">
                TECNOLOGÍA DE SALUD
              </span>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-zinc-900 leading-[1.2] max-w-3xl">
                Más de 20 años transformando el sector de seguros y salud.
              </h1>
              <p className="mt-6 text-sm sm:text-base leading-relaxed text-zinc-700 max-w-2xl font-normal">
                Con más de 20 años de experiencia, lideramos la transformación digital y el desarrollo de software a medida, ofreciendo soluciones ágiles y robustas. Expertos en el sector salud y seguros.
              </p>
            </div>

            {/* Right graphic column (Sleek medical microchip cross SVG) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-zinc-50 border border-zinc-150 flex items-center justify-center shadow-sm">
                <svg className="h-28 w-28 text-[#00d0b8]" viewBox="0 0 100 100" fill="none">
                  {/* Outer microchip circle border */}
                  <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" className="animate-[spin_40s_linear_infinite]" />
                  {/* Inner circuit rings */}
                  <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
                  <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
                  {/* Neural connecting dots */}
                  <circle cx="50" cy="6" r="3.5" fill="currentColor" />
                  <circle cx="50" cy="94" r="3.5" fill="currentColor" />
                  <circle cx="6" cy="50" r="3.5" fill="currentColor" />
                  <circle cx="94" cy="50" r="3.5" fill="currentColor" />
                  {/* Central medical cross */}
                  <path d="M41 50h18M50 41v18" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                  {/* Small detailed pins */}
                  <line x1="30" y1="30" x2="35" y2="35" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                  <line x1="70" y1="30" x2="65" y2="35" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                  <line x1="30" y1="70" x2="35" y2="65" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                  <line x1="70" y1="70" x2="65" y2="65" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Timeline Section (Dark Theme matching the screenshot) */}
      <section className="w-full bg-[#0a0a0c] py-20 lg:py-28 border-t border-zinc-900 relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          {/* Header Title */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00d0b8]">
              NUESTRA EXPERIENCIA HISTÓRICA
            </span>
            <h2 className="mt-4 text-3xl font-normal tracking-tight text-white sm:text-4xl lg:text-[38px] leading-[1.2]">
              Sistemas EPS y Facturación EPS
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400">
              Conectamos de forma robusta y ágil a clínicas, centros de salud y aseguradoras líderes a nivel nacional.
            </p>
          </div>

          {/* Timeline Wrapper Container */}
          <div className="relative w-full overflow-hidden">

            {/* Central vertical teal line (Desktop only) */}
            <div className="absolute left-[30px] lg:left-1/2 top-0 bottom-0 w-[3px] bg-[#00d0b8] -translate-x-[1.5px]" />

            {/* Timeline items list */}
            <div className="flex flex-col gap-16 lg:gap-20">
              {timelineItems.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col lg:flex-row items-stretch w-full ${item.side === "left" ? "lg:flex-row-reverse" : ""
                    }`}
                >

                  {/* Timeline dot connector */}
                  <div className="absolute left-[30px] lg:left-1/2 h-5 w-5 rounded-full border-4 border-[#0a0a0c] bg-[#00d0b8] -translate-x-1/2 top-1 lg:top-4 z-20 shadow-[0_0_10px_rgba(0,208,184,0.4)]" />

                  {/* Left Column (Content side on desktop) */}
                  <div className={`w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-12 flex flex-col justify-start ${item.side === "left" ? "lg:text-right lg:items-end" : "lg:text-left lg:items-start"
                    }`}>
                    {/* Years badge with border (looks exactly like the screenshot) */}
                    <div className="inline-block border border-[#00d0b8] text-[#00d0b8] text-xs font-bold tracking-wider px-3.5 py-1 rounded-lg select-none mb-4">
                      {item.years}
                    </div>

                    <h3 className="text-xl font-bold text-white leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-400 max-w-xl">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Column (Empty spacer column on desktop) */}
                  <div className="hidden lg:block lg:w-1/2 pointer-events-none" />

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 3. Contact Form (Reusable Component) */}
      <ContactSection />

      {/* 4. Clients / Partners (Reusable Component) */}
      <Clients />

      {/* 5. Map & Details (Reusable Component) */}
      <MapContactSection />

    </div>
  );
}
