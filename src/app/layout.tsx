import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Novit | Consultoría, UX, Software + IA",
  description: "En NOVIT ayudamos a empresas de todos los tamaños a innovar, diseñar y escalar sus productos digitales. Especialistas en soluciones de tecnología, salud y seguros.",
  keywords: ["novit", "novit peru", "inteligencia artificial", "desarrollo de software", "fabrica de software", "diseno ux", "salud digital", "HIS", "sharky"],
  authors: [{ name: "Novit" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-zinc-900">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/51987654321"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-[0_4px_25px_rgba(37,211,102,0.5)] cursor-pointer"
          aria-label="Contactar por WhatsApp"
          id="whatsapp-button"
        >
          <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.59 2.017 14.135.992 11.517.992c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.457 3.39 1.32 4.892l-.994 3.63 3.738-.97c1.452.793 2.94 1.205 4.354 1.205zM17.487 14.39c-.294-.147-1.743-.86-2.012-.958-.267-.098-.463-.147-.66.147-.196.294-.759.957-.93 1.15-.171.197-.343.22-.637.073-.294-.147-1.243-.458-2.368-1.462-.876-.782-1.468-1.75-1.639-2.045-.172-.294-.018-.454.129-.601.133-.132.294-.343.441-.515.15-.171.197-.294.294-.49.099-.197.05-.369-.025-.516-.073-.147-.66-1.593-.906-2.181-.24-.575-.48-.497-.66-.507-.17-.008-.367-.01-.563-.01-.196 0-.515.074-.784.369-.27.294-1.03 1.006-1.03 2.451s1.054 2.846 1.201 3.042c.147.197 2.074 3.168 5.026 4.444.702.304 1.25.486 1.677.622.705.224 1.347.193 1.854.117.565-.085 1.743-.711 1.99-1.397.245-.687.245-1.275.172-1.397-.074-.123-.27-.197-.565-.344z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
