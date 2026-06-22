import { describe, it, expect } from 'vitest';
// Import directly from the .ts logic file (NOT ../index, to keep this node-only
// and avoid pulling in TemplateContext.tsx / React).
import {
    PRESET_BLOCKS,
    PRESET_STEP_BLOCKS,
    getPresetById,
    getPresetsByCategory,
    getPresetStepBlockById,
} from '../presetBlocks';

// IDs read from presetBlocks.ts (PRESET_BLOCKS).
const EXPECTED_PRESET_IDS = [
    'preset_personal',
    'preset_emergency_array',
    'preset_emergency',
    'preset_address',
    'preset_responsible',
    'preset_health',
    'preset_participation',
    'preset_payment',
    'preset_participation_type',
] as const;

const EXPECTED_STEP_BLOCK_IDS = ['preset_steps_participation_payment'] as const;

describe('PRESET_BLOCKS', () => {
    it('contains exactly the expected preset ids', () => {
        const ids = PRESET_BLOCKS.map((b) => b.id);
        expect(ids).toEqual([...EXPECTED_PRESET_IDS]);
    });

    it('has 9 preset blocks', () => {
        expect(PRESET_BLOCKS).toHaveLength(9);
    });

    it('every preset id is unique', () => {
        const ids = PRESET_BLOCKS.map((b) => b.id);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it('every preset has a name, category and containerTemplate', () => {
        for (const b of PRESET_BLOCKS) {
            expect(b.name).toBeTypeOf('string');
            expect(b.category).toBeTypeOf('string');
            expect(b.containerTemplate).toBeTypeOf('object');
        }
    });
});

describe('getPresetById', () => {
    it('returns the matching preset for a known id', () => {
        const p = getPresetById('preset_personal');
        expect(p).toBeDefined();
        expect(p?.id).toBe('preset_personal');
        expect(p?.name).toBe('Dados Pessoais');
        expect(p).toBe(PRESET_BLOCKS[0]);
    });

    it('resolves every known id', () => {
        for (const id of EXPECTED_PRESET_IDS) {
            expect(getPresetById(id)?.id).toBe(id);
        }
    });

    it('returns undefined for an unknown id', () => {
        expect(getPresetById('nope')).toBeUndefined();
    });
});

describe('getPresetsByCategory', () => {
    it("returns both 'personal' presets", () => {
        const personal = getPresetsByCategory('personal');
        expect(personal.map((b) => b.id)).toEqual([
            'preset_personal',
            'preset_responsible',
        ]);
    });

    it("returns both 'emergency' presets", () => {
        const emergency = getPresetsByCategory('emergency');
        expect(emergency.map((b) => b.id)).toEqual([
            'preset_emergency_array',
            'preset_emergency',
        ]);
    });

    it("returns both 'event' presets", () => {
        const event = getPresetsByCategory('event');
        expect(event.map((b) => b.id)).toEqual([
            'preset_participation',
            'preset_participation_type',
        ]);
    });

    it("returns the single 'address', 'health' and 'payment' presets", () => {
        expect(getPresetsByCategory('address').map((b) => b.id)).toEqual([
            'preset_address',
        ]);
        expect(getPresetsByCategory('health').map((b) => b.id)).toEqual([
            'preset_health',
        ]);
        expect(getPresetsByCategory('payment').map((b) => b.id)).toEqual([
            'preset_payment',
        ]);
    });

    it('returns an empty array for a category with no presets', () => {
        expect(
            getPresetsByCategory('does-not-exist' as never),
        ).toEqual([]);
    });

    it('partitions all presets across categories without loss', () => {
        const categories = new Set(PRESET_BLOCKS.map((b) => b.category));
        const total = [...categories].reduce(
            (sum, c) => sum + getPresetsByCategory(c).length,
            0,
        );
        expect(total).toBe(PRESET_BLOCKS.length);
    });
});

describe('PRESET_STEP_BLOCKS', () => {
    it('contains exactly the expected step-block ids', () => {
        expect(PRESET_STEP_BLOCKS.map((b) => b.id)).toEqual([
            ...EXPECTED_STEP_BLOCK_IDS,
        ]);
    });

    it('has 1 step block', () => {
        expect(PRESET_STEP_BLOCKS).toHaveLength(1);
    });

    it('the participation+payment block has two steps', () => {
        const block = PRESET_STEP_BLOCKS[0];
        expect(block.steps).toHaveLength(2);
        expect(block.steps.map((s) => s.titulo)).toEqual([
            'Tipo de Participação',
            'Forma de Pagamento',
        ]);
    });
});

describe('getPresetStepBlockById', () => {
    it('returns the matching step block for a known id', () => {
        const b = getPresetStepBlockById('preset_steps_participation_payment');
        expect(b).toBeDefined();
        expect(b?.id).toBe('preset_steps_participation_payment');
        expect(b).toBe(PRESET_STEP_BLOCKS[0]);
    });

    it('returns undefined for an unknown id', () => {
        expect(getPresetStepBlockById('nope')).toBeUndefined();
    });
});
