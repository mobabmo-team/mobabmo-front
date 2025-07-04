# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
- `npm start` - Runs the app in development mode on http://localhost:3000
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm install` - Install dependencies

### Testing
- `npm test` - Run all tests in watch mode
- `npm test -- --watchAll=false` - Run all tests once
- `npm test -- --testNamePattern="test name"` - Run specific test

## Architecture Overview

This is a React 18 + TypeScript + styled-components frontend application built with Create React App.

### Key Technologies
- **React 18** with ReactDOM.createRoot
- **TypeScript** for type safety
- **styled-components** for CSS-in-JS styling
- **React Scripts** for build tooling

### Project Structure
- `src/index.tsx` - Application entry point with ReactDOM.createRoot
- `src/App.tsx` - Main application component using styled-components
- `src/styles/GlobalStyle.ts` - Global CSS reset and base styles using createGlobalStyle
- `src/components/` - Reusable React components
- `public/` - Static assets and HTML template

### Styling Architecture
The application uses styled-components exclusively for styling:
- Global styles are defined in `src/styles/GlobalStyle.ts` using `createGlobalStyle`
- Component styles are co-located with components using styled-components
- No CSS modules or traditional CSS files are used
- Global styles include CSS reset, typography, and base element styling

### Component Patterns
- Components are written as functional components with TypeScript
- Styled components are defined above the main component export
- Component styling follows a pattern of Container > Header > Content structure
- Use React.FC type annotation for functional components