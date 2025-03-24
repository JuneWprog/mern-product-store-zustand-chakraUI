# mern-product-store-zustand-chakraUI

# Install chakra UI
https://v2.chakra-ui.com/getting-started/vite-guide

# React + Vite + zustand + chakraUI
## create react project with Vite
```
npm create vite@latest  my-app --template react
cd my-app
npm install
npm i @chakra-ui/react@2 @emotion/react @emotion/styled framer-motion
npm install react-apexcharts
npm install zustand
npm run dev
```
@chakra-ui/react → The core Chakra UI package

@emotion/react & @emotion/styled → Required for styling

framer-motion → Used for animations

Wrap your app with Chakra’s ChakraProvider (in main.jsx or main.tsx)
```
<React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
```
import { Button, Box, Text } from "@chakra-ui/react";

## What is Chakra?
Chakra UI is a React-based UI library that helps developers build modern, accessible, and responsive applications with minimal effort.

It provides pre-styled components like buttons, modals, and forms, making development faster and easier.

Similar to Material UI (MUI) but lighter and more customizable.

## Why Use Chakra UI?
✅ Pre-styled Components (Buttons, Forms, Modals, Toasts)
✅ Easy to Customize (Uses Theme-based styling)
✅ Dark Mode Support (Built-in)
✅ Accessible by Default (Great for accessibility)
✅ Lightweight & Fast

Chakra UI                       Tailwind CSS
Feature	Chakra UI 🟢	      Tailwind CSS 🔵
Component-based	✅ Yes	    ❌ No (Utility classes)
Customizability	✅ High	    ✅ Very High
Built-in Dark Mode	✅ Yes	❌ No (Requires setup)
Learning Curve	⬇️ Easier	   ⬆️ Harder
## What is Zustand?
Zustand is a state management library for React, designed to be minimal, fast, and easy to use. It's a great alternative to more complex state management solutions like Redux or Context API.

Key Features of Zustand:
Minimal and Fast: Zustand is lightweight and has a small API surface.

No Boilerplate: No need for actions, reducers, or sagas.

React Hook Based: You use useStore to access state directly.

Middleware Support: Supports logging, persistence, and more.

Server-Side Rendering (SSR): Works well with Next.js and other SSR setups.

## proxy server:
To access the backend without using cors in backend. 
In the frontend, set a proxy server in vite.config.js:

```
server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
```






