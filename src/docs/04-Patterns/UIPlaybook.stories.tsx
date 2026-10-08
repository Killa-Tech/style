import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Sparkles, Check, Copy, ArrowRight, ShieldCheck, AlertCircle,
  Search, Terminal, CheckSquare, Square, Disc, Circle, ChevronRight
} from 'lucide-react';

const meta = {
  title: '04. Patrones de UI/01. Especificaciones de Componentes',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const UIPlaybook: Story = {
  render: () => {
    const [copiedSection, setCopiedSection] = useState<string | null>(null);
    const [isChecked, setIsChecked] = useState(true);
    const [selectedRadio, setSelectedRadio] = useState<'opt1' | 'opt2'>('opt1');
    const [selectedFilter, setSelectedFilter] = useState<'all' | 'active'>('active');

    const handleCopyCode = (id: string, code: string) => {
      navigator.clipboard.writeText(code);
      setCopiedSection(id);
      setTimeout(() => setCopiedSection(null), 2000);
    };

    return (
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#4efff3] mb-2">04. UI Architecture // Component Specifications</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-['Space_Grotesk'] tracking-tight">
            Especificaciones Oficiales de UI
          </h1>
          <p className="text-[#a3b8cc] text-sm sm:text-base mt-2 max-w-3xl font-['Inter']">
            Modelos de referencia interactivos construidos bajo las especificaciones exactas de la sección 213 de <code className="text-xs font-mono text-[#4efff3]">cyber-luna.md</code>.
            Úsalos como modelo para implementar pantallas en cualquier framework.
          </p>
        </div>

        {/* 1. BOTONES */}
        <div className="p-8 rounded-2xl border border-[rgba(163,184,204,0.15)] bg-[rgba(15,25,44,0.7)] backdrop-blur-xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white font-['Space_Grotesk']">1. Botones (Buttons)</h2>
              <p className="text-xs text-[#a3b8cc] mt-1">Variantes Primaria (con cyan glow y lift), Secundaria y Ghost.</p>
            </div>
            <button
              onClick={() => handleCopyCode('buttons', `<!-- Primary Button -->\n<button class="px-5 py-2.5 rounded-lg bg-[#4efff3] text-[#0b1323] font-bold font-['Space_Grotesk'] hover:shadow-[0_0_20px_rgba(78,255,243,0.45)] hover:-translate-y-0.5 transition-all">Iniciar Secuencia</button>`)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[rgba(26,41,62,0.8)] hover:bg-[rgba(26,41,62,1)] border border-[rgba(163,184,204,0.2)] text-xs font-mono text-white transition-colors cursor-pointer"
            >
              {copiedSection === 'buttons' ? <Check className="w-3.5 h-3.5 text-[#4efff3]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSection === 'buttons' ? '¡Copiado!' : 'Copiar Snippet'}</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-4 items-center p-6 rounded-xl bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.1)]">
            {/* Primary Button */}
            <button className="px-5 py-2.5 rounded-lg bg-[#4efff3] text-[#0b1323] font-bold font-['Space_Grotesk'] text-sm tracking-wide transition-all duration-200 hover:shadow-[0_0_20px_rgba(78,255,243,0.45)] hover:-translate-y-0.5 cursor-pointer">
              Botón Primario
            </button>

            {/* Secondary Button */}
            <button className="px-5 py-2.5 rounded-lg bg-[rgba(26,41,62,0.6)] border border-[rgba(163,184,204,0.3)] text-white font-medium font-['Space_Grotesk'] text-sm transition-all duration-200 hover:border-[#4efff3] hover:text-[#4efff3] hover:shadow-[0_0_15px_rgba(78,255,243,0.2)] cursor-pointer">
              Botón Secundario
            </button>

            {/* Ghost Button */}
            <button className="px-5 py-2.5 rounded-lg bg-transparent text-[#a3b8cc] font-medium font-['Space_Grotesk'] text-sm transition-all duration-200 hover:bg-[rgba(78,255,243,0.08)] hover:text-[#4efff3] cursor-pointer">
              Botón Ghost
            </button>
          </div>
        </div>

        {/* 2. INPUTS & CAMPOS DE FORMULARIO */}
        <div className="p-8 rounded-2xl border border-[rgba(163,184,204,0.15)] bg-[rgba(15,25,44,0.7)] backdrop-blur-xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white font-['Space_Grotesk']">2. Inputs & Campos de Formulario</h2>
              <p className="text-xs text-[#a3b8cc] mt-1">Altura fija de 44px, base navy 0.8, borde metálico 0.2 y aura cyan en foco.</p>
            </div>
            <button
              onClick={() => handleCopyCode('inputs', `<input class="h-[44px] px-4 rounded-lg bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.2)] text-white text-sm font-['Inter'] placeholder:text-[#a3b8cc]/50 focus:outline-none focus:border-[#4efff3] focus:shadow-[0_0_12px_rgba(78,255,243,0.2)]" />`)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[rgba(26,41,62,0.8)] border border-[rgba(163,184,204,0.2)] text-xs font-mono text-white cursor-pointer"
            >
              {copiedSection === 'inputs' ? <Check className="w-3.5 h-3.5 text-[#4efff3]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSection === 'inputs' ? '¡Copiado!' : 'Copiar Snippet'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-xl bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.1)]">
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[#a3b8cc] uppercase tracking-wider block">Identificador de Usuario</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="ej. operator@lunar.agency"
                  defaultValue="cybernaut-01"
                  className="w-full h-[44px] px-4 rounded-lg bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.2)] text-white text-sm font-['Inter'] placeholder:text-[#a3b8cc]/50 focus:outline-none focus:border-[#4efff3] focus:shadow-[0_0_12px_rgba(78,255,243,0.2)] transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-[#a3b8cc] uppercase tracking-wider block">Búsqueda Telemetría</label>
              <div className="relative">
                <Search className="w-4 h-4 text-[#a3b8cc] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Filtrar telemetría..."
                  className="w-full h-[44px] pl-10 pr-4 rounded-lg bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.2)] text-white text-sm font-['Inter'] placeholder:text-[#a3b8cc]/50 focus:outline-none focus:border-[#4efff3] focus:shadow-[0_0_12px_rgba(78,255,243,0.2)] transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3. CARDS & PANELES CON ÍNDICE CORNER */}
        <div className="p-8 rounded-2xl border border-[rgba(163,184,204,0.15)] bg-[rgba(15,25,44,0.7)] backdrop-blur-xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white font-['Space_Grotesk']">3. Tarjetas & Paneles (Cards)</h2>
              <p className="text-xs text-[#a3b8cc] mt-1">Desenfoque 16px, fondo 0.85, borde sutil e índice opcional con acento cian.</p>
            </div>
            <button
              onClick={() => handleCopyCode('cards', `<div class="relative p-6 rounded-2xl backdrop-blur-xl bg-[rgba(15,25,44,0.85)] border border-[rgba(163,184,204,0.12)] before:absolute before:top-0 before:left-0 before:w-16 before:h-0.5 before:bg-[#4efff3]">...</div>`)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[rgba(26,41,62,0.8)] border border-[rgba(163,184,204,0.2)] text-xs font-mono text-white cursor-pointer"
            >
              {copiedSection === 'cards' ? <Check className="w-3.5 h-3.5 text-[#4efff3]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSection === 'cards' ? '¡Copiado!' : 'Copiar Snippet'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Standard */}
            <div className="p-6 rounded-2xl backdrop-blur-xl bg-[rgba(15,25,44,0.85)] border border-[rgba(163,184,204,0.12)] hover:border-[#4efff3]/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-[#a3b8cc] tracking-widest">Módulo Estándar</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-2">Canal de Comunicaciones</h3>
              <p className="text-xs text-[#a3b8cc] leading-relaxed">
                Superficie con desenfoque de 16px y borde metálico al 12% de opacidad para preservación de contraste.
              </p>
            </div>

            {/* Card with Corner Cyan Accent */}
            <div className="relative p-6 rounded-2xl backdrop-blur-xl bg-[rgba(15,25,44,0.85)] border border-[rgba(163,184,204,0.12)] hover:border-[#4efff3]/60 transition-colors overflow-hidden">
              {/* Cyan top stroke gradient index */}
              <div className="absolute top-0 left-0 w-32 h-[2px] bg-gradient-to-r from-[#4efff3] to-transparent" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase text-[#4efff3] tracking-widest">Con Índice Lunar</span>
                <span className="text-[10px] font-mono text-[#a3b8cc] bg-[rgba(26,41,62,0.8)] px-2 py-0.5 rounded">#CYBER-09</span>
              </div>
              <h3 className="text-lg font-bold text-white font-['Space_Grotesk'] mb-2">Matriz de Propulsión</h3>
              <p className="text-xs text-[#a3b8cc] leading-relaxed">
                Tarjeta optimizada con línea superior degradada en cian eléctrico para jerarquía visual elevada.
              </p>
            </div>
          </div>
        </div>

        {/* 4. CHIPS & BADGES DE ESTADO */}
        <div className="p-8 rounded-2xl border border-[rgba(163,184,204,0.15)] bg-[rgba(15,25,44,0.7)] backdrop-blur-xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white font-['Space_Grotesk']">4. Badges & Chips de Filtro</h2>
              <p className="text-xs text-[#a3b8cc] mt-1">Insignias en píldora con punto pulsante de 6px y chips de filtro activos.</p>
            </div>
            <button
              onClick={() => handleCopyCode('badges', `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(78,255,243,0.1)] text-[#4efff3] text-xs font-mono uppercase font-bold"><span class="w-1.5 h-1.5 rounded-full bg-[#4efff3] animate-ping" />Online</span>`)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[rgba(26,41,62,0.8)] border border-[rgba(163,184,204,0.2)] text-xs font-mono text-white cursor-pointer"
            >
              {copiedSection === 'badges' ? <Check className="w-3.5 h-3.5 text-[#4efff3]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSection === 'badges' ? '¡Copiado!' : 'Copiar Snippet'}</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-4 items-center p-6 rounded-xl bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.1)]">
            {/* Status Badge Pulse */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(78,255,243,0.1)] border border-[rgba(78,255,243,0.3)] text-[#4efff3] text-xs font-mono uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4efff3] animate-pulse" />
              SISTEMA NOMINAL
            </span>

            {/* Error Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(255,180,171,0.1)] border border-[rgba(255,180,171,0.3)] text-[#ffb4ab] text-xs font-mono uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffb4ab]" />
              FALLO CRÍTICO
            </span>

            {/* Filter Chips */}
            <div className="flex gap-2 pl-4 border-l border-[rgba(163,184,204,0.15)]">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedFilter === 'all'
                    ? 'bg-[rgba(78,255,243,0.15)] text-[#4efff3] border border-[#4efff3]'
                    : 'bg-[rgba(26,41,62,0.6)] text-[#a3b8cc] border border-[rgba(163,184,204,0.25)]'
                }`}
              >
                Todos los Filtros
              </button>

              <button
                onClick={() => setSelectedFilter('active')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedFilter === 'active'
                    ? 'bg-[rgba(78,255,243,0.15)] text-[#4efff3] border border-[#4efff3]'
                    : 'bg-[rgba(26,41,62,0.6)] text-[#a3b8cc] border border-[rgba(163,184,204,0.25)]'
                }`}
              >
                Solo Telemetría Activa
              </button>
            </div>
          </div>
        </div>

        {/* 5. CHECKBOXES & RADIOS */}
        <div className="p-8 rounded-2xl border border-[rgba(163,184,204,0.15)] bg-[rgba(15,25,44,0.7)] backdrop-blur-xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white font-['Space_Grotesk']">5. Checkboxes & Radios</h2>
              <p className="text-xs text-[#a3b8cc] mt-1">Marco de 18px con borde metálico 1.5px. Al activarse, fondo cian eléctrico y aura.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 items-center p-6 rounded-xl bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.1)]">
            {/* Interactive Checkbox */}
            <label className="flex items-center gap-3 cursor-pointer select-none">
              <div
                onClick={() => setIsChecked(!isChecked)}
                className={`w-[18px] h-[18px] rounded flex items-center justify-center transition-all ${
                  isChecked
                    ? 'bg-[#4efff3] text-[#0b1323] shadow-[0_0_10px_rgba(78,255,243,0.4)]'
                    : 'border-[1.5px] border-[#a3b8cc] bg-transparent'
                }`}
              >
                {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
              <span className="text-sm font-['Inter'] text-white">Habilitar transmisión criptográfica</span>
            </label>

            {/* Interactive Radios */}
            <div className="flex items-center gap-6">
              <label
                onClick={() => setSelectedRadio('opt1')}
                className="flex items-center gap-2.5 cursor-pointer select-none"
              >
                <div
                  className={`w-[18px] h-[18px] rounded-full flex items-center justify-center transition-all ${
                    selectedRadio === 'opt1'
                      ? 'border-[1.5px] border-[#4efff3] bg-[#0b1323] shadow-[0_0_8px_rgba(78,255,243,0.3)]'
                      : 'border-[1.5px] border-[#a3b8cc] bg-transparent'
                  }`}
                >
                  {selectedRadio === 'opt1' && <div className="w-2 h-2 rounded-full bg-[#4efff3]" />}
                </div>
                <span className="text-sm font-['Inter'] text-white">Modo Nominal</span>
              </label>

              <label
                onClick={() => setSelectedRadio('opt2')}
                className="flex items-center gap-2.5 cursor-pointer select-none"
              >
                <div
                  className={`w-[18px] h-[18px] rounded-full flex items-center justify-center transition-all ${
                    selectedRadio === 'opt2'
                      ? 'border-[1.5px] border-[#4efff3] bg-[#0b1323] shadow-[0_0_8px_rgba(78,255,243,0.3)]'
                      : 'border-[1.5px] border-[#a3b8cc] bg-transparent'
                  }`}
                >
                  {selectedRadio === 'opt2' && <div className="w-2 h-2 rounded-full bg-[#4efff3]" />}
                </div>
                <span className="text-sm font-['Inter'] text-white">Modo Staging</span>
              </label>
            </div>
          </div>
        </div>

        {/* 6. TABLAS DE DATOS CON INDICADOR CIAN LATERAL */}
        <div className="p-8 rounded-2xl border border-[rgba(163,184,204,0.15)] bg-[rgba(15,25,44,0.7)] backdrop-blur-xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white font-['Space_Grotesk']">6. Listas & Tablas de Datos</h2>
              <p className="text-xs text-[#a3b8cc] mt-1">Líneas de 1px al 8% de opacidad y barra indicadora cian de 2px a la izquierda en hover.</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-[rgba(163,184,204,0.12)] bg-[rgba(11,19,35,0.9)]">
            <table className="min-w-full divide-y divide-[rgba(163,184,204,0.08)] text-left text-xs font-['Inter']">
              <thead className="bg-[rgba(26,41,62,0.4)] font-mono text-[#a3b8cc] uppercase">
                <tr>
                  <th className="py-3 px-4">Nodo Orbital</th>
                  <th className="py-3 px-4">Canal</th>
                  <th className="py-3 px-4">Latencia</th>
                  <th className="py-3 px-4">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(163,184,204,0.08)]">
                {[
                  { node: 'LUNAR-ALPHA-01', channel: 'CH-884-A', ping: '12ms', status: 'Activo' },
                  { node: 'STATION-BEACON-04', channel: 'CH-102-G', ping: '24ms', status: 'Activo' },
                  { node: 'RELAY-ORBIT-09', channel: 'CH-512-X', ping: '110ms', status: 'Calibrando' },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="relative group transition-colors duration-150 hover:bg-[rgba(78,255,243,0.04)] cursor-pointer"
                  >
                    <td className="py-3.5 px-4 font-mono font-bold text-white flex items-center gap-2">
                      {/* 2px cyan indicator bar pinned to the left edge on hover */}
                      <span className="w-0.5 h-4 bg-[#4efff3] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {row.node}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[#a3b8cc]">{row.channel}</td>
                    <td className="py-3.5 px-4 font-mono text-[#4efff3]">{row.ping}</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-[rgba(78,255,243,0.1)] text-[#4efff3]">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  },
};
