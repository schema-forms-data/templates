# @schema-forms-data/templates

> Template registry e preset blocks para SchemaForms — sistema de temas via CSS variables.

[![npm](https://img.shields.io/npm/v/@schema-forms-data/templates)](https://www.npmjs.com/package/@schema-forms-data/templates)
[![license](https://img.shields.io/npm/l/@schema-forms-data/templates)](./LICENSE)

Gerencia o sistema de temas do formulário. Fornece o `TemplateContext` (provider de CSS variables), o `templateRegistry` e os `presetBlocks` que os outros pacotes (`ui`, `renderer`, `builder`) consomem.

## Install

```bash
pnpm add @schema-forms-data/templates
```

## O que inclui

- **`TemplateContext`** — provider React que injeta CSS variables de tema no formulário
- **`templateRegistry`** — registra e recupera templates customizados
- **`presetBlocks`** — blocos de formulário pré-configurados prontos para uso

## Uso

```tsx
import { TemplateContext, presetBlocks } from '@schema-forms-data/templates';

<TemplateContext.Provider value={myTemplate}>
  {children}
</TemplateContext.Provider>
```

## Dependências em outros pacotes

| Depende de | Motivo |
|---|---|
| `@schema-forms-data/core` | Usa os tipos `FormSchema` e `FieldType` |

Os pacotes `ui`, `renderer` e `builder` dependem de `templates` — ao usar qualquer um deles, `templates` já vem como dependência transitiva.

---

## Ordem de atualização

`templates` ocupa a **segunda posição** na cadeia:

```
core  →  [templates]  →  ui  →  renderer  →  builder  →  react
```

Ao bumpar `templates`:
1. Certifique que `@schema-forms-data/core` está na versão desejada
2. Atualiza a dep de `core` no `package.json` se necessário
3. Bumpa e publica `templates`
4. Atualiza a referência a `templates` em `ui`, `renderer`, `builder` e `react`

## Build

```bash
pnpm install
pnpm build      # tsc -> dist/
```

## Publicar

Automático: a cada **push na `main`**, o workflow (`.github/workflows/publish.yml`)
publica **somente se a versão do `package.json` ainda não existir no npm**. Push de
README/refactor não republica nada — pra lançar, basta dar bump na versão:

```bash
npm version patch        # 4.0.7 -> 4.0.8 (faz commit + tag)
git push --follow-tags   # push na main dispara o publish da nova versão
```

Requer o secret **`NPM_TOKEN`** no repositório GitHub (Settings → Secrets → Actions →
`NPM_TOKEN`). Gere um **Automation token** em npmjs.com → Account → Access Tokens.
O flag `--provenance` anexa attestation de build automaticamente (rastreabilidade de
supply chain, sem custo extra).

## Licença

[MIT](LICENSE) © schema-forms-data
