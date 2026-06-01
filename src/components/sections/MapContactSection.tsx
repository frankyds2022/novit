import React from "react";

export function MapContactSection() {
  return (
    <section className="w-full bg-[#f9fafb] py-16 border-t border-zinc-150 relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Google Maps Embed (matching the screenshot exactly) */}
          <div className="lg:col-span-7 w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-zinc-200 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.748386121404!2d-77.02534882510255!3d-12.129337588114032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81cf262b9f3%3A0xc07a8af44e43eb!2sAv.%20Reducto%201555%2C%20Miraflores%2015074!5e0!3m2!1sen!2spe!4v1714589211025!5m2!1sen!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación Novitlab Miraflores"
            ></iframe>
          </div>

          {/* Right Column: Contact info details */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left bg-transparent">
            {/* Title (Sleek regular/medium font matching brand) */}
            <h3 className="text-xl sm:text-2xl font-normal text-zinc-900 leading-snug">
              Innovación, inteligencia artificial y tecnología
            </h3>
            <p className="mt-1 text-base sm:text-lg font-normal text-zinc-500">
              que acompañan tu crecimiento.
            </p>

            {/* List Details with exact icons */}
            <ul className="mt-8 flex flex-col gap-6 text-sm sm:text-base text-zinc-800">
              {/* Address */}
              <li className="flex items-start gap-4">
                <div className="mt-0.5 text-zinc-800">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span>
                  Av. Reducto 1555 – Oficina 201 Miraflores, Lima – Perú
                </span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-4">
                <div className="text-zinc-800">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:hola@novit.pe" className="hover:text-[#00d0b8] transition-colors">
                  hola@novit.pe
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-4">
                <div className="text-zinc-800">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>
                  +51 980 203 171
                </span>
              </li>
            </ul>

            {/* Social Media Link Nodes */}
            <div className="flex items-center gap-5 mt-8 text-zinc-500">
              <a href="#" className="hover:text-[#00d0b8] transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-[#00d0b8] transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-[#00d0b8] transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Bottom branding footer tag exactly like the screenshot */}
            <span className="text-zinc-400 text-xs font-semibold tracking-widest mt-12 select-none">
              NOVIT &copy; 2025
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
