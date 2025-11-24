# Zeely Demo

A React application demonstrating an AI-powered background generation interface with state management and modern UI components.

## Features

- **Background Generation**: Generate custom backgrounds using AI-inspired prompts
- **Background Ideas**: Pre-populated creative background suggestions with regeneration capability
- **Background Management**: View, select, and set default backgrounds in a grid layout
- **Loading States**: Simulated API calls with progress indicators and loading animations
- **Responsive Sheet UI**: Side panel interface for background customization

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Zustand** - State management
- **Tailwind CSS 4** - Styling
- **Radix UI** - Accessible UI primitives (Dialog/Sheet)
- **Lucide React** - Icon library
- **shadcn/ui** - UI component patterns

## Project Structure

```
src/
├── components/
│   ├── home/
│   │   └── ChangeBackgroundButton/    # Main trigger button
│   ├── icons/                         # Custom icon components
│   ├── sheets/
│   │   └── avatars/
│   │       └── BackgroundSheet/       # Background generation UI
│   └── ui/                            # Reusable UI components
├── constants/
│   └── avatars.ts                     # Background ideas and config
├── store/
│   ├── index.ts                       # Zustand store setup
│   └── avatarSlice.ts                 # Avatar/background state slice
└── types/
    └── store/                         # TypeScript type definitions

```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## State Management

The app uses Zustand for state management with a slice-based architecture:

- **Avatar Slice**: Manages background items, loading states, sheet visibility, and default background selection
- **Simulated API**: 2.5s delay for background generation to mimic real API behavior

## Key Components

- **ChangeBackgroundButton**: Opens the background customization sheet
- **AvatarBackgroundSheet**: Main interface for background generation and management
- **GenerativeTextArea**: Input field with regenerate functionality for background ideas
- **BackgroundsGrid**: Displays generated backgrounds with selection capability
- **LoadingCard**: Shows progress during background generation
