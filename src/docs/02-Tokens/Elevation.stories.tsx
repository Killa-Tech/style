import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Layers, Copy, Check, Sparkles } from 'lucide-react';

const meta = {
  title: '02. Tokens de Diseño/04. Elevación & Glassmorphism',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const ElevationAndGlassmorphism: Story = {
  render: () => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const tiers = [
      {
        title: 'Superficie 0: Base Canvas',
        token: '--surface-0',
        cssSnippet: 'background: #0B1323;\nborder: none;',
        desc: 'Fondo plano profundo. Base general para aplicaciones widescreen sin elevación óptica.',
        style: {
          backgroundColor: '#0B1323',
          border: '1px solid rgba(163, 184, 204, 0.08)',
        },
      },
      {
        title: 'Superficie 1: Glass Floor',
        token: '--surface-1-glass',
        cssSnippet: 'background: rgba(15, 25, 44, 0.7);\nbackdrop-filter: blur(12px);\nborder: 1px solid rgba(163, 184, 204, 0.12);',
        desc: 'Suelo vítreo estándar para tarjetas, módulos y paneles de contenido en flujo.',
        style: {
          backgroundColor: 'rgba(15, 25, 44, 0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(163, 184, 204, 0.12)',
        },
      },
      {
        title: 'Superficie 2: Elevated Instrument',
        token: '--surface-2-instrument',
        cssSnippet: 'background: rgba(26, 41, 62, 0.75);\nbackdrop-filter: blur(16px);\nborder: 1px solid rgba(78, 255, 243, 0.2);\nbox-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);',
        desc: 'Instrumentación elevada para barras de herramientas, menús desplegables y controles segmentados.',
        style: {
          backgroundColor: 'rgba(26, 41, 62, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(78, 255, 243, 0.2)',
          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        },
      },
      {
        title: 'Active Luminescence (Hover & Focus)',
        token: '--active-luminescence',
        cssSnippet: 'background: rgba(26, 41, 62, 0.85);\nborder: 1px solid rgba(78, 255, 243, 0.8);\nbox-shadow: 0 0 20px -2px rgba(78, 255, 243, 0.25);',
        desc: 'Aura electromagnética activa al interactuar o enfocar un componente.',
        style: {
          backgroundColor: 'rgba(26, 41, 62, 0.85)',
          border: '1px solid rgba(78, 255, 243, 0.8)',
          boxShadow: '0 0 20px -2px rgba(78, 255, 243, 0.25)',
        },
      },
      {
        title: 'Superficie 3: Overlays & Modales',
        token: '--surface-3-overlay',
        cssSnippet: 'background: #1A293E;\nborder: 1px solid rgba(78, 255, 243, 0.4);\nbox-shadow: 0 20px 48px rgba(0, 0, 0, 0.6), 0 0 1px rgba(78, 255, 243, 0.4);',
        desc: 'Aislamiento ambiental profundo para modales críticos, flyouts y diálogos de confirmación.',
        style: {
          backgroundColor: '#1A293E',
          border: '1px solid rgba(78, 255, 243, 0.4)',
          boxShadow: '0 20px 48px rgba(0, 0, 0, 0.6), 0 0 1px rgba(78, 255, 243, 0.4)',
        },
      },
    ];

    const copyCss = (text: string, index: number) => {
      navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#4efff3] mb-2">02. Design Tokens // Atmosphere & Depth</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-['Space_Grotesk'] tracking-tight">
            Elevación & Safe Futuristic Glassmorphism
          </h1>
          <p className="text-[#a3b8cc] text-sm sm:text-base mt-2 max-w-2xl font-['Inter']">
            La profundidad visual se alcanza mediante capas de vidrio translúcido, bordes cian lumínicos y campos de luz difusa en vez de sombras oscuras opacas tradicionales.
          </p>
        </div>

        {/* Tiers List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier, index) => {
            const isCopied = copiedIndex === index;

            return (
              <div
                key={tier.token}
                className="rounded-2xl p-6 transition-all relative flex flex-col justify-between min-h-[300px]"
                style={tier.style}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-[#4efff3] uppercase tracking-wider">{tier.token}</span>
                    <Layers className="w-4 h-4 text-[#a3b8cc]" />
                  </div>

                  <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">{tier.title}</h3>
                  <p className="text-xs text-[#a3b8cc] mt-2 leading-relaxed font-['Inter']">{tier.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(163,184,204,0.1)]">
                  <pre className="text-[11px] font-mono text-[#849492] bg-black/40 p-2.5 rounded-lg overflow-x-auto mb-3">
                    {tier.cssSnippet}
                  </pre>

                  <button
                    onClick={() => copyCss(tier.cssSnippet, index)}
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[rgba(26,41,62,0.8)] hover:bg-[rgba(26,41,62,1)] border border-[rgba(163,184,204,0.2)] text-xs font-mono text-white transition-colors cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#4efff3]" />
                        <span className="text-[#4efff3]">¡CSS Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Reglas CSS</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};
