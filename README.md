# Exagon Landing Page

Welcome to My Exagon Landing page! This README will guide you through setting up and running the project.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <https://github.com/ExagonEngineering/landing>

   cd exagon-landing

   ```

2. **Install Dependencies:**
   npm install

3. **Start the Development Server:**
   npm run dev

Your application will be available at `http://localhost:3000`.

4. **Enforcing Best Practices Via Husky:**

This command gives execute permission to the pre-commit script.

    chmod +x .husky/pre-commit

Whenever, you make commit, husky will auto formte the code first then try to fix all linting errors.

## Building for Production

To build your Next.js application for production:

This command generates an optimized production build in the `.next` directory.

    npm run build

## Linting and Code Formatting

- To lint your code:
  `npm run lint`

- To automatically fix linting issues:
  `npm run lint:fix`

- To format your code using Prettier:
  `npm run format`
