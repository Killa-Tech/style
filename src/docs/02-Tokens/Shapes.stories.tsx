import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CYBER_LUNAR_ROUNDED } from '../../tokens/cyber-luna';
import { Box, CheckCircle2 } from 'lucide-react';

const meta = {
  title: '02. Tokens de Diseño/05. Formas & Radios de Curvatura',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ShapesAndRadii: Story = {
  render: () => {
    return (
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#4efff3] mb-2">02. Design Tokens // Curvature Geometry</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-['Space_Grotesk'] tracking-tight">
            Formas & Radios de Curvatura
          </h1>
          <p className="text-[#a3b8cc] text-sm sm:text-base mt-2 max-w-2xl font-['Inter']">
            El sistema mantiene una curvatura balanceada con un radio predeterminado de <strong className="text-white">8px (0.5rem)</strong>, logrando un equilibrio entre agudeza tecnológica y confort táctil moderno.
          </p>
        </div>

        {/* Tokens Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CYBER_LUNAR_ROUNDED.map((r) => {
            const borderRadiusStyle = r.key === 'full' ? '9999px' : r.value;

            return (
              <div
                key={r.key}
                className="p-6 rounded-2xl border border-[rgba(163,184,204,0.15)] bg-[rgba(15,25,44,0.7)] backdrop-blur-md flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm font-bold text-white">--rounded-{r.key}</span>
                    <span className="font-mono text-xs text-[#4efff3] bg-[rgba(78,255,243,0.1)] px-2 py-0.5 rounded">
                      {r.value}
                    </span>
                  </div>
                  <p className="text-xs text-[#a3b8cc] leading-relaxed">{r.usage}</p>
                </div>

                {/* Visual shape sample */}
                <div className="h-32 w-full bg-[rgba(26,41,62,0.6)] border border-[rgba(78,255,243,0.3)] flex items-center justify-center relative overflow-hidden transition-all hover:border-[#4efff3] hover:shadow-[0_0_15px_rgba(78,255,243,0.2)]"
                  style={{ borderRadius: borderRadiusStyle }}
                >
                  <span className="text-xs font-mono font-bold text-[#dbe2f9]">
                    Radio: {r.px === 'Pill' ? 'Pill (9999px)' : `${r.px}px`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Component Mapping Matrix */}
        <div className="p-8 rounded-2xl border border-[rgba(163,184,204,0.15)] bg-[rgba(24,31,48,0.7)] backdrop-blur-md">
          <h2 className="text-xl font-bold text-white font-['Space_Grotesk'] mb-6 flex items-center gap-2">
            <Box className="w-5 h-5 text-[#4efff3]" />
            Mapeo Oficial de Componentes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.1)] space-y-3">
              <div className="flex items-center gap-2 text-white font-bold font-mono text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#4efff3]" />
                Radio 8px (0.5rem)
              </div>
              <p className="text-xs text-[#a3b8cc]">
                Botones primarios y secundarios, inputs de formulario, chips de filtro y badges de estado estándar.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.1)] space-y-3">
              <div className="flex items-center gap-2 text-white font-bold font-mono text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#4efff3]" />
                Radio 16px (1rem)
              </div>
              <p className="text-xs text-[#a3b8cc]">
                Tarjetas contenedoras, módulos de instrumentación, diálogos flotantes y flyout panels.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.1)] space-y-3">
              <div className="flex items-center gap-2 text-white font-bold font-mono text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#4efff3]" />
                Radio Pill (9999px)
              </div>
              <p className="text-xs text-[#a3b8cc]">
                Insignias de estado con punto pulsante, toggles activos, micro-indicadores y avatars.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
