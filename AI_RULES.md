### Tech Stack Overview

This application is built using a modern web development stack, focusing on performance, maintainability, and a great developer experience.

*   **React**: A JavaScript library for building user interfaces, enabling component-based development.
*   **TypeScript**: A superset of JavaScript that adds static typing, improving code quality and developer productivity.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs directly in your markup.
*   **Vite**: A fast build tool that provides an extremely quick development server and bundles your code for production.
*   **React Router**: (To be implemented) A standard library for routing in React applications, managing navigation between different pages.
*   **Shadcn/ui**: A collection of reusable components built with Radix UI and Tailwind CSS, designed for building beautiful and accessible user interfaces.
*   **Radix UI**: A low-level UI component library that provides unstyled, accessible components for building design systems.
*   **Lucide React**: A collection of beautiful and customizable open-source icons, integrated as React components.

### Library Usage Guidelines

To maintain consistency and leverage the strengths of our chosen libraries, please adhere to the following guidelines:

*   **Routing**: All application routing and navigation should be handled using **React Router**. Define routes in `src/App.tsx`.
*   **Styling**: Utilize **Tailwind CSS** exclusively for all styling. Avoid writing custom CSS files or inline styles where Tailwind classes can achieve the desired effect.
*   **UI Components**: Prioritize using components from **shadcn/ui** for common UI elements (buttons, forms, dialogs, etc.). If a specific component is not available in shadcn/ui, you may build a custom component using **Radix UI** primitives for accessibility and functionality, styled with Tailwind CSS.
*   **Icons**: For all icons, use components from the **lucide-react** library.
*   **State Management**: For local component state, use React's built-in `useState` and `useReducer` hooks. For global state, consider simple React Context API if needed, but avoid over-engineering.
*   **Build Tool**: **Vite** is used for development and building the application. Configuration is managed in `vite.config.ts`.