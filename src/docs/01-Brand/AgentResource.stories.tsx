import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Download, Copy, Check, Bot, FileText, Sparkles, Terminal, Shield, ArrowRight } from 'lucide-react';
import rawStyleMd from '../../../public/style.md?raw';

const meta = {
  title: '01. Brand & Identidad/02. Recurso para Agentes (style.md)',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const AgentResource: Story = {
  render: () => {
    const [copied, setCopied] = useState(false);
    const [showCode, setShowCode] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(rawStyleMd);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    };

    const handleDownload = () => {
      const blob = new Blob([rawStyleMd], { type: 'text/markdown;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'style.md';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    return (
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#4efff3] mb-2">01. Brand Resources // AI Agents Integration</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-['Space_Grotesk'] tracking-tight flex items-center gap-3">
            <Bot className="w-9 h-9 text-[#4efff3]" />
            Especificación para Agentes de IA (<code className="text-[#4efff3]">style.md</code>)
          </h1>
          <p className="text-[#a3b8cc] text-sm sm:text-base mt-2 max-w-3xl font-['Inter']">
            Este recurso condensa toda la guía de estilos <strong className="text-white">Cyber Lunar</strong> en un archivo Markdown estructurado con tokens en formato YAML y directrices semánticas, diseñado para ser inyectado como contexto o regla en agentes de inteligencia artificial (Antigravity, Cursor, Claude Code, Copilot, ChatGPT).
          </p>
        </div>

        {/* Action Card: Download & Quick Copy */}
        <div className="p-8 rounded-2xl border border-[rgba(78,255,243,0.3)] bg-gradient-to-br from-[rgba(26,41,62,0.9)] to-[rgba(15,25,44,0.95)] backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(78,255,243,0.1)] border border-[rgba(78,255,243,0.25)] text-[#4efff3] text-xs font-mono uppercase">
                <FileText className="w-3.5 h-3.5" />
                Archivo Listo para Descargar: style.md (~11 KB)
              </div>
              <h2 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                Descarga o Copia la Guía de Estilo Oficial
              </h2>
              <p className="text-xs sm:text-sm text-[#a3b8cc] max-w-xl font-['Inter']">
                Contiene todos los tokens de color, variables, escalas tipográficas de Space Grotesk e Inter, rejilla de 8px, radios y especificaciones de componentes.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#4efff3] text-[#0b1323] font-bold font-['Space_Grotesk'] text-sm tracking-wide transition-all hover:shadow-[0_0_24px_rgba(78,255,243,0.5)] hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Descargar style.md</span>
              </button>

              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[rgba(26,41,62,0.8)] hover:bg-[rgba(26,41,62,1)] border border-[rgba(163,184,204,0.3)] text-white font-medium font-['Space_Grotesk'] text-sm transition-all hover:border-[#4efff3] hover:text-[#4efff3] cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#4efff3]" />
                    <span className="text-[#4efff3]">¡Markdown Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar al Portapapeles</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick link fallback */}
          <div className="pt-4 border-t border-[rgba(163,184,204,0.12)] flex flex-wrap items-center justify-between text-xs font-mono text-[#a3b8cc]">
            <span>Enlace estático directo: <a href="/style.md" download="style.md" className="text-[#4efff3] underline hover:text-white">/style.md</a></span>
            <button
              onClick={() => setShowCode(!showCode)}
              className="text-[#4efff3] hover:underline cursor-pointer pt-2 sm:pt-0"
            >
              {showCode ? 'Ocultar Visor de Código ▲' : 'Ver Contenido Completo del Archivo ▼'}
            </button>
          </div>
        </div>

        {/* Expandable Code Viewer */}
        {showCode && (
          <div className="p-6 rounded-2xl border border-[rgba(163,184,204,0.15)] bg-[rgba(11,19,35,0.95)] backdrop-blur-md space-y-3 transition-all animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#4efff3]">style.md // Vista Previa del Archivo Fuente</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-[rgba(26,41,62,0.8)] hover:bg-[#4efff3] hover:text-[#0b1323] text-xs font-mono text-white transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar Todo</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-black/60 border border-[rgba(163,184,204,0.1)] text-xs font-mono text-[#dbe2f9] overflow-x-auto max-h-[500px] overflow-y-auto leading-relaxed">
              {rawStyleMd}
            </pre>
          </div>
        )}

        {/* Guía de Integración para Agentes */}
        <div className="p-8 rounded-2xl border border-[rgba(163,184,204,0.15)] bg-[rgba(15,25,44,0.7)] backdrop-blur-md space-y-6">
          <h2 className="text-xl font-bold text-white font-['Space_Grotesk'] flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#4efff3]" />
            Cómo Configurar `style.md` en tu Entorno de IA
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Antigravity / Gemini CLI */}
            <div className="p-5 rounded-xl bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.12)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white font-mono text-sm">Google Antigravity / Gemini CLI</span>
                <span className="text-[10px] font-mono text-[#4efff3] bg-[rgba(78,255,243,0.1)] px-2 py-0.5 rounded">Recomendado</span>
              </div>
              <p className="text-xs text-[#a3b8cc] leading-relaxed">
                Guarda el archivo en el directorio de reglas del proyecto para que Antigravity lo cargue automáticamente:
              </p>
              <div className="p-2.5 rounded bg-black/50 border border-[rgba(163,184,204,0.15)] font-mono text-xs text-[#4efff3]">
                .agents/rules/style.md
              </div>
              <p className="text-[11px] text-[#849492]">
                O en <code className="text-white">GEMINI.md</code> en la raíz del repositorio.
              </p>
            </div>

            {/* Cursor */}
            <div className="p-5 rounded-xl bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.12)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white font-mono text-sm">Cursor IDE</span>
                <span className="text-[10px] font-mono text-white/70 bg-white/10 px-2 py-0.5 rounded">Reglas</span>
              </div>
              <p className="text-xs text-[#a3b8cc] leading-relaxed">
                Coloca el archivo en el directorio de reglas de proyecto de Cursor:
              </p>
              <div className="p-2.5 rounded bg-black/50 border border-[rgba(163,184,204,0.15)] font-mono text-xs text-[#4efff3]">
                .cursor/rules/style.md
              </div>
              <p className="text-[11px] text-[#849492]">
                También puedes renombrarlo o copiar su contenido directamente en <code className="text-white">.cursorrules</code>.
              </p>
            </div>

            {/* Claude Code */}
            <div className="p-5 rounded-xl bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.12)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white font-mono text-sm">Claude Code / Anthropic</span>
                <span className="text-[10px] font-mono text-white/70 bg-white/10 px-2 py-0.5 rounded">Contexto</span>
              </div>
              <p className="text-xs text-[#a3b8cc] leading-relaxed">
                Agrega una referencia en el archivo de memoria de Claude en la raíz del proyecto:
              </p>
              <div className="p-2.5 rounded bg-black/50 border border-[rgba(163,184,204,0.15)] font-mono text-xs text-[#4efff3]">
                CLAUDE.md
              </div>
              <p className="text-[11px] text-[#849492]">
                Añade la instrucción: <em>"Sigue estrictamente la guía de diseño en style.md para cualquier componente de UI."</em>
              </p>
            </div>

            {/* GitHub Copilot / LLMs Generales */}
            <div className="p-5 rounded-xl bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.12)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white font-mono text-sm">GitHub Copilot / ChatGPT</span>
                <span className="text-[10px] font-mono text-white/70 bg-white/10 px-2 py-0.5 rounded">Instrucciones</span>
              </div>
              <p className="text-xs text-[#a3b8cc] leading-relaxed">
                Configura en las instrucciones globales del repositorio:
              </p>
              <div className="p-2.5 rounded bg-black/50 border border-[rgba(163,184,204,0.15)] font-mono text-xs text-[#4efff3]">
                .github/copilot-instructions.md
              </div>
              <p className="text-[11px] text-[#849492]">
                O arrastra <code className="text-white">style.md</code> a tu hilo de chat con el modelo.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
