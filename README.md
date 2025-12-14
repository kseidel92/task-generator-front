# Task Generator


## 🇧🇷 Português

Este é um projeto de exemplo de Lista de Tarefas (Todo List) construído com tecnologias modernas do ecossistema JavaScript/TypeScript. O projeto visa demonstrar uma arquitetura robusta e escalável, utilizando o Redux Toolkit para gerenciamento de estado e o Redux Listener Middleware para o tratamento de *side-effects*, como chamadas de API e notificações.

### 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição | Versão Recomendada |
| :--- | :--- | :--- |
| **React** | Biblioteca JavaScript para construção de interfaces de usuário. | 19.x |
| **Next.js** | Framework React para produção, com renderização híbrida e *routing*. | 16.x |
| **TypeScript** | Superset do JavaScript que adiciona tipagem estática. | 5.x |
| **Redux Toolkit** | Conjunto de ferramentas para desenvolvimento Redux eficiente. | 2.x |
| **Redux Listener Middleware** | Middleware para lidar com lógica assíncrona e *side-effects*. | Integrado ao RTK |
| **Material-UI (MUI)** | Biblioteca de componentes React para um design elegante. | 5.x |
| **Node.js** | Ambiente de execução JavaScript. | **22.x** |

### ⚙️ Instalação e Execução

Para configurar e rodar o projeto localmente, siga os passos abaixo.

1.  **Instalar Dependências:**
    ```bash
    # Se estiver usando pnpm (recomendado)
    pnpm install
    
    # Ou se estiver usando npm
    npm install
    ```

2.  **Executar em Modo de Desenvolvimento:**
    ```bash
    npm run dev
    ```
    O aplicativo estará acessível em `http://localhost:3000`.

3.  **Scripts de Build e Start:**
    ```bash
    # Para construir o projeto para produção
    npm run build
    
    # Para iniciar o projeto em modo de produção (após o build)
    npm run start
    ```

### 📂 Estrutura do Projeto

A estrutura do projeto segue uma organização modular e baseada em recursos, facilitando a manutenção e a escalabilidade.

```
src/
├── app/                  # Arquivos de roteamento e layout do Next.js
├── components/           # Componentes React
│   ├── features/         # Componentes de UI que contêm lógica de negócio
│   └── ui/               # Componentes de UI genéricos e reutilizáveis (ex: Button, Input)
├── services/             # Configurações de API (ex: axios instance)
├── store/                # Gerenciamento de estado com Redux Toolkit
│   ├── notification/     # Slice, listener e mensagens de notificação
│   ├── todo/             # Slice, actions, reducers e services do recurso Todo
│   └── index.ts          # Configuração da Store
├── styles/               # Estilos globais
├── types/                # Definições de tipos TypeScript
└── utils/                # Funções utilitárias e configurações de tema (MUI)
```

### 🧠 Gerenciamento de Estado e Side-Effects

O projeto utiliza o **Redux Toolkit** para o gerenciamento de estado. Para lidar com a lógica assíncrona e os *side-effects* (como chamadas de API), é empregado o **Redux Listener Middleware**.

O *listener middleware* permite reagir a ações específicas do Redux (como o `fulfilled` ou `rejected` de uma *thunk* assíncrona) de forma limpa e desacoplada, sem a necessidade de *sagas* ou *thunks* complexos.

### 🔔 Sistema de Notificações (Refatorado)

O sistema de notificações foi refatorado para ser mais **intuitivo e centralizado**. Toda a lógica de exibição de notificações (sucesso/erro) para ações assíncronas agora reside no arquivo `src/store/notification/notification.listener.ts`, mas as **mensagens** em si foram movidas para um arquivo de configuração dedicado:

*   `src/store/notification/notification.messages.ts`

#### Como Adicionar uma Nova Mensagem de Notificação

Para adicionar uma nova mensagem de notificação para uma nova ação assíncrona (`createAsyncThunk`), siga estes passos simples:

1.  **Importe** a nova ação no arquivo `notification.messages.ts`.
2.  **Adicione** uma nova entrada ao objeto `NOTIFICATION_MESSAGES`, usando o `typePrefix` da sua ação como chave.

**Exemplo em `src/store/notification/notification.messages.ts`:**

```typescript
// 1. Importe a nova ação
import { minhaNovaAcaoAsync } from "../seu-recurso/actions/minha-nova-acao.action";

export const NOTIFICATION_MESSAGES: NotificationMessages = {
  // ... outras ações
  
  // 2. Adicione a nova entrada
  [minhaNovaAcaoAsync.typePrefix]: {
    success: "Minha nova operação foi um sucesso!",
    error: "Ocorreu um erro ao executar minha nova operação.",
  },
};
```

O `notification.listener.ts` se encarregará automaticamente de buscar a mensagem correta para a notificação de sucesso (`fulfilled`) ou erro (`rejected`) da sua ação.

### 🛠️ Qualidade de Código e Formatação

O projeto está configurado com **ESLint** (utilizando o formato Flat Config) e **Prettier** para garantir a qualidade, consistência e padronização do código.

| Script | Comando | Descrição |
| :--- | :--- | :--- |
| `lint` | `eslint . --ext .ts,.tsx --fix` | Valida o código e tenta corrigir automaticamente os problemas. |
| `lint:check` | `eslint . --ext .ts,.tsx` | Apenas valida o código, reportando os problemas. |
| `format` | `prettier --write .` | Formata todos os arquivos do projeto de acordo com o `.prettierrc.json`. |
| `format:check` | `prettier --check .` | Verifica se há arquivos que precisam ser formatados. |

---

## 🇬🇧 English

This is an example Todo List project built with modern technologies from the JavaScript/TypeScript ecosystem. The project aims to demonstrate a robust and scalable architecture, using Redux Toolkit for state management and the Redux Listener Middleware for handling *side-effects*, such as API calls and notifications.

### 🚀 Technologies Used

| Technology | Description | Recommended Version |
| :--- | :--- | :--- |
| **React** | JavaScript library for building user interfaces. | 19.x |
| **Next.js** | React framework for production, with hybrid rendering and routing. | 16.x |
| **TypeScript** | JavaScript superset that adds static typing. | 5.x |
| **Redux Toolkit** | Set of tools for efficient Redux development. | 2.x |
| **Redux Listener Middleware** | Middleware for handling asynchronous logic and side-effects. | Integrated with RTK |
| **Material-UI (MUI)** | React component library for an elegant design. | 5.x |
| **Node.js** | JavaScript runtime environment. | **22.x** |

### ⚙️ Installation and Execution

To set up and run the project locally, follow the steps below.

1.  **Install Dependencies:**
    ```bash
    # If using pnpm (recommended)
    pnpm install
    
    # Or if using npm
    npm install
    ```

2.  **Run in Development Mode:**
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:3000`.

3.  **Build and Start Scripts:**
    ```bash
    # To build the project for production
    npm run build
    
    # To start the project in production mode (after build)
    npm run start
    ```

### 📂 Project Structure

The project structure follows a modular and feature-based organization, facilitating maintenance and scalability.

```
src/
├── app/                  # Next.js routing and layout files
├── components/           # React components
│   ├── features/         # UI components that contain business logic
│   └── ui/               # Generic and reusable UI components (e.g., Button, Input)
├── services/             # API configurations (e.g., axios instance)
├── store/                # State management with Redux Toolkit
│   ├── notification/     # Notification slice, listener, and messages
│   ├── todo/             # Todo feature slice, actions, reducers, and services
│   └── index.ts          # Store configuration
├── styles/               # Global styles
├── types/                # TypeScript type definitions
└── utils/                # Utility functions and theme configurations (MUI)
```

### 🧠 State Management and Side-Effects

The project uses **Redux Toolkit** for state management. To handle asynchronous logic and *side-effects* (like API calls), the **Redux Listener Middleware** is employed.

The *listener middleware* allows reacting to specific Redux actions (such as the `fulfilled` or `rejected` of an asynchronous *thunk*) in a clean and decoupled way, without the need for complex *sagas* or *thunks*.

### 🔔 Notification System (Refactored)

The notification system has been refactored to be more **intuitive and centralized**. All the logic for displaying notifications (success/error) for asynchronous actions now resides in the `src/store/notification/notification.listener.ts` file, but the **messages** themselves have been moved to a dedicated configuration file:

*   `src/store/notification/notification.messages.ts`

#### How to Add a New Notification Message

To add a new notification message for a new asynchronous action (`createAsyncThunk`), follow these simple steps:

1.  **Import** the new action in the `notification.messages.ts` file.
2.  **Add** a new entry to the `NOTIFICATION_MESSAGES` object, using your action's `typePrefix` as the key.

**Example in `src/store/notification/notification.messages.ts`:**

```typescript
// 1. Import the new action
import { myNewAsyncAction } from "../your-feature/actions/my-new-action.action";

export const NOTIFICATION_MESSAGES: NotificationMessages = {
  // ... other actions
  
  // 2. Add the new entry
  [myNewAsyncAction.typePrefix]: {
    success: "My new operation was a success!",
    error: "An error occurred while executing my new operation.",
  },
};
```

The `notification.listener.ts` will automatically take care of fetching the correct message for the success (`fulfilled`) or error (`rejected`) notification of your action.

### 🛠️ Code Quality and Formatting

The project is configured with **ESLint** (using the Flat Config format) and **Prettier** to ensure code quality, consistency, and standardization.

| Script | Command | Description |
| :--- | :--- | :--- |
| `lint` | `eslint . --ext .ts,.tsx --fix` | Validates the code and attempts to automatically fix problems. |
| `lint:check` | `eslint . --ext .ts,.tsx` | Only validates the code, reporting problems. |
| `format` | `prettier --write .` | Formats all project files according to `.prettierrc.json`. |
| `format:check` | `prettier --check .` | Checks if there are files that need to be formatted. |
