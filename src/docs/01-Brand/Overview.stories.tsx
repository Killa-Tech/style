import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Sparkles, Compass, Shield, Terminal, Zap, Layers, Palette, Type, Grid, Box } from 'lucide-react';

const meta = {
  title: '01. Brand & Identidad/Manifiesto Cyber Lunar',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Overview: Story = {
  render: () => {
    return (
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl border border-[rgba(78,255,243,0.2)] bg-gradient-to-b from-[rgba(26,41,62,0.85)] to-[rgba(15,25,44,0.95)] p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[rgba(78,255,243,0.15)] via-transparent to-transparent pointer-events-none" />
          
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 mb-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(78,255,243,0.1)] border border-[rgba(78,255,243,0.3)] text-[#4efff3] text-xs font-mono uppercase tracking-widest mb-6">
                <span className="w-2 h-2 rounded-full bg-[#4efff3] animate-pulse" />
                Sistema de Diseño Organizacional v1.0 // KILLA
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-['Space_Grotesk'] mb-6">
                CYBER <span className="text-[#4efff3] drop-shadow-[0_0_20px_rgba(78,255,243,0.45)]">LUNAR</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#a3b8cc] max-w-2xl leading-relaxed font-['Inter']">
                Este sistema de diseño fusiona la cibernética del espacio profundo con la ergonomía tecnológica de grado empresarial.
                Inspirado en interfaces de misión crítica nocturna, telemetría orbital y circuitos bioluminiscentes, proyecta precisión,
                autoridad y exploración sin fatiga visual.
              </p>
            </div>

            {/* Official Logo Display */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-[rgba(11,19,35,0.85)] border border-[rgba(78,255,243,0.3)] shadow-[0_0_25px_rgba(78,255,243,0.2)] flex items-center justify-center p-3 shrink-0">
              <img
                src="/logo/logo-LUNA-MONTAIN.png"
                alt="KILLA Logo Oficial"
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(78,255,243,0.3)]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[rgba(163,184,204,0.12)]">
            <div>
              <div className="text-xs uppercase tracking-wider text-[#a3b8cc] font-mono">Filosofía</div>
              <div className="text-sm font-semibold text-white mt-1">Safe Futuristic Glassmorphism</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#a3b8cc] font-mono">Acento Primario</div>
              <div className="text-sm font-semibold text-[#4efff3] mt-1 font-mono">Electric Cyan #4EFFF3</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#a3b8cc] font-mono">Tipografía</div>
              <div className="text-sm font-semibold text-white mt-1">Space Grotesk + Inter</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#a3b8cc] font-mono">Iconografía</div>
              <div className="text-sm font-semibold text-white mt-1">Lucide Icons</div>
            </div>
          </div>

          {/* AI Agent Resource Callout Banner */}
          <div className="mt-8 pt-6 border-t border-[rgba(163,184,204,0.15)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-xl bg-[rgba(11,19,35,0.7)] border border-[rgba(78,255,243,0.3)] shadow-[0_0_20px_rgba(78,255,243,0.1)]">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white font-['Space_Grotesk'] font-bold text-sm">
                <Sparkles className="w-4 h-4 text-[#4efff3]" />
                <span>¿Usas Agentes de Inteligencia Artificial (Antigravity, Cursor, Claude)?</span>
              </div>
              <p className="text-xs text-[#a3b8cc] font-['Inter']">
                Puedes descargar la especificación completa en un único archivo <code className="text-[#4efff3] font-mono">style.md</code> para inyectarla en tus reglas de proyecto.
              </p>
            </div>
            <a
              href="/style.md"
              download="style.md"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#4efff3] text-[#0b1323] text-xs font-bold font-['Space_Grotesk'] hover:shadow-[0_0_15px_rgba(78,255,243,0.4)] transition-all cursor-pointer whitespace-nowrap"
            >
              Descargar style.md
            </a>
          </div>
        </div>

        {/* Pilares de Marca */}
        <div>
          <h2 className="text-2xl font-bold text-white font-['Space_Grotesk'] tracking-tight mb-6 flex items-center gap-2">
            <Compass className="w-6 h-6 text-[#4efff3]" />
            Pilares de la Identidad Visual
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-[rgba(163,184,204,0.15)] bg-[rgba(15,25,44,0.7)] backdrop-blur-md hover:border-[#4efff3]/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[rgba(78,255,243,0.1)] flex items-center justify-center text-[#4efff3] mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-2">Electric Cyan Glow</h3>
              <p className="text-sm text-[#a3b8cc] leading-relaxed">
                Utilizado selectivamente para indicar vitalidad, estados activos, beacons de telemetría y focos interactivos primarios sin saturar el campo visual.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[rgba(163,184,204,0.15)] bg-[rgba(15,25,44,0.7)] backdrop-blur-md hover:border-[#4efff3]/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[rgba(26,41,62,0.8)] flex items-center justify-center text-[#dbe2f9] mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-2">Deep Space Foundations</h3>
              <p className="text-sm text-[#a3b8cc] leading-relaxed">
                Superficies basadas en azul medianoche profundo (<code className="text-xs font-mono text-[#4efff3]">#0B1323</code>) en lugar de negro puro artificial, entregando profundidad óptica y confort en turnos prolongados.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-[rgba(163,184,204,0.15)] bg-[rgba(15,25,44,0.7)] backdrop-blur-md hover:border-[#4efff3]/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[rgba(163,184,204,0.15)] flex items-center justify-center text-[#a3b8cc] mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-2">Ergonomía Empresarial</h3>
              <p className="text-sm text-[#a3b8cc] leading-relaxed">
                Legibilidad rigurosa WCAG 2.1 AA en tablas de datos y paneles densos. La audacia visual complementa la eficiencia operativa sin comprometer el rendimiento.
              </p>
            </div>
          </div>
        </div>

        {/* Mapa de Secciones del Portal */}
        <div className="p-8 rounded-xl border border-[rgba(163,184,204,0.15)] bg-[rgba(24,31,48,0.6)] backdrop-blur-md">
          <h2 className="text-xl font-bold text-white font-['Space_Grotesk'] mb-6 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#4efff3]" />
            Estructura de la Documentación Viva
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-4 rounded-lg bg-[rgba(11,19,35,0.8)] border border-[rgba(78,255,243,0.2)]">
              <Sparkles className="w-5 h-5 text-[#4efff3] mb-2" />
              <div className="font-semibold text-white text-sm">01. Logotipo & SVG</div>
              <p className="text-xs text-[#a3b8cc] mt-1">SVG maestro Inkscape, variantes PNG 720px y guía de edición.</p>
            </div>

            <div className="p-4 rounded-lg bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.1)]">
              <Palette className="w-5 h-5 text-[#4efff3] mb-2" />
              <div className="font-semibold text-white text-sm">02. Tokens // Colores</div>
              <p className="text-xs text-[#a3b8cc] mt-1">Paleta interactiva con copiado en 1 clic (Hex, RGB, CSS Vars) y contraste.</p>
            </div>

            <div className="p-4 rounded-lg bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.1)]">
              <Type className="w-5 h-5 text-[#4efff3] mb-2" />
              <div className="font-semibold text-white text-sm">02. Tokens // Tipografía</div>
              <p className="text-xs text-[#a3b8cc] mt-1">Probador en vivo de textos para Space Grotesk e Inter en todas las escalas.</p>
            </div>

            <div className="p-4 rounded-lg bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.1)]">
              <Grid className="w-5 h-5 text-[#4efff3] mb-2" />
              <div className="font-semibold text-white text-sm">02. Tokens // Rejilla & Glass</div>
              <p className="text-xs text-[#a3b8cc] mt-1">Inspector de rejilla espacial 8px y visualizador de capas de glassmorphism.</p>
            </div>

            <div className="p-4 rounded-lg bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.1)]">
              <Box className="w-5 h-5 text-[#4efff3] mb-2" />
              <div className="font-semibold text-white text-sm">03. Iconos & Patrones</div>
              <p className="text-xs text-[#a3b8cc] mt-1">Buscador Lucide interactivo y catálogo de especificaciones UI con código listo.</p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
