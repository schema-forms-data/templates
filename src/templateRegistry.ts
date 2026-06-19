// ============================================
// Registro estático de templates visuais
// ============================================
// Cada template mapeia para uma FormTemplateConfig.
// NUNCA inclua lógica de campos/schema aqui.
// Este arquivo é EXCLUSIVAMENTE de apresentação visual.

import type { FormTemplateColors, FormTemplateConfig } from '@schema-forms-data/core';

// ── Paletas de cores ──────────────────────────────────────────────────────────

const defaultColors: FormTemplateColors = {
    primary: '#3b82f6',
    primaryHover: '#2563eb',
    accent: '#8b5cf6',
    background: 'hsl(var(--background))',
    surface: 'hsl(var(--card))',
    text: 'hsl(var(--foreground))',
    textMuted: 'hsl(var(--muted-foreground))',
    border: 'hsl(var(--border))',
    error: 'hsl(var(--destructive))',
};

const acampamentoColors: FormTemplateColors = {
    primary: '#f97316',
    primaryHover: '#ea580c',
    accent: '#ef4444',
    background: '#09090b',
    surface: 'rgba(24,24,27,0.9)',
    text: '#ffffff',
    textMuted: '#a1a1aa',
    border: 'rgba(249,115,22,0.2)',
    error: '#f87171',
};

const minimalColors: FormTemplateColors = {
    ...defaultColors,
    primary: '#18181b',
    primaryHover: '#27272a',
    accent: '#71717a',
    border: '#e4e4e7',
};

const corporativoColors: FormTemplateColors = {
    ...defaultColors,
    primary: '#1e3a5f',
    primaryHover: '#162d4a',
    accent: '#c9a84c',
};

const festivalColors: FormTemplateColors = {
    ...defaultColors,
    primary: '#ec4899',
    primaryHover: '#db2777',
    accent: '#8b5cf6',
    background: '#0f0f1a',
    text: '#ffffff',
    textMuted: '#a78bfa',
};

const retiroColors: FormTemplateColors = {
    ...defaultColors,
    primary: '#059669',
    primaryHover: '#047857',
    accent: '#6ee7b7',
};

const webinarColors: FormTemplateColors = {
    ...defaultColors,
    primary: '#0ea5e9',
    primaryHover: '#0284c7',
    accent: '#38bdf8',
};

const conferenciaColors: FormTemplateColors = {
    ...defaultColors,
    primary: '#6366f1',
    primaryHover: '#4f46e5',
    accent: '#818cf8',
};

const workshopColors: FormTemplateColors = {
    ...defaultColors,
    primary: '#d97706',
    primaryHover: '#b45309',
    accent: '#fbbf24',
};

const socialColors: FormTemplateColors = {
    ...defaultColors,
    primary: '#10b981',
    primaryHover: '#059669',
    accent: '#34d399',
};

const galaColors: FormTemplateColors = {
    ...defaultColors,
    primary: '#b45309',
    primaryHover: '#92400e',
    accent: '#f59e0b',
    background: '#0c0c0c',
    text: '#fafafa',
    textMuted: '#d4af37',
};

const acaoColors: FormTemplateColors = {
    ...defaultColors,
    primary: '#dc2626',
    primaryHover: '#b91c1c',
    accent: '#f97316',
};

const podcastColors: FormTemplateColors = {
    ...defaultColors,
    primary: '#7c3aed',
    primaryHover: '#6d28d9',
    accent: '#a78bfa',
};

const classicoColors: FormTemplateColors = {
    primary: '#374151',
    primaryHover: '#1f2937',
    accent: '#6b7280',
    background: '#ffffff',
    surface: '#f9fafb',
    text: '#111827',
    textMuted: '#6b7280',
    border: '#e5e7eb',
    error: '#ef4444',
};

const comunitarioColors: FormTemplateColors = {
    primary: '#16a34a',
    primaryHover: '#15803d',
    accent: '#4ade80',
    background: '#fefce8',
    surface: '#ffffff',
    text: '#1c1917',
    textMuted: '#78716c',
    border: '#d6d3d1',
    error: '#dc2626',
};

const noturnoColors: FormTemplateColors = {
    primary: '#d4af37',
    primaryHover: '#b8962e',
    accent: '#f0d060',
    background: '#0a0a0f',
    surface: 'rgba(20,20,30,0.95)',
    text: '#f8f8f0',
    textMuted: '#9990aa',
    border: 'rgba(212,175,55,0.25)',
    error: '#f87171',
};

// ── Registro completo ─────────────────────────────────────────────────────────

export const TEMPLATE_REGISTRY: Record<string, FormTemplateConfig> = {
    moderno: {
        id: 'moderno',
        displayName: 'Moderno',
        colors: { ...defaultColors },
        layout: {
            stepNavigation: 'wizard',
            containerStyle: 'card',
            spacing: 'normal',
            roundness: 'rounded-xl',
            showProgressBar: true,
            showStepIndicators: true,
        },
        wrapperClass: 'bg-muted/30',
    },

    minimalista: {
        id: 'minimalista',
        displayName: 'Minimalista',
        colors: minimalColors,
        layout: {
            stepNavigation: 'wizard',
            containerStyle: 'flat',
            spacing: 'relaxed',
            roundness: 'rounded-lg',
            showProgressBar: false,
            showStepIndicators: false,
        },
        wrapperClass: 'bg-background',
    },

    card: {
        id: 'card',
        displayName: 'Card',
        colors: { ...defaultColors },
        layout: {
            stepNavigation: 'wizard',
            containerStyle: 'card',
            spacing: 'normal',
            roundness: 'rounded-2xl',
            showProgressBar: true,
            showStepIndicators: true,
        },
        wrapperClass: 'bg-muted/40',
    },

    banner: {
        id: 'banner',
        displayName: 'Banner',
        colors: { ...defaultColors },
        layout: {
            stepNavigation: 'tabs',
            containerStyle: 'bordered',
            spacing: 'normal',
            roundness: 'rounded-xl',
            showProgressBar: false,
            showStepIndicators: true,
        },
        wrapperClass: 'bg-background',
    },

    acampamento: {
        id: 'acampamento',
        displayName: 'Acampamento',
        colors: acampamentoColors,
        layout: {
            stepNavigation: 'wizard',
            containerStyle: 'glassmorphism',
            spacing: 'normal',
            roundness: 'rounded-2xl',
            showProgressBar: true,
            showStepIndicators: true,
            stepIndicatorVariant: 'icons-labeled',
            stepIndicatorPosition: 'top-center',
            stepIndicatorOrientation: 'horizontal',
            eventTitleStyle: 'inline',
        },
        typography: {
            fontFamily: 'font-sans',
            stepTitleClass: 'text-2xl font-bold text-white',
            stepDescClass: 'text-sm text-zinc-400',
            labelClass: 'font-medium text-zinc-200',
        },
        wrapperClass: 'bg-[#09090b]',
    },

    acampamento_imersivo: {
        id: 'acampamento_imersivo',
        displayName: 'Acampamento Imersivo',
        colors: {
            primary: '#f97316',
            primaryHover: '#ea580c',
            accent: '#fb923c',
            background: '#09090b',
            surface: 'rgba(20,20,22,0.85)',
            text: '#ffffff',
            textMuted: '#a1a1aa',
            border: 'rgba(249,115,22,0.25)',
            error: '#f87171',
        },
        layout: {
            stepNavigation: 'wizard',
            containerStyle: 'glassmorphism',
            spacing: 'normal',
            roundness: 'rounded-2xl',
            showProgressBar: true,
            showStepIndicators: true,
            stepIndicatorVariant: 'icons-labeled',
            stepIndicatorPosition: 'top-center',
            stepIndicatorOrientation: 'horizontal',
            eventTitleStyle: 'inline',
        },
        typography: {
            fontFamily: 'font-sans',
            stepTitleClass: 'text-2xl font-bold text-white',
            stepDescClass: 'text-sm text-zinc-400',
            labelClass: 'font-medium text-zinc-200',
        },
        wrapperClass: 'bg-[#09090b]',
    },

    corporativo: {
        id: 'corporativo',
        displayName: 'Corporativo',
        colors: corporativoColors,
        layout: {
            stepNavigation: 'wizard',
            containerStyle: 'bordered',
            spacing: 'normal',
            roundness: 'rounded-lg',
            showProgressBar: true,
            showStepIndicators: true,
        },
        wrapperClass: 'bg-slate-50 dark:bg-slate-950',
    },

    festival: {
        id: 'festival',
        displayName: 'Festival',
        colors: festivalColors,
        layout: {
            stepNavigation: 'wizard',
            containerStyle: 'glassmorphism',
            spacing: 'relaxed',
            roundness: 'rounded-2xl',
            showProgressBar: true,
            showStepIndicators: true,
        },
        wrapperClass: 'bg-[#0f0f1a]',
    },

    webinar: {
        id: 'webinar',
        displayName: 'Webinar',
        colors: webinarColors,
        layout: {
            stepNavigation: 'tabs',
            containerStyle: 'card',
            spacing: 'compact',
            roundness: 'rounded-xl',
            showProgressBar: true,
            showStepIndicators: true,
        },
        wrapperClass: 'bg-background',
    },

    retiro: {
        id: 'retiro',
        displayName: 'Retiro',
        colors: retiroColors,
        layout: {
            stepNavigation: 'wizard',
            containerStyle: 'card',
            spacing: 'relaxed',
            roundness: 'rounded-2xl',
            showProgressBar: true,
            showStepIndicators: true,
        },
        wrapperClass: 'bg-emerald-50 dark:bg-emerald-950/20',
    },

    conferencia: {
        id: 'conferencia',
        displayName: 'Conferência',
        colors: conferenciaColors,
        layout: {
            stepNavigation: 'wizard',
            containerStyle: 'card',
            spacing: 'normal',
            roundness: 'rounded-xl',
            showProgressBar: true,
            showStepIndicators: true,
        },
        wrapperClass: 'bg-background',
    },

    social: {
        id: 'social',
        displayName: 'Social',
        colors: socialColors,
        layout: {
            stepNavigation: 'wizard',
            containerStyle: 'card',
            spacing: 'normal',
            roundness: 'rounded-xl',
            showProgressBar: true,
            showStepIndicators: true,
        },
        wrapperClass: 'bg-background',
    },

    workshop: {
        id: 'workshop',
        displayName: 'Workshop',
        colors: workshopColors,
        layout: {
            stepNavigation: 'vertical',
            containerStyle: 'bordered',
            spacing: 'compact',
            roundness: 'rounded-lg',
            showProgressBar: true,
            showStepIndicators: true,
            stepIndicatorVariant: 'icons-labeled',
            stepIndicatorOrientation: 'vertical',
            eventTitleStyle: 'bar',
        },
        wrapperClass: 'bg-amber-50 dark:bg-amber-950/10',
    },

    gala: {
        id: 'gala',
        displayName: 'Gala',
        colors: galaColors,
        layout: {
            stepNavigation: 'wizard',
            containerStyle: 'glassmorphism',
            spacing: 'relaxed',
            roundness: 'rounded-2xl',
            showProgressBar: true,
            showStepIndicators: true,
        },
        wrapperClass: 'bg-[#0c0c0c]',
    },

    acao: {
        id: 'acao',
        displayName: 'Ação',
        colors: acaoColors,
        layout: {
            stepNavigation: 'wizard',
            containerStyle: 'card',
            spacing: 'compact',
            roundness: 'rounded-lg',
            showProgressBar: true,
            showStepIndicators: true,
        },
        wrapperClass: 'bg-background',
    },

    podcast: {
        id: 'podcast',
        displayName: 'Podcast',
        colors: podcastColors,
        layout: {
            stepNavigation: 'wizard',
            containerStyle: 'card',
            spacing: 'normal',
            roundness: 'rounded-xl',
            showProgressBar: false,
            showStepIndicators: true,
        },
        wrapperClass: 'bg-background',
    },

    classico: {
        id: 'classico',
        displayName: 'Clássico',
        colors: classicoColors,
        layout: {
            stepNavigation: 'wizard',
            containerStyle: 'card',
            spacing: 'normal',
            roundness: 'rounded-xl',
            showProgressBar: true,
            showStepIndicators: true,
        },
        wrapperClass: 'bg-white dark:bg-background',
    },

    comunitario: {
        id: 'comunitario',
        displayName: 'Comunitário',
        colors: comunitarioColors,
        layout: {
            stepNavigation: 'wizard',
            containerStyle: 'card',
            spacing: 'relaxed',
            roundness: 'rounded-2xl',
            showProgressBar: true,
            showStepIndicators: true,
        },
        wrapperClass: 'bg-yellow-50 dark:bg-background',
    },

    noturno: {
        id: 'noturno',
        displayName: 'Noturno',
        colors: noturnoColors,
        layout: {
            stepNavigation: 'wizard',
            containerStyle: 'glassmorphism',
            spacing: 'relaxed',
            roundness: 'rounded-2xl',
            showProgressBar: true,
            showStepIndicators: true,
        },
        typography: {
            fontFamily: 'font-sans',
            stepTitleClass: 'text-2xl font-bold text-[#f8f8f0]',
            stepDescClass: 'text-sm text-[#9990aa]',
            labelClass: 'font-medium text-[#d4d4c8]',
        },
        wrapperClass: 'bg-[#0a0a0f]',
    },
};

// ── Helpers ───────────────────────────────────────────────────────────────────

export const getTemplateConfig = (
    template?: string | null,
): FormTemplateConfig => {
    if (template && template in TEMPLATE_REGISTRY) {
        return TEMPLATE_REGISTRY[template];
    }
    return TEMPLATE_REGISTRY['moderno'];
};

export const getAllTemplates = (): FormTemplateConfig[] =>
    Object.values(TEMPLATE_REGISTRY);

export const isGlassmorphism = (cfg: FormTemplateConfig): boolean =>
    cfg.layout.containerStyle === 'glassmorphism';

export const isDarkTemplate = (cfg: FormTemplateConfig): boolean =>
    cfg.colors.background.startsWith('#0') ||
    cfg.colors.background.startsWith('rgba(0') ||
    cfg.colors.text === '#ffffff';
