---
title: Como começar com React e TypeScript
type: post
description: Um guia prático para iniciar um projeto React com TypeScript, cobrindo configuração, tipagem e melhores práticas.
tags:
  - react
  - typescript
  - web
  - tutorial
---

## Introdução

React com TypeScript é uma combinação poderosa para desenvolvimento front-end. Neste artigo, vou guiá-lo através dos passos essenciais para começar.

## Pré-requisitos

- Node.js e npm instalados
- Conhecimento básico de JavaScript
- Familiaridade com React (opcional)

## Iniciando o Projeto

### Usando Vite (Recomendado)

```bash
npm create vite@latest meu-app -- --template react-ts
cd meu-app
npm install
npm run dev
```

### Usando Create React App

```bash
npx create-react-app meu-app --template typescript
cd meu-app
npm start
```

## Estrutura de Pastas

```
src/
├── components/
│   ├── Button.tsx
│   └── Header.tsx
├── pages/
├── hooks/
├── utils/
├── App.tsx
└── main.tsx
```

## Tipagem Básica

### Tipos de Props

```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => (
  <button onClick={onClick} disabled={disabled}>
    {label}
  </button>
);
```

### Hooks Tipados

```typescript
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
```

## Melhores Práticas

1. **Use `React.FC` ou função explícita** para tipar componentes
2. **Crie interfaces** para props e estado
3. **Use `unknown` antes de `any`**
4. **Ative `strict` no `tsconfig.json`**

## Conclusão

Com TypeScript, você ganha:
- ✅ Autocompletar melhorado
- ✅ Detecção de erros em tempo de desenvolvimento
- ✅ Melhor documentação de código
- ✅ Segurança de tipos

Bom desenvolvimento! 🚀
