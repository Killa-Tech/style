import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CYBER_LUNAR_TYPOGRAPHY } from '../../tokens/cyber-luna';
import { Type, Sparkles, Smartphone, Monitor } from 'lucide-react';

const meta = {
  title: '02. Tokens de Diseño/02. Tipografía & Escalas',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const TypographyScale: Story = {
  render: () => {
    const [customText, setCustomText] = useState<string>('SISTEMAS ORBITALES EN ESTADO NOMINAL');
    const [selectedFamily, setSelectedFamily] = useState<'all' | 'Space Grotesk' | 'Inter'>('all');

    const filteredTypography = CYBER_LUNAR_TYPOGRAPHY.filter(
      (item) => selectedFamily === 'all' || item.fontFamily === selectedFamily
    );

    return (
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#4efff3] mb-2">02. Design Tokens // Typography Engine</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-['Space_Grotesk'] tracking-tight">
            Tipografía: Space Grotesk & Inter
          </h1>
          <p className="text-[#a3b8cc] text-sm sm:text-base mt-2 max-w-2xl font-['Inter']">
            La tipografía acopla la postura técnica y geométrica de <strong className="text-white">Space Grotesk</strong> con la precisión utilitaria de <strong className="text-white">Inter</strong> para lectura de datos densos.
          </p>
        </div>

        {/* Live Playground Input */}
        <div className="p-6 rounded-xl border border-[rgba(78,255,243,0.25)] bg-[rgba(15,25,44,0.7)] backdrop-blur-md shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono uppercase tracking-wider text-[#4efff3] flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Probador Dinámico de Texto
            </label>
            <div className="flex gap-2">
              {(['all', 'Space Grotesk', 'Inter'] as const).map((fam) => (
                <button
                  key={fam}
                  onClick={() => setSelectedFamily(fam)}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                    selectedFamily === fam
                      ? 'bg-[#4efff3] text-[#0b1323] font-bold'
                      : 'bg-[rgba(26,41,62,0.8)] text-[#a3b8cc] hover:text-white'
                  }`}
                >
                  {fam === 'all' ? 'Ambas Familias' : fam}
                </button>
              ))}
            </div>
          </div>

          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Escribe aquí para probar la tipografía en tiempo real..."
            className="w-full px-4 py-3 rounded-lg bg-[rgba(11,19,35,0.9)] border border-[rgba(163,184,204,0.25)] text-white text-base focus:outline-none focus:border-[#4efff3] focus:ring-1 focus:ring-[#4efff3]"
          />
        </div>

        {/* Typography Scale List */}
        <div className="space-y-6">
          {filteredTypography.map((item) => {
            const fontClass = item.fontFamily === 'Space Grotesk' ? "font-['Space_Grotesk']" : "font-['Inter']";

            return (
              <div
                key={item.key}
                className="p-6 rounded-xl border border-[rgba(163,184,204,0.12)] bg-[rgba(15,25,44,0.6)] backdrop-blur-md hover:border-[#4efff3]/40 transition-all space-y-4"
              >
                {/* Meta details bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[rgba(163,184,204,0.08)]">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white font-mono">{item.name}</span>
                    <span className="text-xs font-mono text-[#4efff3] bg-[rgba(78,255,243,0.1)] px-2 py-0.5 rounded">
                      {item.fontFamily}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#a3b8cc]">
                    <span className="flex items-center gap-1 bg-[rgba(26,41,62,0.8)] px-2 py-0.5 rounded">
                      <Monitor className="w-3 h-3 text-[#4efff3]" />
                      {item.fontSize} / {item.lineHeight}
                    </span>
                    <span className="bg-[rgba(26,41,62,0.8)] px-2 py-0.5 rounded">
                      Weight: {item.fontWeight}
                    </span>
                    {item.letterSpacing && (
                      <span className="bg-[rgba(26,41,62,0.8)] px-2 py-0.5 rounded">
                        Tracking: {item.letterSpacing}
                      </span>
                    )}
                    {item.mobile && (
                      <span className="flex items-center gap-1 bg-[rgba(26,41,62,0.8)] px-2 py-0.5 rounded text-amber-300">
                        <Smartphone className="w-3 h-3" />
                        Móvil: {item.mobile.fontSize}
                      </span>
                    )}
                  </div>
                </div>

                {/* Live Preview Text */}
                <div
                  className={`${fontClass} text-white break-words transition-all`}
                  style={{
                    fontSize: item.fontSize,
                    fontWeight: item.fontWeight as any,
                    lineHeight: item.lineHeight,
                    letterSpacing: item.letterSpacing || 'normal',
                  }}
                >
                  {customText || 'Vista previa tipográfica Cyber Lunar'}
                </div>

                {/* Usage guideline */}
                <p className="text-xs text-[#a3b8cc] font-['Inter'] pt-1">
                  <span className="text-[#849492] font-mono uppercase">Uso recomendado:</span> {item.usage}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};
