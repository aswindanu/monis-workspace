## Workspace Builder App

LIVE AT : https://monis-workspace-lovat.vercel.app/

An interactive workspace configuration tool built with Next.js, Tailwind CSS, and Zustand.
Users can dynamically design their workspace by selecting desks, chairs, monitors, accessories, and additional zones such as Coffee Station, Relax Zone, and more.


## 🚀 Project Approach

This project follows a component-driven architecture using modern React patterns within the Next.js App Router environment.

1️⃣ Component-Based Structure

The application is divided into reusable UI components:
    
    WorkspaceCanvas → Handles visual rendering and drag-and-drop interaction
    SelectorPanel → Controls item selection and toggles
    SummaryPanel → Displays calculated totals dynamically
    Store (useWorkspaceStore) → Centralized state management

Each feature is isolated and modular to ensure scalability and maintainability.

2️⃣ State Management (Zustand)

Global state is managed using Zustand, allowing:

- Lightweight and minimal boilerplate
- Centralized state logic
- Real-time UI updates
- Easy expansion for pricing logic and configuration persistence

State includes:

- Workspace items (desk, chair, monitors, lamp, plant)
- Additional zones (coffee station, outdoor gear, relax zone, garage space)
- Layout positions (drag-and-drop coordinates)
- Theme and lighting modes
- Dynamic pricing logic

3️⃣ Styling Strategy

Styling is implemented using Tailwind CSS for:
- Rapid UI prototyping
- Utility-first design
- Responsive layout handling
- Easy theming system (dark, warm, light modes)
- Custom classes and minimal CSS are used where necessary for fine-tuned behavior.

🛠 Tech Stack and Future Improvement

- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- State Management: Zustand
- Animation: Framer Motion
- Language: TypeScript / JavaScript
- Bundler: Turbopack (future optimization)
- Composer: Docker Compose (future optimization)
- Runtime: Node.js 


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
