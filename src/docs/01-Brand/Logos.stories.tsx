import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Download, Copy, Check, Sparkles, Image, Terminal, ShieldAlert, CheckCircle2, FileCode, Layers } from 'lucide-react';

const meta = {
  title: '01. Brand & Identidad/03. Logotipo & Identidad Gráfica',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

interface LogoAsset {
  id: string;
  name: string;
  filename: string;
  type: 'SVG Maestro' | 'PNG Oficial';
  resolution: string;
  weight: string;
  description: string;
  usage: string;
  previewUrl: string;
  downloadUrl: string;
  isMaster?: boolean;
}

const LOGO_ASSETS: LogoAsset[] = [
  {
    id: 'master-svg',
    name: 'SVG Maestro (Trazados Originales de Inkscape)',
    filename: 'logo.svg',
    type: 'SVG Maestro',
    resolution: '720 × 720 px (Vectorial Infinito)',
    weight: '30.6 KB',
    description: 'Archivo vectorial maestro con trazados de nodos, capas, filtros de desenfoque y paleta de gradientes nativos de Inkscape. Utilizado para crear cualquier variación gráfica derivada.',
    usage: 'Edición en Inkscape o Figma, escalado a cualquier dimensión sin pérdida, imprenta y producción.',
    previewUrl: '/logo/logo.svg',
    downloadUrl: '/logo/logo.svg',
    isMaster: true,
  },
  {
    id: 'luna-killa',
    name: 'Logotipo Completo Oficial (Isotipo + Wordmark)',
    filename: 'logo-LUNA-KILLA.png',
    type: 'PNG Oficial',
    resolution: '720 × 720 px (RGBA Transparente)',
    weight: '215 KB',
    description: 'Composición oficial completa que integra el isotipo de montaña lunar con el logotipo tipográfico "KILLA" en cian eléctrico.',
    usage: 'Cabeceras de documentación, portadas, banners institucionales, tarjetas de presentación.',
    previewUrl: '/logo/logo-LUNA-KILLA.png',
    downloadUrl: '/logo/logo-LUNA-KILLA.png',
  },
  {
    id: 'luna-montain',
    name: 'Isotipo Primario (Montaña Lunar)',
    filename: 'logo-LUNA-MONTAIN.png',
    type: 'PNG Oficial',
    resolution: '720 × 720 px (RGBA Transparente)',
    weight: '126 KB',
    description: 'Símbolo geométrico emblemático de picos lunares con gradiente cibernético cian a azul pizarra profundo.',
    usage: 'Favicons, avatars de perfiles de usuario, iconos de aplicación móvil, esquinas de navegación.',
    previewUrl: '/logo/logo-LUNA-MONTAIN.png',
    downloadUrl: '/logo/logo-LUNA-MONTAIN.png',
  },
  {
    id: 'luna-montain2',
    name: 'Isotipo Variante (Montaña Profunda)',
    filename: 'logo-LUNA-MONTAIN2.png',
    type: 'PNG Oficial',
    resolution: '720 × 720 px (RGBA Transparente)',
    weight: '238 KB',
    description: 'Variación de la montaña lunar con tonalidades y sombras reforzadas para fondos de alto contraste.',
    usage: 'Módulos especiales, interfaces instrumentales y fondos de telemetría orbital.',
    previewUrl: '/logo/logo-LUNA-MONTAIN2.png',
    downloadUrl: '/logo/logo-LUNA-MONTAIN2.png',
  },
  {
    id: 'luna',
    name: 'Isotipo Orbital (Luna Pura)',
    filename: 'logo-LUNA.png',
    type: 'PNG Oficial',
    resolution: '720 × 720 px (RGBA Transparente)',
    weight: '215 KB',
    description: 'Variante circular minimalista que resalta el arco lunar y la esfera celeste.',
    usage: 'Sellos de autenticación, sellos de seguridad y distintivos de certificación.',
    previewUrl: '/logo/logo-LUNA.png',
    downloadUrl: '/logo/logo-LUNA.png',
  },
];

export const LogosShowcase: Story = {
  render: () => {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopyPath = (url: string, id: string) => {
      navigator.clipboard.writeText(url);
      setCopiedId(`path-${id}`);
      setTimeout(() => setCopiedId(null), 2000);
    };

    const handleCopyImgTag = (url: string, name: string, id: string) => {
      const tag = `<img src="${url}" alt="${name}" width="120" height="120" />`;
      navigator.clipboard.writeText(tag);
      setCopiedId(`tag-${id}`);
      setTimeout(() => setCopiedId(null), 2000);
    };

    const master = LOGO_ASSETS.find((a) => a.isMaster)!;
    const variants = LOGO_ASSETS.filter((a) => !a.isMaster);

    return (
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#4efff3] mb-2">
            01. Brand Identity // Visual Assets & Vector Master
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-['Space_Grotesk'] tracking-tight">
            Logotipo Oficial & Identidad Gráfica
          </h1>
          <p className="text-[#a3b8cc] text-sm sm:text-base mt-2 max-w-3xl font-['Inter']">
            La identidad visual de <strong className="text-white">KILLA / Cyber Lunar</strong> combina la geometría mineral de los picos lunares con gradientes electroluminiscentes. Aquí encontrarás todas las variantes oficiales en alta resolución (720×720 px) y el archivo maestro vectorial de <strong className="text-white">Inkscape</strong> para generar nuevas adaptaciones.
          </p>
        </div>

        {/* HERO: SVG Maestro Inkscape */}
        <div className="relative overflow-hidden rounded-2xl border border-[rgba(78,255,243,0.3)] bg-gradient-to-br from-[rgba(26,41,62,0.9)] via-[rgba(15,25,44,0.95)] to-[#0b1323] p-8 sm:p-10 backdrop-blur-2xl shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(78,255,243,0.1)] border border-[rgba(78,255,243,0.3)] text-[#4efff3] text-xs font-mono uppercase">
                <FileCode className="w-3.5 h-3.5" />
                Archivo Maestro Vectorial de Inkscape
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk'] leading-tight">
                {master.name}
              </h2>

              <p className="text-sm text-[#a3b8cc] font-['Inter'] leading-relaxed">
                {master.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-[#a3b8cc]">
                <div className="p-2.5 rounded-lg bg-[rgba(11,19,35,0.7)] border border-[rgba(163,184,204,0.1)]">
                  <span className="text-[#849492] block text-[10px]">Formato:</span>
                  <span className="font-bold text-white">SVG 1.1 (Inkscape)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[rgba(11,19,35,0.7)] border border-[rgba(163,184,204,0.1)]">
                  <span className="text-[#849492] block text-[10px]">Lienzo:</span>
                  <span className="font-bold text-[#4efff3]">720 × 720 px</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[rgba(11,19,35,0.7)] border border-[rgba(163,184,204,0.1)]">
                  <span className="text-[#849492] block text-[10px]">Peso:</span>
                  <span className="font-bold text-white">{master.weight}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={master.downloadUrl}
                  download={master.filename}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#4efff3] text-[#0b1323] font-bold font-['Space_Grotesk'] text-sm tracking-wide transition-all hover:shadow-[0_0_24px_rgba(78,255,243,0.5)] hover:-translate-y-0.5 cursor-pointer"
                >
                  <Download className="w-4 h-4 stroke-[2.5]" />
                  <span>Descargar logo.svg (Maestro)</span>
                </a>

                <button
                  onClick={() => handleCopyPath(master.downloadUrl, master.id)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[rgba(26,41,62,0.8)] hover:bg-[rgba(26,41,62,1)] border border-[rgba(163,184,204,0.25)] text-white text-xs font-mono transition-colors cursor-pointer"
                >
                  {copiedId === `path-${master.id}` ? (
                    <>
                      <Check className="w-4 h-4 text-[#4efff3]" />
                      <span className="text-[#4efff3]">¡Ruta Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Ruta Pública</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Visual SVG Master Preview Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-[rgba(11,19,35,0.9)] border border-[rgba(78,255,243,0.3)] shadow-[0_0_30px_rgba(78,255,243,0.15)] flex items-center justify-center p-6 group hover:border-[#4efff3] transition-all">
              <img
                src={master.previewUrl}
                alt={master.name}
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(78,255,243,0.3)] group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-3 right-3 text-[10px] font-mono text-[#4efff3] bg-black/60 px-2 py-0.5 rounded border border-[rgba(78,255,243,0.2)]">
                SVG Original
              </span>
            </div>
          </div>
        </div>

        {/* Variantes Oficiales PNG (720x720) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
              <Layers className="w-6 h-6 text-[#4efff3]" />
              Variantes de Marca en Alta Resolución (PNG 720×720)
            </h2>
            <span className="text-xs font-mono text-[#a3b8cc]">RGBA Transparente</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {variants.map((asset) => {
              const isPathCopied = copiedId === `path-${asset.id}`;
              const isTagCopied = copiedId === `tag-${asset.id}`;

              return (
                <div
                  key={asset.id}
                  className="rounded-2xl border border-[rgba(163,184,204,0.15)] bg-[rgba(15,25,44,0.7)] backdrop-blur-xl p-6 flex flex-col justify-between space-y-6 hover:border-[#4efff3]/50 hover:shadow-[0_0_20px_rgba(78,255,243,0.12)] transition-all"
                >
                  <div className="space-y-4">
                    {/* Image Preview Box */}
                    <div className="relative h-60 w-full rounded-xl bg-[rgba(11,19,35,0.85)] border border-[rgba(163,184,204,0.12)] flex items-center justify-center p-4 overflow-hidden group">
                      <img
                        src={asset.previewUrl}
                        alt={asset.name}
                        className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_12px_rgba(78,255,243,0.25)] group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 text-[10px] font-mono text-[#a3b8cc] bg-black/50 px-2 py-0.5 rounded border border-white/10">
                        {asset.resolution}
                      </span>
                    </div>

                    {/* Metadata */}
                    <div>
                      <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">
                        {asset.name}
                      </h3>
                      <code className="text-xs font-mono text-[#4efff3] block mt-0.5">
                        {asset.filename}
                      </code>
                      <p className="text-xs text-[#a3b8cc] mt-2 font-['Inter'] leading-relaxed">
                        {asset.description}
                      </p>
                      <p className="text-[11px] text-[#849492] mt-1 font-['Inter']">
                        <strong className="text-[#a3b8cc]">Uso sugerido:</strong> {asset.usage}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-4 border-t border-[rgba(163,184,204,0.1)]">
                    <a
                      href={asset.downloadUrl}
                      download={asset.filename}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#4efff3] text-[#0b1323] text-xs font-bold font-['Space_Grotesk'] hover:shadow-[0_0_15px_rgba(78,255,243,0.4)] transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Descargar {asset.filename}</span>
                    </a>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleCopyPath(asset.downloadUrl, asset.id)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[rgba(26,41,62,0.8)] hover:bg-[rgba(26,41,62,1)] border border-[rgba(163,184,204,0.2)] text-[11px] font-mono text-white transition-colors cursor-pointer"
                      >
                        {isPathCopied ? (
                          <>
                            <Check className="w-3 h-3 text-[#4efff3]" />
                            <span className="text-[#4efff3]">¡Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar Ruta</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => handleCopyImgTag(asset.downloadUrl, asset.name, asset.id)}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[rgba(26,41,62,0.8)] hover:bg-[rgba(26,41,62,1)] border border-[rgba(163,184,204,0.2)] text-[11px] font-mono text-white transition-colors cursor-pointer"
                      >
                        {isTagCopied ? (
                          <>
                            <Check className="w-3 h-3 text-[#4efff3]" />
                            <span className="text-[#4efff3]">¡Tag Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar Tag &lt;img&gt;</span>
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

        {/* Guía de Reglas de Marca (Brand Guidelines) */}
        <div className="p-8 rounded-2xl border border-[rgba(163,184,204,0.15)] bg-[rgba(24,31,48,0.7)] backdrop-blur-md space-y-6">
          <h2 className="text-xl font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#4efff3]" />
            Reglas de Uso y Protección de Marca
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.1)] space-y-2">
              <span className="font-mono text-xs font-bold text-[#4efff3] uppercase tracking-wider block">
                1. Área de Protección (Clearspace)
              </span>
              <p className="text-xs text-[#a3b8cc] leading-relaxed">
                Mantén siempre un margen libre de elementos gráficos o textos equivalente al menos al <strong>25% de la altura</strong> del isotipo alrededor de todo el marco.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.1)] space-y-2">
              <span className="font-mono text-xs font-bold text-[#4efff3] uppercase tracking-wider block">
                2. Tamaños Mínimos
              </span>
              <p className="text-xs text-[#a3b8cc] leading-relaxed">
                • <strong>Isotipo aislado:</strong> Mínimo 24×24 px en pantalla.<br />
                • <strong>Logotipo completo con texto:</strong> Mínimo 120 px de ancho para preservar la legibilidad de "KILLA".
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.1)] space-y-2">
              <span className="font-mono text-xs font-bold text-[#4efff3] uppercase tracking-wider block">
                3. Fondos Permitidos
              </span>
              <p className="text-xs text-[#a3b8cc] leading-relaxed">
                El logo está optimizado exclusivamente para fondos oscuros (<code className="text-[#4efff3]">#0B1323</code>, <code className="text-[#4efff3]">#141B2C</code>, <code className="text-[#4efff3]">#1A293E</code>). No usar sobre fondos blancos o claros que anulen el contraste cian.
              </p>
            </div>
          </div>
        </div>

        {/* Guía de Flujo de Trabajo con Inkscape */}
        <div className="p-8 rounded-2xl border border-[rgba(78,255,243,0.25)] bg-[rgba(15,25,44,0.8)] backdrop-blur-xl space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#4efff3]" />
                Flujo de Trabajo para Diseñadores con Inkscape
              </h2>
              <p className="text-xs text-[#a3b8cc] mt-1">
                Cómo abrir, modificar y exportar nuevas variaciones utilizando el archivo vectorial maestro <code className="text-[#4efff3] font-mono">logo.svg</code>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white font-mono">1. Edición Gráfica en Inkscape (GUI)</h3>
              <ol className="text-xs text-[#a3b8cc] space-y-2 list-decimal list-inside leading-relaxed font-['Inter']">
                <li>Descarga el archivo <code className="text-[#4efff3]">logo.svg</code> mediante el botón superior.</li>
                <li>Ábrelo en Inkscape (v1.4 o superior recomendado).</li>
                <li>
                  En el panel <em>Capas y Objetos</em> (<kbd className="bg-black/50 px-1 py-0.5 rounded text-white font-mono">Ctrl+Shift+L</kbd>), encontrarás los grupos del isotipo de montaña y la tipografía KILLA aislados.
                </li>
                <li>
                  Los gradientes están vinculados a las muestras del documento (<code className="text-[#4efff3]">#56f7f2</code>, <code className="text-[#4efff3]">#13ffd0</code>, <code className="text-[#4efff3]">#203554</code>). Modifícalos con la herramienta de degradados (<kbd className="bg-black/50 px-1 py-0.5 rounded text-white font-mono">G</kbd>).
                </li>
              </ol>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white font-mono">2. Comandos CLI para Exportación por Lotes</h3>
              <p className="text-xs text-[#a3b8cc]">
                Si tienes Inkscape instalado en tu terminal, puedes automatizar exportaciones de alta resolución:
              </p>
              <pre className="p-4 rounded-xl bg-black/60 border border-[rgba(163,184,204,0.15)] text-[11px] font-mono text-[#4efff3] overflow-x-auto space-y-1.5 leading-relaxed">
{`# Exportar PNG a 96 DPI estándar (720x720)
inkscape public/logo/logo.svg --export-filename=variacion-96.png --export-dpi=96

# Exportar PNG en ultra resolución (300 DPI) para imprenta
inkscape public/logo/logo.svg --export-filename=variacion-300.png --export-dpi=300

# Exportar SVG optimizado sin metadatos de edición
inkscape public/logo/logo.svg --export-plain-svg --export-filename=logo-clean.svg`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
