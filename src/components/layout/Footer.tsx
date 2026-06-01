import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-[#f6f9fb] border-t border-zinc-100 py-16 text-zinc-600">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00d0b8] text-white font-extrabold text-sm shadow-[0_2px_8px_rgba(0,208,184,0.2)]">
                N
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-900">
                NOVIT
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-zinc-500">
              Transformando industrias mediante consultoría de innovación, diseño UX, fábricas de software ágiles y soluciones avanzadas de Inteligencia Artificial.
            </p>
          </div>

          {/* Site links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
              Navegación
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm font-semibold">
              <li>
                <a href="#servicios" className="hover:text-[#00d0b8] transition-colors">
                  Qué hacemos
                </a>
              </li>
              <li>
                <a href="#trayectoria" className="hover:text-[#00d0b8] transition-colors">
                  Trayectoria
                </a>
              </li>
              <li>
                <a href="#ia" className="hover:text-[#00d0b8] transition-colors">
                  Inteligencia Artificial
                </a>
              </li>
              <li>
                <a href="#caso-exito" className="hover:text-[#00d0b8] transition-colors">
                  Caso de éxito
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#00d0b8] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2.5">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#00d0b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-zinc-500">
                  Av. Reducto 1555, Oficina 201, Miraflores, Lima, Perú
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="h-4 w-4 shrink-0 text-[#00d0b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hola@novit.pe" className="hover:text-[#00d0b8] transition-colors text-zinc-500">
                  hola@novit.pe
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="h-4 w-4 shrink-0 text-[#00d0b8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-zinc-500">
                  +51 987 654 321
                </span>
              </li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="h-8 w-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-[#00d0b8] hover:border-[#00d0b8] transition-all" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="h-8 w-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-[#00d0b8] hover:border-[#00d0b8] transition-all" aria-label="Facebook">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-zinc-150 pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-zinc-400">
          <span>
            &copy; {new Date().getFullYear()} NOVIT. Todos los derechos reservados.
          </span>
          <span className="text-zinc-400 leading-relaxed max-w-md text-right sm:text-right text-left">
            Sharky es una solución de gestión médica (HIS) desarrollada y operada bajo licencia por Novit S.A.C.
          </span>
        </div>
      </div>
    </footer>
  );
}
