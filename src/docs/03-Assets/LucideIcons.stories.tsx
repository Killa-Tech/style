import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Search, Copy, Check, Sparkles, Activity, Shield, Terminal, Server,
  ArrowRight, ChevronRight, Menu, Home, Compass, ExternalLink,
  Cpu, Gauge, Radio, Wifi, Zap, Signal, BatteryCharging, AlertTriangle, CheckCircle, ShieldAlert,
  Download, Upload, Edit, Trash2, Plus, RefreshCw, Send,
  Lock, Unlock, Key, Fingerprint, Eye, EyeOff, UserCheck,
  HardDrive, Database, Laptop, Monitor, Smartphone, Moon, Sun, Layers, Orbit, Globe, Code
} from 'lucide-react';

const meta = {
  title: '03. Iconografía/01. Explorador Lucide Icons',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

interface IconItem {
  name: string;
  category: 'navegacion' | 'telemetria' | 'acciones' | 'seguridad' | 'hardware' | 'visual';
  component: React.ComponentType<{ size?: number; className?: string }>;
}

const ICONS_CATALOG: IconItem[] = [
  // Navegación
  { name: 'ArrowRight', category: 'navegacion', component: ArrowRight },
  { name: 'ChevronRight', category: 'navegacion', component: ChevronRight },
  { name: 'Menu', category: 'navegacion', component: Menu },
  { name: 'Home', category: 'navegacion', component: Home },
  { name: 'Compass', category: 'navegacion', component: Compass },
  { name: 'ExternalLink', category: 'navegacion', component: ExternalLink },

  // Telemetría & Estado
  { name: 'Activity', category: 'telemetria', component: Activity },
  { name: 'Cpu', category: 'telemetria', component: Cpu },
  { name: 'Gauge', category: 'telemetria', component: Gauge },
  { name: 'Radio', category: 'telemetria', component: Radio },
  { name: 'Wifi', category: 'telemetria', component: Wifi },
  { name: 'Zap', category: 'telemetria', component: Zap },
  { name: 'Signal', category: 'telemetria', component: Signal },
  { name: 'BatteryCharging', category: 'telemetria', component: BatteryCharging },
  { name: 'AlertTriangle', category: 'telemetria', component: AlertTriangle },
  { name: 'CheckCircle', category: 'telemetria', component: CheckCircle },
  { name: 'ShieldAlert', category: 'telemetria', component: ShieldAlert },

  // Acciones
  { name: 'Search', category: 'acciones', component: Search },
  { name: 'Download', category: 'acciones', component: Download },
  { name: 'Upload', category: 'acciones', component: Upload },
  { name: 'Copy', category: 'acciones', component: Copy },
  { name: 'Edit', category: 'acciones', component: Edit },
  { name: 'Trash2', category: 'acciones', component: Trash2 },
  { name: 'Plus', category: 'acciones', component: Plus },
  { name: 'RefreshCw', category: 'acciones', component: RefreshCw },
  { name: 'Send', category: 'acciones', component: Send },
  { name: 'Check', category: 'acciones', component: Check },

  // Seguridad & Acceso
  { name: 'Shield', category: 'seguridad', component: Shield },
  { name: 'Lock', category: 'seguridad', component: Lock },
  { name: 'Unlock', category: 'seguridad', component: Unlock },
  { name: 'Key', category: 'seguridad', component: Key },
  { name: 'Fingerprint', category: 'seguridad', component: Fingerprint },
  { name: 'Eye', category: 'seguridad', component: Eye },
  { name: 'EyeOff', category: 'seguridad', component: EyeOff },
  { name: 'UserCheck', category: 'seguridad', component: UserCheck },

  // Hardware & Infraestructura
  { name: 'Server', category: 'hardware', component: Server },
  { name: 'HardDrive', category: 'hardware', component: HardDrive },
  { name: 'Database', category: 'hardware', component: Database },
  { name: 'Terminal', category: 'hardware', component: Terminal },
  { name: 'Laptop', category: 'hardware', component: Laptop },
  { name: 'Monitor', category: 'hardware', component: Monitor },
  { name: 'Smartphone', category: 'hardware', component: Smartphone },

  // Visual & Cyber
  { name: 'Sparkles', category: 'visual', component: Sparkles },
  { name: 'Moon', category: 'visual', component: Moon },
  { name: 'Sun', category: 'visual', component: Sun },
  { name: 'Layers', category: 'visual', component: Layers },
  { name: 'Orbit', category: 'visual', component: Orbit },
  { name: 'Globe', category: 'visual', component: Globe },
  { name: 'Code', category: 'visual', component: Code },
];

export const LucideIconExplorer: Story = {
  render: () => {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [iconSize, setIconSize] = useState<number>(24);
    const [iconColor, setIconColor] = useState<string>('#4efff3');
    const [copiedInfo, setCopiedInfo] = useState<string | null>(null);

    const categories = [
      { id: 'all', label: 'Todos' },
      { id: 'telemetria', label: 'Telemetría & Estado' },
      { id: 'seguridad', label: 'Seguridad & Acceso' },
      { id: 'hardware', label: 'Hardware & Redes' },
      { id: 'acciones', label: 'Acciones' },
      { id: 'navegacion', label: 'Navegación' },
      { id: 'visual', label: 'Visual & Lunar' },
    ];

    const colors = [
      { label: 'Cyan Primario', value: '#4efff3' },
      { label: 'Plata Lunar', value: '#a3b8cc' },
      { label: 'Blanco Puro', value: '#ffffff' },
      { label: 'Alerta Roja', value: '#ffb4ab' },
    ];

    const filtered = ICONS_CATALOG.filter((i) => {
      const matchesCat = selectedCategory === 'all' || i.category === selectedCategory;
      const matchesSearch = i.name.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });

    const copyJSX = (name: string) => {
      const code = `<${name} size={${iconSize}} color="${iconColor}" />`;
      navigator.clipboard.writeText(code);
      setCopiedInfo(`JSX: ${name}`);
      setTimeout(() => setCopiedInfo(null), 2000);
    };

    const copyImport = (name: string) => {
      const code = `import { ${name} } from 'lucide-react';`;
      navigator.clipboard.writeText(code);
      setCopiedInfo(`Import: ${name}`);
      setTimeout(() => setCopiedInfo(null), 2000);
    };

    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#4efff3] mb-2">03. Iconography // Lucide Icon Family</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-['Space_Grotesk'] tracking-tight">
            Familia de Iconos Lucide
          </h1>
          <p className="text-[#a3b8cc] text-sm sm:text-base mt-2 max-w-2xl font-['Inter']">
            Lucide proporciona iconografía vectorial nítida con trazos de 1.5px / 2px. Haz clic en cualquier icono para copiar su etiqueta JSX o su declaración de importación.
          </p>
        </div>

        {/* Floating Notification */}
        {copiedInfo && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0b1323] border border-[#4efff3] shadow-[0_0_20px_rgba(78,255,243,0.4)] text-white text-xs font-mono">
            <Check className="w-4 h-4 text-[#4efff3]" />
            <span>¡Copiado al portapapeles: <strong>{copiedInfo}</strong>!</span>
          </div>
        )}

        {/* Toolbar: Filters, Size & Color Playgrounds */}
        <div className="p-6 rounded-xl border border-[rgba(163,184,204,0.15)] bg-[rgba(15,25,44,0.7)] backdrop-blur-md space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#a3b8cc] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar iconos por nombre (ej. Shield, Activity, Terminal)..."
                className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-[rgba(11,19,35,0.8)] border border-[rgba(163,184,204,0.2)] text-white text-xs placeholder:text-[#849492] focus:outline-none focus:border-[#4efff3] focus:ring-1 focus:ring-[#4efff3]"
              />
            </div>

            {/* Size & Color Controls */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#a3b8cc]">
                <span>Tamaño:</span>
                {[16, 20, 24, 32].map((s) => (
                  <button
                    key={s}
                    onClick={() => setIconSize(s)}
                    className={`px-2 py-1 rounded text-xs transition-colors cursor-pointer ${
                      iconSize === s ? 'bg-[#4efff3] text-[#0b1323] font-bold' : 'bg-[rgba(26,41,62,0.8)] text-white'
                    }`}
                  >
                    {s}px
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-[#a3b8cc]">
                <span>Color:</span>
                {colors.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setIconColor(c.value)}
                    title={c.label}
                    className="w-5 h-5 rounded-full border-2 transition-transform hover:scale-110 cursor-pointer"
                    style={{
                      backgroundColor: c.value,
                      borderColor: iconColor === c.value ? '#ffffff' : 'transparent',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[rgba(163,184,204,0.08)]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#4efff3] text-[#0b1323] font-semibold'
                    : 'bg-[rgba(26,41,62,0.5)] text-[#a3b8cc] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map((item) => {
            const Icon = item.component;

            return (
              <div
                key={item.name}
                className="group p-4 rounded-xl border border-[rgba(163,184,204,0.12)] bg-[rgba(15,25,44,0.6)] backdrop-blur-md flex flex-col items-center justify-between text-center space-y-3 hover:border-[#4efff3]/50 hover:shadow-[0_0_15px_rgba(78,255,243,0.15)] transition-all"
              >
                {/* Icon Rendering */}
                <div className="h-14 flex items-center justify-center transition-transform group-hover:scale-110">
                  <Icon size={iconSize} className="transition-colors" />
                </div>

                {/* Name */}
                <span className="font-mono text-xs font-medium text-white truncate w-full">
                  {item.name}
                </span>

                {/* Quick copy actions */}
                <div className="grid grid-cols-2 gap-1 w-full pt-2 border-t border-[rgba(163,184,204,0.08)] opacity-70 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => copyJSX(item.name)}
                    className="py-1 px-1 rounded bg-[rgba(26,41,62,0.8)] hover:bg-[#4efff3] hover:text-[#0b1323] text-[10px] font-mono text-[#dbe2f9] transition-colors cursor-pointer"
                    title="Copiar etiqueta JSX"
                  >
                    JSX
                  </button>
                  <button
                    onClick={() => copyImport(item.name)}
                    className="py-1 px-1 rounded bg-[rgba(26,41,62,0.8)] hover:bg-[#4efff3] hover:text-[#0b1323] text-[10px] font-mono text-[#dbe2f9] transition-colors cursor-pointer"
                    title="Copiar import"
                  >
                    Import
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
