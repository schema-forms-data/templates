/**
 * presetBlocks.ts
 * ───────────────────────────────────────────────────────────────────────────
 * Blocos reutilizáveis para o FormBuilder.
 *
 * Regras:
 * - Campos com `locked: true` têm IDs fixos (ex: _address_*) que não devem
 *   ser alterados — são usados por integrações como ViaCEP.
 * - Demais campos recebem novos UUIDs ao ser inseridos no builder.
 * - O container em si recebe sempre um novo UUID na inserção.
 */

import { FieldType } from '@schema-forms-data/core';
import type { PresetBlock, PresetStepBlock } from '@schema-forms-data/core';

export const PRESET_BLOCKS: PresetBlock[] = [

    // ── Dados Pessoais ──────────────────────────────────────────────────────────
    {
        id: 'preset_personal',
        name: 'Dados Pessoais',
        description: 'Nome, e-mail, CPF, telefone e data de nascimento',
        icon: 'User',
        category: 'personal',
        containerTemplate: {
            titulo: 'Dados Pessoais',
            icone: 'User',
            ordem: 0,
            campos: [
                { id: '_personal_nome', nome: 'nome', tipo: FieldType.TEXTO, label: 'Nome completo', ordem: 0, tamanho: 12, obrigatorio: true, placeholder: 'Seu nome completo' },
                { id: '_personal_email', nome: 'email', tipo: FieldType.EMAIL, label: 'E-mail', ordem: 1, tamanho: 6, obrigatorio: true, placeholder: 'seuemail@exemplo.com' },
                { id: '_personal_telefone', nome: 'telefone', tipo: FieldType.TELEFONE, label: 'Telefone / WhatsApp', ordem: 2, tamanho: 6, obrigatorio: true, placeholder: '(11) 99999-9999' },
                { id: '_personal_cpf', nome: 'cpf', tipo: FieldType.CPF, label: 'CPF', ordem: 3, tamanho: 6, obrigatorio: false, placeholder: '000.000.000-00' },
                { id: '_personal_nascimento', nome: 'data_nascimento', tipo: FieldType.DATE, label: 'Data de nascimento', ordem: 4, tamanho: 6, obrigatorio: false },
            ],
        },
    },

    // ── Contatos de Emergência (field_array) ────────────────────────────────────
    {
        id: 'preset_emergency_array',
        name: 'Contatos de Emergência',
        description: 'Lista de contatos (mín. 2, máx. 7) com Nome, Parentesco e Telefone',
        icon: 'PhoneCall',
        category: 'emergency',
        containerTemplate: {
            titulo: 'Contatos de Emergência',
            icone: 'PhoneCall',
            ordem: 0,
            campos: [
                {
                    id: '_emerg_array_contatos',
                    nome: 'contatos_emergencia',
                    tipo: FieldType.FIELD_ARRAY,
                    label: 'Contatos de Emergência',
                    ordem: 0,
                    tamanho: 12,
                    obrigatorio: true,
                    itemLabel: 'Contato',
                    minItems: 2,
                    maxItems: 7,
                    addLabel: 'Adicionar Contato',
                    subFields: [
                        { id: '_emerg_array_nome', nome: 'nome', tipo: FieldType.TEXTO, label: 'Nome', ordem: 0, tamanho: 4, obrigatorio: true, placeholder: 'Nome completo do contato' },
                        {
                            id: '_emerg_array_parentesco', nome: 'parentesco', tipo: FieldType.SELECT, label: 'Parentesco', ordem: 1, tamanho: 4, obrigatorio: true,
                            opcoes: [
                                { valor: 'pai', label: 'Pai' }, { valor: 'mae', label: 'Mãe' }, { valor: 'conjuge', label: 'Cônjuge' },
                                { valor: 'irmao', label: 'Irmão/Irmã' }, { valor: 'avo', label: 'Avô/Avó' }, { valor: 'tio', label: 'Tio/Tia' },
                                { valor: 'amigo', label: 'Amigo(a)' }, { valor: 'outro', label: 'Outro' },
                            ],
                        },
                        { id: '_emerg_array_telefone', nome: 'telefone', tipo: FieldType.TELEFONE, label: 'Celular', ordem: 2, tamanho: 4, obrigatorio: true, placeholder: '(34) 99999-9999' },
                    ],
                },
            ],
        },
    },

    // ── Contatos de Emergência (container repetível) ────────────────────────────
    {
        id: 'preset_emergency',
        name: 'Contatos de Emergência (Repetível)',
        description: 'Lista repetível de contatos de emergência (mínimo 2)',
        icon: 'PhoneCall',
        category: 'emergency',
        containerTemplate: {
            titulo: 'Contatos de Emergência',
            icone: 'PhoneCall',
            ordem: 0,
            nome: 'contatos_emergencia',
            repeatable: true,
            minItems: 2,
            maxItems: 5,
            itemLabel: 'Contato',
            campos: [
                { id: '_emerg_nome', nome: 'nome', tipo: FieldType.TEXTO, label: 'Nome', ordem: 0, tamanho: 12, obrigatorio: true, placeholder: 'Nome completo do contato' },
                {
                    id: '_emerg_parentesco', nome: 'parentesco', tipo: FieldType.SELECT, label: 'Parentesco', ordem: 1, tamanho: 6, obrigatorio: true,
                    opcoes: [
                        { valor: 'pai', label: 'Pai' }, { valor: 'mae', label: 'Mãe' }, { valor: 'conjuge', label: 'Cônjuge' },
                        { valor: 'irmao', label: 'Irmão/Irmã' }, { valor: 'avo', label: 'Avô/Avó' }, { valor: 'amigo', label: 'Amigo(a)' }, { valor: 'outro', label: 'Outro' },
                    ],
                },
                { id: '_emerg_telefone', nome: 'telefone', tipo: FieldType.TELEFONE, label: 'Telefone', ordem: 2, tamanho: 6, obrigatorio: true, placeholder: '(11) 99999-9999' },
            ],
        },
    },

    // ── Endereço ────────────────────────────────────────────────────────────────
    {
        id: 'preset_address',
        name: 'Endereço',
        description: 'CEP com preenchimento automático via ViaCEP + campos de endereço',
        icon: 'MapPin',
        category: 'address',
        containerTemplate: {
            titulo: 'Endereço',
            icone: 'MapPin',
            ordem: 0,
            campos: [
                { id: '_address_cep', nome: '_address_cep', tipo: FieldType.CEP, label: 'CEP', ordem: 0, tamanho: 4, obrigatorio: false, placeholder: '00000-000', hint: 'Preencha o CEP para auto-completar o endereço', locked: true, cepFillMap: { logradouro: '_address_logradouro', bairro: '_address_bairro', cidade: '_address_cidade', estado: '_address_estado' } },
                { id: '_address_logradouro', nome: '_address_logradouro', tipo: FieldType.TEXTO, label: 'Logradouro', ordem: 1, tamanho: 8, obrigatorio: false, placeholder: 'Rua, Av., Travessa...', locked: true },
                { id: '_address_numero', nome: '_address_numero', tipo: FieldType.TEXTO, label: 'Número', ordem: 2, tamanho: 3, obrigatorio: false, placeholder: 'Nº' },
                { id: '_address_complemento', nome: '_address_complemento', tipo: FieldType.TEXTO, label: 'Complemento', ordem: 3, tamanho: 9, obrigatorio: false, placeholder: 'Apto, bloco, casa...' },
                { id: '_address_bairro', nome: '_address_bairro', tipo: FieldType.TEXTO, label: 'Bairro', ordem: 4, tamanho: 5, obrigatorio: false, locked: true },
                { id: '_address_cidade', nome: '_address_cidade', tipo: FieldType.TEXTO, label: 'Cidade', ordem: 5, tamanho: 5, obrigatorio: false, locked: true },
                { id: '_address_estado', nome: '_address_estado', tipo: FieldType.TEXTO, label: 'Estado (UF)', ordem: 6, tamanho: 2, obrigatorio: false, placeholder: 'SP', locked: true },
            ],
        },
    },

    // ── Responsável ─────────────────────────────────────────────────────────────
    {
        id: 'preset_responsible',
        name: 'Responsável',
        description: 'Dados do responsável legal (para menores ou dependentes)',
        icon: 'Users',
        category: 'personal',
        containerTemplate: {
            titulo: 'Responsável',
            icone: 'Users',
            ordem: 0,
            campos: [
                { id: '_resp_nome', nome: 'responsavel_nome', tipo: FieldType.TEXTO, label: 'Nome do responsável', ordem: 0, tamanho: 12, obrigatorio: true, placeholder: 'Nome completo do responsável' },
                {
                    id: '_resp_parentesco', nome: 'responsavel_parentesco', tipo: FieldType.SELECT, label: 'Parentesco', ordem: 1, tamanho: 6, obrigatorio: true,
                    opcoes: [{ valor: 'pai', label: 'Pai' }, { valor: 'mae', label: 'Mãe' }, { valor: 'avo', label: 'Avô/Avó' }, { valor: 'outro', label: 'Outro' }],
                },
                { id: '_resp_telefone', nome: 'responsavel_telefone', tipo: FieldType.TELEFONE, label: 'Telefone do responsável', ordem: 2, tamanho: 6, obrigatorio: true, placeholder: '(11) 99999-9999' },
                { id: '_resp_cpf', nome: 'responsavel_cpf', tipo: FieldType.CPF, label: 'CPF do responsável', ordem: 3, tamanho: 6, obrigatorio: false, placeholder: '000.000.000-00' },
            ],
        },
    },

    // ── Saúde ────────────────────────────────────────────────────────────────────
    {
        id: 'preset_health',
        name: 'Informações de Saúde',
        description: 'Alergias, medicamentos, tipo sanguíneo e plano de saúde',
        icon: 'HeartPulse',
        category: 'health',
        containerTemplate: {
            titulo: 'Informações de Saúde',
            icone: 'HeartPulse',
            ordem: 0,
            campos: [
                {
                    id: '_health_tipo_sanguineo', nome: 'tipo_sanguineo', tipo: FieldType.SELECT, label: 'Tipo sanguíneo', ordem: 0, tamanho: 4, obrigatorio: false,
                    opcoes: [
                        { valor: 'A+', label: 'A+' }, { valor: 'A-', label: 'A-' }, { valor: 'B+', label: 'B+' }, { valor: 'B-', label: 'B-' },
                        { valor: 'AB+', label: 'AB+' }, { valor: 'AB-', label: 'AB-' }, { valor: 'O+', label: 'O+' }, { valor: 'O-', label: 'O-' }, { valor: 'nao_sei', label: 'Não sei' },
                    ],
                },
                { id: '_health_plano', nome: 'plano_saude', tipo: FieldType.TEXTO, label: 'Plano de saúde', ordem: 1, tamanho: 8, obrigatorio: false, placeholder: 'Ex: Unimed... ou "Nenhum"' },
                { id: '_health_alergias', nome: 'alergias', tipo: FieldType.TEXTAREA, label: 'Alergias', ordem: 2, tamanho: 12, obrigatorio: false, placeholder: 'Descreva alergias conhecidas' },
                { id: '_health_medicamentos', nome: 'medicamentos', tipo: FieldType.TEXTAREA, label: 'Medicamentos em uso contínuo', ordem: 3, tamanho: 12, obrigatorio: false, placeholder: 'Nome, dosagem e frequência' },
                { id: '_health_obs', nome: 'observacoes_medicas', tipo: FieldType.TEXTAREA, label: 'Outras observações médicas', ordem: 4, tamanho: 12, obrigatorio: false },
            ],
        },
    },

    // ── Participação ─────────────────────────────────────────────────────────────
    {
        id: 'preset_participation',
        name: 'Participação',
        description: 'Restrições alimentares, tamanho de camiseta e observações gerais',
        icon: 'ClipboardList',
        category: 'event',
        containerTemplate: {
            titulo: 'Participação',
            icone: 'ClipboardList',
            ordem: 0,
            campos: [
                {
                    id: '_part_restricao_alimentar', nome: 'restricao_alimentar', tipo: FieldType.SELECT, label: 'Restrição alimentar', ordem: 0, tamanho: 6, obrigatorio: false,
                    opcoes: [
                        { valor: 'nenhuma', label: 'Nenhuma' }, { valor: 'vegetariano', label: 'Vegetariano' }, { valor: 'vegano', label: 'Vegano' },
                        { valor: 'sem_gluten', label: 'Sem glúten' }, { valor: 'sem_lactose', label: 'Sem lactose' }, { valor: 'outro', label: 'Outro' },
                    ],
                },
                {
                    id: '_part_camiseta', nome: 'tamanho_camiseta', tipo: FieldType.SELECT, label: 'Tamanho da camiseta', ordem: 1, tamanho: 6, obrigatorio: false,
                    opcoes: [{ valor: 'PP', label: 'PP' }, { valor: 'P', label: 'P' }, { valor: 'M', label: 'M' }, { valor: 'G', label: 'G' }, { valor: 'GG', label: 'GG' }, { valor: 'XGG', label: 'XGG' }],
                },
                { id: '_part_obs', nome: 'observacoes_participacao', tipo: FieldType.TEXTAREA, label: 'Observações', ordem: 2, tamanho: 12, obrigatorio: false },
            ],
        },
    },

    // ── Pagamento ────────────────────────────────────────────────────────────────
    {
        id: 'preset_payment',
        name: 'Informações de Pagamento',
        description: 'Forma de pagamento e comprovante',
        icon: 'CreditCard',
        category: 'payment',
        containerTemplate: {
            titulo: 'Pagamento',
            icone: 'CreditCard',
            ordem: 0,
            campos: [
                {
                    id: '_pay_forma', nome: 'forma_pagamento', tipo: FieldType.SELECT, label: 'Forma de pagamento', ordem: 0, tamanho: 6, obrigatorio: true,
                    opcoes: [
                        { valor: 'pix', label: 'PIX' }, { valor: 'cartao', label: 'Cartão de crédito/débito' },
                        { valor: 'boleto', label: 'Boleto bancário' }, { valor: 'dinheiro', label: 'Dinheiro (presencial)' },
                    ],
                },
                { id: '_pay_comprovante', nome: 'comprovante_pagamento', tipo: FieldType.FILE, label: 'Comprovante de pagamento', ordem: 1, tamanho: 6, obrigatorio: false, hint: 'Envie o comprovante caso já tenha efetuado o pagamento' },
            ],
        },
    },

    // ── Tipo de Participação (campo especial) ────────────────────────────────────
    {
        id: 'preset_participation_type',
        name: 'Tipo de Participação',
        description: 'Seleção de todos os dias ou dia específico. Datas, preços e vagas carregados via externalData.',
        icon: 'CalendarDays',
        category: 'event',
        containerTemplate: {
            titulo: 'Tipo de Participação',
            icone: 'CalendarDays',
            descricao: 'Escolha como você deseja participar do evento',
            ordem: 0,
            campos: [
                { id: '_participation_type_field', nome: 'tipo_participacao', tipo: FieldType.PARTICIPATION_TYPE, label: 'Tipo de Participação', hint: 'Escolha como você deseja participar', ordem: 0, tamanho: 12, obrigatorio: true, locked: true },
            ],
        },
    },
];

export const getPresetsByCategory = (category: PresetBlock['category']): PresetBlock[] =>
    PRESET_BLOCKS.filter((b) => b.category === category);

export const getPresetById = (id: string): PresetBlock | undefined =>
    PRESET_BLOCKS.find((b) => b.id === id);

// ── Blocos de Steps pré-configurados ─────────────────────────────────────────

export const PRESET_STEP_BLOCKS: PresetStepBlock[] = [
    {
        id: 'preset_steps_participation_payment',
        name: 'Participação + Pagamento',
        description: 'Dois steps: seleção do tipo de participação e escolha da forma de pagamento com cálculo automático de taxas.',
        icon: 'Wallet',
        steps: [
            {
                titulo: 'Tipo de Participação',
                descricao: 'Escolha como deseja participar do evento',
                icone: 'CalendarDays',
                containers: [
                    {
                        titulo: 'Tipo de Participação',
                        icone: 'CalendarDays',
                        descricao: 'Escolha como você deseja participar do evento',
                        ordem: 0,
                        campos: [
                            { id: '_participation_type_field', nome: 'tipo_participacao', tipo: FieldType.PARTICIPATION_TYPE, label: 'Tipo de Participação', hint: 'Escolha como você deseja participar', ordem: 0, tamanho: 12, obrigatorio: true, locked: true },
                        ],
                    },
                ],
            },
            {
                titulo: 'Forma de Pagamento',
                descricao: 'Escolha como deseja pagar sua inscrição',
                icone: 'Wallet',
                containers: [
                    {
                        titulo: 'Forma de Pagamento',
                        icone: 'Wallet',
                        descricao: 'Escolha como deseja pagar sua inscrição',
                        ordem: 0,
                        campos: [
                            { id: '_payment_method_field', nome: 'forma_pagamento', tipo: FieldType.PAYMENT_METHOD, label: 'Forma de Pagamento', ordem: 0, tamanho: 12, obrigatorio: true, locked: true, relatedFieldName: 'tipo_participacao' },
                        ],
                    },
                ],
            },
        ],
    },
];

export const getPresetStepBlockById = (id: string): PresetStepBlock | undefined =>
    PRESET_STEP_BLOCKS.find((b) => b.id === id);
