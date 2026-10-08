import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CYBER_LUNAR_SPACING } from '../../tokens/cyber-luna';
import { Grid, Monitor, Tablet, Smartphone, Ruler } from 'lucide-react';

const meta = {
  title: '02. Tokens de Diseño/03. Espaciado & Rejilla Espacial',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const SpacingAndGrid: Story = {
  render: () => {
    const [activeLayout, setActiveLayout] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

    const layoutSpecs = {
      desktop: { columns: 12, margin: '2rem (32px)', gutter: '1.5rem (24px)', name: 'Desktop (1200px+)', icon: Monitor },
      tablet: { columns: 8, margin: '1.5rem (24px)', gutter: '1rem (16px)', name: 'Tablet (768px - 1199px)', icon: Tablet },
      mobile: { columns: 4, margin: '1rem (16px)', gutter: '1rem (16px)', name: 'Mobile (< 768px)', icon: Smartphone },
    };

    const current = layoutSpecs[activeLayout];

    return (
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#4efff3] mb-2">02. Design Tokens // Spatial Mechanics</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-['Space_Grotesk'] tracking-tight">
            Espaciado & Rejilla de 8px
          </h1>
          <p className="text-[#a3b8cc] text-sm sm:text-base mt-2 max-w-2xl font-['Inter']">
            El sistema de espaciado se fundamenta en múltiplos matemáticos estrictos de la rejilla base de 8px para garantizar alineación armónica en interfaces densas.
          </p>
        </div>

        {/* 8px Spatial Grid Tokens */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#4efff3]" />
            Escala de Tokens Espaciales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CYBER_LUNAR_SPACING.map((sp) => (
              <div
                key={sp.key}
                className="p-4 rounded-xl border border-[rgba(163,184,204,0.12)] bg-[rgba(15,25,44,0.7)] backdrop-blur-md flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#4efff3]">--{sp.key}</span>
                    <span className="text-xs font-mono text-[#a3b8cc]">({sp.value} / {sp.px}px)</span>
                  </div>
                  <p className="text-xs text-[#a3b8cc] mt-1 max-w-xs">{sp.usage}</p>
                </div>

                {/* Visual measurement bar */}
                <div className="flex items-center pl-4">
                  <div
                    className="h-8 bg-[#4efff3]/20 border border-[#4efff3] rounded flex items-center justify-center font-mono text-[10px] text-[#4efff3]"
                    style={{ width: `${Math.max(sp.px * 2, 24)}px` }}
                  >
                    {sp.px}px
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layout Grid Simulator */}
        <div className="p-8 rounded-2xl border border-[rgba(163,184,204,0.15)] bg-[rgba(15,25,44,0.8)] backdrop-blur-xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
                <Grid className="w-5 h-5 text-[#4efff3]" />
                Simulador de Rejilla de Columnas
              </h2>
              <p className="text-xs text-[#a3b8cc] mt-1">
                Alterna entre puntos de ruptura para inspeccionar la cantidad de columnas, margen lateral y medianil (gutter).
              </p>
            </div>

            {/* Viewport switcher */}
            <div className="flex bg-[rgba(11,19,35,0.9)] p-1 rounded-lg border border-[rgba(163,184,204,0.2)]">
              {(['desktop', 'tablet', 'mobile'] as const).map((view) => {
                const Icon = layoutSpecs[view].icon;
                return (
                  <button
                    key={view}
                    onClick={() => setActiveLayout(view)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                      activeLayout === view
                        ? 'bg-[#4efff3] text-[#0b1323] font-bold shadow-[0_0_10px_rgba(78,255,243,0.3)]'
                        : 'text-[#a3b8cc] hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="capitalize">{view}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Metrics summary */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-[rgba(11,19,35,0.7)] border border-[rgba(163,184,204,0.1)] text-xs font-mono">
            <div>
              <span className="text-[#849492] block">Modo:</span>
              <span className="font-bold text-white mt-0.5 block">{current.name}</span>
            </div>
            <div>
              <span className="text-[#849492] block">Margen Exterior:</span>
              <span className="font-bold text-[#4efff3] mt-0.5 block">{current.margin}</span>
            </div>
            <div>
              <span className="text-[#849492] block">Medianil (Gutter):</span>
              <span className="font-bold text-[#4efff3] mt-0.5 block">{current.gutter}</span>
            </div>
          </div>

          {/* Interactive Visual Columns */}
          <div className="p-6 rounded-xl bg-[rgba(11,19,35,0.9)] border border-dashed border-[rgba(163,184,204,0.2)] overflow-x-auto">
            <div
              className="grid gap-3"
              style={{ gridTemplateColumns: `repeat(${current.columns}, minmax(0, 1fr))` }}
            >
              {Array.from({ length: current.columns }).map((_, i) => (
                <div
                  key={i}
                  className="h-28 rounded-md bg-[rgba(78,255,243,0.08)] border border-[rgba(78,255,243,0.3)] flex flex-col items-center justify-center text-[#4efff3] font-mono text-xs transition-transform hover:bg-[rgba(78,255,243,0.18)]"
                >
                  <span className="text-[10px] text-[#a3b8cc]">COL</span>
                  <span className="font-bold text-sm">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
};
