import { describe, it, expect } from 'vitest';
// Import directly from the .ts logic file (NOT ../index, which re-exports
// TemplateContext.tsx and would pull React into this node-only test suite).
import {
    TEMPLATE_REGISTRY,
    getTemplateConfig,
    getAllTemplates,
    isGlassmorphism,
    isDarkTemplate,
} from '../templateRegistry';

// The exact set of template IDs read from templateRegistry.ts.
const EXPECTED_IDS = [
    'moderno',
    'minimalista',
    'card',
    'banner',
    'acampamento',
    'acampamento_imersivo',
    'corporativo',
    'festival',
    'webinar',
    'retiro',
    'conferencia',
    'social',
    'workshop',
    'gala',
    'acao',
    'podcast',
    'classico',
    'comunitario',
    'noturno',
] as const;

// Templates whose layout.containerStyle === 'glassmorphism' (verified in source).
const GLASSMORPHISM_IDS = [
    'acampamento',
    'acampamento_imersivo',
    'festival',
    'gala',
    'noturno',
] as const;

describe('TEMPLATE_REGISTRY', () => {
    it('has exactly the 19 known template IDs', () => {
        const ids = Object.keys(TEMPLATE_REGISTRY).sort();
        expect(ids).toHaveLength(19);
        expect(ids).toEqual([...EXPECTED_IDS].sort());
    });

    it('contains exactly the expected set (no extras, none missing)', () => {
        expect(new Set(Object.keys(TEMPLATE_REGISTRY))).toEqual(
            new Set(EXPECTED_IDS),
        );
    });

    it('every entry has an id matching its registry key', () => {
        for (const [key, cfg] of Object.entries(TEMPLATE_REGISTRY)) {
            expect(cfg.id).toBe(key);
        }
    });

    it('every entry exposes colors and a layout', () => {
        for (const cfg of Object.values(TEMPLATE_REGISTRY)) {
            expect(cfg.colors).toBeTypeOf('object');
            expect(cfg.layout).toBeTypeOf('object');
            expect(cfg.layout.containerStyle).toBeTypeOf('string');
        }
    });
});

describe('getTemplateConfig', () => {
    it("returns the 'moderno' config for 'moderno'", () => {
        const cfg = getTemplateConfig('moderno');
        expect(cfg).toBe(TEMPLATE_REGISTRY['moderno']);
        expect(cfg.id).toBe('moderno');
        expect(cfg.displayName).toBe('Moderno');
    });

    it('returns the matching config for every known id', () => {
        for (const id of EXPECTED_IDS) {
            expect(getTemplateConfig(id)).toBe(TEMPLATE_REGISTRY[id]);
        }
    });

    it("falls back to 'moderno' for an unknown id", () => {
        expect(getTemplateConfig('does-not-exist')).toBe(
            TEMPLATE_REGISTRY['moderno'],
        );
    });

    it("falls back to 'moderno' for undefined input", () => {
        expect(getTemplateConfig(undefined)).toBe(TEMPLATE_REGISTRY['moderno']);
    });

    it("falls back to 'moderno' for null input", () => {
        expect(getTemplateConfig(null)).toBe(TEMPLATE_REGISTRY['moderno']);
    });

    it("falls back to 'moderno' for an empty string", () => {
        expect(getTemplateConfig('')).toBe(TEMPLATE_REGISTRY['moderno']);
    });
});

describe('getAllTemplates', () => {
    it('returns all 19 registry entries', () => {
        const all = getAllTemplates();
        expect(all).toHaveLength(19);
    });

    it('returns the same objects as Object.values(TEMPLATE_REGISTRY)', () => {
        expect(getAllTemplates()).toEqual(Object.values(TEMPLATE_REGISTRY));
    });

    it('covers exactly the expected id set', () => {
        const ids = getAllTemplates().map((c) => c.id);
        expect(new Set(ids)).toEqual(new Set(EXPECTED_IDS));
    });
});

describe('isGlassmorphism', () => {
    it('returns true for every glassmorphism template', () => {
        for (const id of GLASSMORPHISM_IDS) {
            expect(isGlassmorphism(TEMPLATE_REGISTRY[id])).toBe(true);
        }
    });

    it('returns false for non-glassmorphism templates', () => {
        const nonGlass = EXPECTED_IDS.filter(
            (id) => !GLASSMORPHISM_IDS.includes(id as never),
        );
        for (const id of nonGlass) {
            expect(isGlassmorphism(TEMPLATE_REGISTRY[id])).toBe(false);
        }
    });

    it('exactly 5 templates are glassmorphism', () => {
        const count = getAllTemplates().filter(isGlassmorphism).length;
        expect(count).toBe(5);
    });
});

describe('isDarkTemplate', () => {
    // Verified from source: dark when background starts with '#0' or 'rgba(0'
    // or text === '#ffffff'.
    it('returns true for the dark-background templates', () => {
        for (const id of [
            'acampamento',
            'acampamento_imersivo',
            'festival',
            'gala',
            'noturno',
        ] as const) {
            expect(isDarkTemplate(TEMPLATE_REGISTRY[id])).toBe(true);
        }
    });

    it("returns false for light templates with non-'#0' backgrounds", () => {
        for (const id of [
            'classico', // #ffffff
            'comunitario', // #fefce8
            'minimalista', // hsl(var(--background))
            'moderno', // hsl(var(--background))
            'corporativo',
            'workshop',
            'retiro',
        ] as const) {
            expect(isDarkTemplate(TEMPLATE_REGISTRY[id])).toBe(false);
        }
    });

    it('every glassmorphism template is also classified dark', () => {
        for (const id of GLASSMORPHISM_IDS) {
            expect(isDarkTemplate(TEMPLATE_REGISTRY[id])).toBe(true);
        }
    });
});
