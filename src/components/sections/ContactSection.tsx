"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Select } from "../ui/Select";
import { Button } from "../ui/Button";

export function ContactSection() {
  const [formState, setFormState] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    referral: "",
    proyecto: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const referralOptions = [
    { value: "", label: "Selecciona una opción" },
    { value: "ia", label: "Inteligencia artificial" },
    { value: "software", label: "Fábrica de software" },
    { value: "consultoria", label: "Consultoría de Innovación y Procesos" },
    { value: "ux", label: "Diseño de Experiencia de Usuario" },
    { value: "salud", label: "Clínicas, Seguros y Salud" },
  ];

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formState.nombre.trim()) tempErrors.nombre = "El nombre es obligatorio.";
    if (!formState.correo.trim()) {
      tempErrors.correo = "El correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formState.correo)) {
      tempErrors.correo = "El formato de correo no es válido.";
    }
    if (!formState.telefono.trim()) tempErrors.telefono = "El teléfono es obligatorio.";
    if (!formState.referral) tempErrors.referral = "Por favor selecciona una opción.";
    if (!formState.proyecto.trim()) tempErrors.proyecto = "Cuéntanos un poco sobre tu proyecto.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormState({
        nombre: "",
        correo: "",
        telefono: "",
        referral: "",
        proyecto: "",
      });
    }, 1500);
  };

  return (
    <section id="contacto" className="w-full bg-[#f4faff] py-20 lg:py-28 border-t border-zinc-150">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Visual Mockup */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <Image
                src="/laptop_med_portal.png"
                alt="Usuario consultando portal clínico Sharky en laptop"
                fill
                className="object-cover"
                sizes="(max-w-1024px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="w-full rounded-3xl bg-white p-8 lg:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-zinc-100">
              
              {success ? (
                <div className="flex flex-col items-center text-center py-8 animate-in fade-in zoom-in duration-300">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00d0b8]/10 text-[#00d0b8] mb-6">
                    <svg className="h-8 w-8 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-normal text-zinc-900">
                    ¡Mensaje enviado con éxito!
                  </h3>
                  <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs">
                    Gracias por ponerte en contacto. Uno de nuestros consultores tecnológicos te contactará a la brevedad para agendar tu demostración.
                  </p>
                  <Button 
                    variant="outline" 
                    size="md" 
                    className="mt-8"
                    onClick={() => setSuccess(false)}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#00d0b8]">
                      COTIZA TU PROYECTO
                    </span>
                    <h3 className="mt-2 text-2xl lg:text-3xl font-normal text-zinc-900 leading-[1.2]">
                      ¿Listo para dar el siguiente paso?
                    </h3>
                  </div>

                  <Input
                    name="nombre"
                    label="Nombre completo"
                    placeholder="Escribe tu nombre y apellido"
                    value={formState.nombre}
                    onChange={handleChange}
                    error={errors.nombre}
                  />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                      name="correo"
                      type="email"
                      label="Correo electrónico"
                      placeholder="ejemplo@correo.com"
                      value={formState.correo}
                      onChange={handleChange}
                      error={errors.correo}
                    />
                    <Input
                      name="telefono"
                      type="tel"
                      label="Teléfono / celular"
                      placeholder="+51 987 654 321"
                      value={formState.telefono}
                      onChange={handleChange}
                      error={errors.telefono}
                    />
                  </div>

                  <Select
                    name="referral"
                    label="¿En qué solución estás interesado(a)?"
                    options={referralOptions}
                    value={formState.referral}
                    onChange={handleChange}
                    error={errors.referral}
                  />

                  <Textarea
                    name="proyecto"
                    label="Detalles de tu consulta"
                    placeholder="Cuéntanos brevemente sobre tu proyecto, objetivos o la duda que deseas resolver..."
                    value={formState.proyecto}
                    onChange={handleChange}
                    error={errors.proyecto}
                  />

                  <div className="mt-2">
                    <Button 
                      variant="teal" 
                      size="lg" 
                      className="w-full justify-center"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Enviando mensaje...</span>
                        </div>
                      ) : (
                        <span>Enviar mensaje</span>
                      )}
                    </Button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
