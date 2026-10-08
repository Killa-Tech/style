/**
 * Cyber Lunar Design Tokens
 * Fuente de verdad extraída de cyber-luna.md
 */

export interface ColorToken {
  name: string;
  key: string;
  hex: string;
  rgb?: string;
  description: string;
  category: 'surfaces' | 'accents' | 'semantics' | 'fixed';
  onColor?: string;
}

export const CYBER_LUNAR_COLORS: ColorToken[] = [
  // Superficies
  {
    name: 'Canvas Base / Surface',
    key: 'surface',
    hex: '#0b1323',
    rgb: 'rgb(11, 19, 35)',
    description: 'Fondo del canvas principal en toda la aplicación. Absorbe el retroceso lumínico sin fatiga visual.',
    category: 'surfaces',
    onColor: '#dbe2f9',
  },
  {
    name: 'Surface Dim',
    key: 'surface-dim',
    hex: '#0b1323',
    rgb: 'rgb(11, 19, 35)',
    description: 'Nivel tenue de superficie para áreas inactivas o fondos profundos.',
    category: 'surfaces',
    onColor: '#dbe2f9',
  },
  {
    name: 'Surface Bright',
    key: 'surface-bright',
    hex: '#31394b',
    rgb: 'rgb(49, 57, 75)',
    description: 'Superficie de alto contraste para destacar contenedores primarios.',
    category: 'surfaces',
    onColor: '#ffffff',
  },
  {
    name: 'Surface Container Lowest',
    key: 'surface-container-lowest',
    hex: '#060e1e',
    rgb: 'rgb(6, 14, 30)',
    description: 'Capa más profunda de la jerarquía visual.',
    category: 'surfaces',
    onColor: '#dbe2f9',
  },
  {
    name: 'Surface Container Low',
    key: 'surface-container-low',
    hex: '#141b2c',
    rgb: 'rgb(20, 27, 44)',
    description: 'Base para secciones y paneles de fondo.',
    category: 'surfaces',
    onColor: '#dbe2f9',
  },
  {
    name: 'Surface Container',
    key: 'surface-container',
    hex: '#181f30',
    rgb: 'rgb(24, 31, 48)',
    description: 'Contenedor estándar para tarjetas, módulos y agrupaciones.',
    category: 'surfaces',
    onColor: '#dbe2f9',
  },
  {
    name: 'Surface Container High',
    key: 'surface-container-high',
    hex: '#222a3b',
    rgb: 'rgb(34, 42, 59)',
    description: 'Superficie elevada para barras de herramientas y menús desplegables.',
    category: 'surfaces',
    onColor: '#dbe2f9',
  },
  {
    name: 'Surface Container Highest',
    key: 'surface-container-highest',
    hex: '#2d3546',
    rgb: 'rgb(45, 53, 70)',
    description: 'Nivel superior de superficie para diálogos modales y paneles flotantes.',
    category: 'surfaces',
    onColor: '#ffffff',
  },
  {
    name: 'On Surface',
    key: 'on-surface',
    hex: '#dbe2f9',
    rgb: 'rgb(219, 226, 249)',
    description: 'Color estándar para texto y contenido sobre superficies oscuras.',
    category: 'surfaces',
  },
  {
    name: 'On Surface Variant',
    key: 'on-surface-variant',
    hex: '#bacac7',
    rgb: 'rgb(186, 202, 199)',
    description: 'Texto secundario y elementos ornamentales sobre superficies.',
    category: 'surfaces',
  },
  {
    name: 'Outline',
    key: 'outline',
    hex: '#849492',
    rgb: 'rgb(132, 148, 146)',
    description: 'Bordes nítidos para delimitar componentes y separadores.',
    category: 'surfaces',
  },
  {
    name: 'Outline Variant',
    key: 'outline-variant',
    hex: '#3b4a48',
    rgb: 'rgb(59, 74, 72)',
    description: 'Bordes sutiles y líneas divisorias de baja jerarquía.',
    category: 'surfaces',
  },

  // Acentos & Identidad
  {
    name: 'Primary Electric Cyan',
    key: 'primary-cyan',
    hex: '#4efff3',
    rgb: 'rgb(78, 255, 243)',
    description: 'Cian eléctrico neon. Reservado para llamadas primarias, focos activos y auras lumínicas.',
    category: 'accents',
    onColor: '#0b1323',
  },
  {
    name: 'Secondary Slate Steel',
    key: 'secondary-steel',
    hex: '#1a293e',
    rgb: 'rgb(26, 41, 62)',
    description: 'Azul acero pizarra oscuro. Base para cards elevadas, toolbars y controles segmentados.',
    category: 'accents',
    onColor: '#ffffff',
  },
  {
    name: 'Tertiary Lunar Metallic',
    key: 'tertiary-lunar',
    hex: '#a3b8cc',
    rgb: 'rgb(163, 184, 204)',
    description: 'Plata metálica lunar. Ancla estructural para etiquetas secundarias, iconos y divisores.',
    category: 'accents',
    onColor: '#0b1323',
  },
  {
    name: 'Surface Tint',
    key: 'surface-tint',
    hex: '#00ded2',
    rgb: 'rgb(0, 222, 210)',
    description: 'Tinte de acento cian secundario para micro-interacciones.',
    category: 'accents',
    onColor: '#003734',
  },

  // Semántica
  {
    name: 'Error',
    key: 'error',
    hex: '#ffb4ab',
    rgb: 'rgb(255, 180, 171)',
    description: 'Estados de error críticos, alertas destructivas y validaciones fallidas.',
    category: 'semantics',
    onColor: '#690005',
  },
  {
    name: 'Error Container',
    key: 'error-container',
    hex: '#93000a',
    rgb: 'rgb(147, 0, 10)',
    description: 'Fondo contenedor para banners y bloques de alerta de error.',
    category: 'semantics',
    onColor: '#ffdad6',
  },

  // Fixed Tokens
  {
    name: 'Primary Fixed',
    key: 'primary-fixed',
    hex: '#47fbef',
    rgb: 'rgb(71, 251, 239)',
    description: 'Tono cian fijo de alto brillo independiente del tema.',
    category: 'fixed',
    onColor: '#00201e',
  },
  {
    name: 'Secondary Fixed',
    key: 'secondary-fixed',
    hex: '#d4e3ff',
    rgb: 'rgb(212, 227, 255)',
    description: 'Tono azul celeste fijo para insignias y estados informativos.',
    category: 'fixed',
    onColor: '#0c1c30',
  },
  {
    name: 'Tertiary Fixed',
    key: 'tertiary-fixed',
    hex: '#d0e5fa',
    rgb: 'rgb(208, 229, 250)',
    description: 'Tono plateado fijo para indicadores auxiliares.',
    category: 'fixed',
    onColor: '#071d2d',
  },
];

export interface TypographyToken {
  key: string;
  name: string;
  fontFamily: 'Space Grotesk' | 'Inter';
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing?: string;
  mobile?: {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    letterSpacing?: string;
  };
  usage: string;
}

export const CYBER_LUNAR_TYPOGRAPHY: TypographyToken[] = [
  {
    key: 'display-lg',
    name: 'Display LG',
    fontFamily: 'Space Grotesk',
    fontSize: '56px',
    fontWeight: '700',
    lineHeight: '64px',
    letterSpacing: '-0.02em',
    mobile: {
      fontSize: '36px',
      fontWeight: '700',
      lineHeight: '44px',
      letterSpacing: '-0.01em',
    },
    usage: 'Títulos hero masivos y números de impacto en dashboards de misión crítica.',
  },
  {
    key: 'headline-xl',
    name: 'Headline XL',
    fontFamily: 'Space Grotesk',
    fontSize: '40px',
    fontWeight: '700',
    lineHeight: '48px',
    letterSpacing: '-0.01em',
    mobile: {
      fontSize: '28px',
      fontWeight: '700',
      lineHeight: '36px',
      letterSpacing: '0em',
    },
    usage: 'Encabezados principales de páginas y vistas de alto nivel.',
  },
  {
    key: 'headline-lg',
    name: 'Headline LG',
    fontFamily: 'Space Grotesk',
    fontSize: '32px',
    fontWeight: '600',
    lineHeight: '40px',
    letterSpacing: '0em',
    usage: 'Títulos de módulos y secciones mayores.',
  },
  {
    key: 'headline-md',
    name: 'Headline MD',
    fontFamily: 'Space Grotesk',
    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '32px',
    letterSpacing: '0.01em',
    usage: 'Títulos de tarjetas, paneles y modales.',
  },
  {
    key: 'headline-sm',
    name: 'Headline SM',
    fontFamily: 'Space Grotesk',
    fontSize: '20px',
    fontWeight: '600',
    lineHeight: '28px',
    letterSpacing: '0.01em',
    usage: 'Subtítulos de tarjetas y agrupadores secundarios.',
  },
  {
    key: 'body-lg',
    name: 'Body LG',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '28px',
    usage: 'Párrafos introductorios y texto destacado de lectura.',
  },
  {
    key: 'body-md',
    name: 'Body MD',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    usage: 'Texto de lectura principal, descripciones y documentación.',
  },
  {
    key: 'body-sm',
    name: 'Body SM',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
    usage: 'Tablas de datos densas, listas técnicas y notas al pie.',
  },
  {
    key: 'label-lg',
    name: 'Label LG',
    fontFamily: 'Space Grotesk',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '20px',
    letterSpacing: '0.06em',
    usage: 'Botones principales, tabs activos y etiquetas de formulario.',
  },
  {
    key: 'label-md',
    name: 'Label MD',
    fontFamily: 'Space Grotesk',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '16px',
    letterSpacing: '0.08em',
    usage: 'Badges de telemetría, tags y etiquetas de estado.',
  },
  {
    key: 'label-sm',
    name: 'Label SM',
    fontFamily: 'Space Grotesk',
    fontSize: '10px',
    fontWeight: '500',
    lineHeight: '14px',
    letterSpacing: '0.1em',
    usage: 'Marcadores de aparatos técnicos, coordenadas y timestamps HUD.',
  },
];

export const CYBER_LUNAR_SPACING = [
  { key: 'space-xs', value: '0.25rem', px: 4, usage: 'Micro-espaciado entre iconos y texto, padding de pills' },
  { key: 'space-sm', value: '0.5rem', px: 8, usage: 'Espaciado compacto entre elementos relacionados, gaps en grupos de botones' },
  { key: 'space-md', value: '1rem', px: 16, usage: 'Padding estándar de tarjetas, inputs y separadores' },
  { key: 'space-lg', value: '1.5rem', px: 24, usage: 'Gutter de rejilla en escritorio, padding de modales' },
  { key: 'space-xl', value: '2.5rem', px: 40, usage: 'Separación entre secciones mayores del layout' },
  { key: 'margin', value: '2rem', px: 32, usage: 'Margen lateral en pantallas grandes (Desktop 1200px+)' },
  { key: 'gutter', value: '1.5rem', px: 24, usage: 'Espacio entre columnas en rejilla de 12 columnas' },
];

export const CYBER_LUNAR_ROUNDED = [
  { key: 'sm', value: '0.25rem', px: 4, usage: 'Tags compactos, indicadores diminutos' },
  { key: 'DEFAULT', value: '0.5rem', px: 8, usage: 'Botones, inputs, badges de estado estándar' },
  { key: 'md', value: '0.75rem', px: 12, usage: 'Elementos medianos, flyouts compactos' },
  { key: 'lg', value: '1rem', px: 16, usage: 'Tarjetas, módulos, paneles y flyout dialogs' },
  { key: 'xl', value: '1.5rem', px: 24, usage: 'Modales de pantalla completa, contenedores mayores' },
  { key: 'full', value: '9999px', px: 'Pill', usage: 'Píldoras, toggles, micro-indicadores y avatars' },
];

export const CYBER_LUNAR_ELEVATION = [
  {
    tier: 'Superficie 0 (Base Canvas)',
    bg: '#0B1323',
    border: 'none',
    shadow: 'none',
    blur: '0px',
    description: 'Fondo plano profundo. Contexto base con cero elevación visual.',
  },
  {
    tier: 'Superficie 1 (Glass Floor)',
    bg: 'rgba(15, 25, 44, 0.7)',
    border: '1px solid rgba(163, 184, 204, 0.12)',
    shadow: 'none',
    blur: 'backdrop-filter: blur(12px)',
    description: 'Suelo translúcido para tarjetas y módulos en flujo.',
  },
  {
    tier: 'Superficie 2 (Elevated Instrument)',
    bg: 'rgba(26, 41, 62, 0.75)',
    border: '1px solid rgba(78, 255, 243, 0.2)',
    shadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    blur: 'backdrop-filter: blur(16px)',
    description: 'Instrumentación elevada para toolbars, controles destacados y paneles secundarios.',
  },
  {
    tier: 'Superficie 3 (Overlays & Modals)',
    bg: '#1A293E',
    border: '1px solid rgba(78, 255, 243, 0.4)',
    shadow: '0 20px 48px rgba(0, 0, 0, 0.6), 0 0 1px rgba(78, 255, 243, 0.4)',
    blur: 'none',
    description: 'Aislamiento ambiental profundo para modales, flyouts y diálogos críticos.',
  },
  {
    tier: 'Active Luminescence (Hover & Focus)',
    bg: 'rgba(26, 41, 62, 0.85)',
    border: '1px solid rgba(78, 255, 243, 0.8)',
    shadow: '0 0 20px -2px rgba(78, 255, 243, 0.25)',
    blur: 'backdrop-filter: blur(16px)',
    description: 'Aura lumínica activa al enfocar o pasar el cursor por un elemento interactivo.',
  },
];
