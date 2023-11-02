# React + TypeScript + Vite
npm version 9.5.0

├── @reduxjs/toolkit@1.9.5
├── @types/react-dom@18.2.7
├── @types/react@18.2.21
├── @typescript-eslint/eslint-plugin@6.7.0
├── @typescript-eslint/parser@6.7.0
├── @vitejs/plugin-react@4.0.4
├── autoprefixer@10.4.15
├── axios@1.5.0
├── eslint-plugin-react-hooks@4.6.0
├── eslint-plugin-react-refresh@0.4.3
├── eslint@8.49.0
├── react-dom@18.2.0
├── react-hook-form@7.47.0
├── react-redux@8.1.2
├── react-router-dom@6.16.0
├── react@18.2.0
├── tailwindcss@3.3.3
├── typescript@5.2.2
└── vite@4.4.9
You can find dependecies in package-lock.json

To start project:

npm i
###
npm run dev
###

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
