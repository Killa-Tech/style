import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CYBER_LUNAR_COLORS, type ColorToken } from '../../tokens/cyber-luna';
import { Copy, Check, Search, ShieldCheck } from 'lucide-react';

const meta = {
  title: '02. Tokens de Diseño/01. Colores & Paleta Interactiva',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const InteractivePalette: Story = {
  render: () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [copiedToken, setCopiedToken] = useState<string | null>(null);

    const categories = [
      { id: 'all', label: 'Todos los Colores' },
      { id: 'surfaces', label: 'Superficies & Canvas' },
      { id: 'accents', label: 'Acentos & Glow' },
      { id: 'semantics', label: 'Semántica & Estados' },
      { id: 'fixed', label: 'Tokens Fixed' },
    ];

    const filteredColors = CYBER_LUNAR_COLORS.filter((token) => {
      const matchesCategory = selectedCategory === 'all' || token.category === selectedCategory;
      const matchesSearch =
        token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.hex.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    const handleCopy = (text: string, tokenKey: string, format: string) => {
      navigator.clipboard.writeText(text);
      setCopiedToken(`${tokenKey}-${format}`);
      setTimeout(() => setCopiedToken(null), 2000);
    };

    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#4efff3] mb-2">02. Design Tokens // Color Architecture</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-['Space_Grotesk'] tracking-tight">
            Paleta de Colores & Tokens
          </h1>
          <p className="text-[#a3b8cc] text-sm sm:text-base mt-2 max-w-2xl font-['Inter']">
            La paleta está calibrada para ambientes nocturnos de alto contraste. Haz clic en cualquier formato para copiar el token al portapapeles.
          </p>
        </div>

        {/* Controls: Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pb-6 border-b border-[rgba(163,184,204,0.12)]">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#4efff3] text-[#0b1323] font-semibold shadow-[0_0_15px_rgba(78,255,243,0.3)]'
                    : 'bg-[rgba(26,41,62,0.6)] text-[#a3b8cc] hover:text-white hover:bg-[rgba(26,41,62,0.9)] border border-[rgba(163,184,204,0.15)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#a3b8cc] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre, key o hex..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.2)] text-white text-xs placeholder:text-[#849492] focus:outline-none focus:border-[#4efff3] focus:ring-1 focus:ring-[#4efff3]"
            />
          </div>
        </div>

        {/* Color Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColors.map((color) => {
            const isHexCopied = copiedToken === `${color.key}-hex`;
            const isVarCopied = copiedToken === `${color.key}-var`;

            return (
              <div
                key={color.key}
                className="group rounded-xl border border-[rgba(163,184,204,0.12)] bg-[rgba(15,25,44,0.7)] backdrop-blur-md overflow-hidden hover:border-[#4efff3]/50 transition-all hover:shadow-[0_0_20px_rgba(78,255,243,0.12)]"
              >
                {/* Swatch Preview */}
                <div
                  className="h-28 w-full relative flex items-end p-4 border-b border-[rgba(163,184,204,0.1)] transition-transform"
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] text-white font-mono">
                    <ShieldCheck className="w-3 h-3 text-[#4efff3]" />
                    AA Compliant
                  </div>

                  <span
                    className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-black/40 backdrop-blur-md"
                    style={{ color: color.onColor || '#ffffff' }}
                  >
                    {color.hex.toUpperCase()}
                  </span>
                </div>

                {/* Details & Actions */}
                <div className="p-4 space-y-3">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white font-['Space_Grotesk'] text-sm tracking-tight">
                        {color.name}
                      </h3>
                      <span className="text-[10px] font-mono text-[#a3b8cc] bg-[rgba(26,41,62,0.8)] px-2 py-0.5 rounded">
                        {color.category}
                      </span>
                    </div>
                    <code className="text-xs font-mono text-[#4efff3] block mt-0.5">
                      --color-{color.key}
                    </code>
                    <p className="text-xs text-[#a3b8cc] mt-2 line-clamp-2 leading-relaxed">
                      {color.description}
                    </p>
                  </div>

                  {/* Copy Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[rgba(163,184,204,0.08)]">
                    <button
                      onClick={() => handleCopy(color.hex, color.key, 'hex')}
                      className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[rgba(26,41,62,0.6)] hover:bg-[rgba(26,41,62,0.9)] border border-[rgba(163,184,204,0.15)] text-[11px] font-mono text-[#dbe2f9] hover:text-[#4efff3] transition-colors cursor-pointer"
                    >
                      {isHexCopied ? (
                        <>
                          <Check className="w-3 h-3 text-[#4efff3]" />
                          <span>¡Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>HEX</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleCopy(`var(--color-${color.key})`, color.key, 'var')}
                      className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[rgba(26,41,62,0.6)] hover:bg-[rgba(26,41,62,0.9)] border border-[rgba(163,184,204,0.15)] text-[11px] font-mono text-[#dbe2f9] hover:text-[#4efff3] transition-colors cursor-pointer"
                    >
                      {isVarCopied ? (
                        <>
                          <Check className="w-3 h-3 text-[#4efff3]" />
                          <span>¡Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>CSS Var</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
};
