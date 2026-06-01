"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Qué hacemos", href: "#servicios" },
    { label: "Trayectoria", href: "#trayectoria" },
    { label: "Inteligencia Artificial", href: "#ia" },
    { label: "Caso de éxito", href: "#caso-exito" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-45 w-full border-b border-zinc-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          {/* Cyan corporate mark */}
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#00d0b8] text-white font-extrabold text-lg shadow-[0_4px_12px_rgba(0,208,184,0.2)] transition-transform duration-300 group-hover:rotate-6">
            N
            <div className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-zinc-950 border-2 border-white animate-ping" />
          </div>
          <span className="text-2xl font-black tracking-tight text-zinc-900 transition-colors group-hover:text-[#00d0b8]">
            NOVIT
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#00d0b8] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <Button variant="teal" size="md" onClick={() => window.location.href = "#contacto"}>
            Agendar demo
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 md:hidden hover:bg-zinc-50 cursor-pointer"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg className="h-6 w-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white/95 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300 absolute left-0 right-0 top-[80px]">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-700 hover:text-zinc-950 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-zinc-100 pt-5">
              <Button
                variant="teal"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = "#contacto";
                }}
              >
                Agendar demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
