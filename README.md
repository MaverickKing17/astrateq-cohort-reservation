# Astrateq Gadgets — Canadian Pre-Launch Cohort Validation Portal

Astrateq Gadgets is a highly polished, single-page driver readiness evaluation and pre-launch cohort validation funnel. Built specifically for the Canadian automotive landscape (Ontario / GTA and beyond), the application serves as a dynamic portal for drivers to assess their vehicles, view their readiness scores, and reserve their early-access founding cohort positions.

---

## 🌟 Key Features

### 1. Unified Diagnostic Carryover & Score Summary
- Dynamic score visualization utilizing responsive SVG stroke animations.
- Real-time calibration mapping that automatically matches drivers with optimal cohort pathways based on their readiness index (e.g., *Founder Priority Allocation*, *Guardian Pro Interest*, *Readiness Access*).

### 2. Dual-Mode Funnel Demonstration (Simulator)
- **Mode A (Informational / No-Payment Validation)**: A pure early-access interest funnel that records demand and hardware compatibility without financial commitment.
- **Mode B (Refundable Deposit Simulator)**: Simulates a secure checkout experience powered by a Stripe sandbox payment form, requiring dummy card input to model refundable reservation holds.

### 3. Interactive Cohort Packaging & Tier Selection
- Responsive tier cards detailing features, inclusions, and critical pre-launch transparency limits.
- High-contrast highlight indicating recommended tiers based on current diagnostic scores.

### 4. OBD / CAN-Bus Profile Validation Form
- Validates vehicle compatibility references (CAN-bus configurations, OBD ports) against target Canadian regional sandbox priorities.
- Generates secure mock reservation confirmations and persists them in browser `localStorage`.

### 5. Architectural Aesthetics
- **Visual Slate Dark Theme**: Styled with rich deep obsidian backgrounds, sleek cyan neon highlights, and robust negative space.
- **Micro-Animations**: Smooth visual transitions, active states, and custom feedback loops built on modern CSS transitions and `motion`.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion/Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Development Tooling**: TypeScript, ESLint

---

## 📂 Project Directory Structure

```text
├── src/
│   ├── components/                # Modular React sub-components
│   │   ├── Header.tsx             # Navigation header & brand logo
│   │   ├── HeroSection.tsx        # Hero screen centering the score summary card
│   │   ├── WhySeeingThis.tsx      # Sandbox explainer section
│   │   ├── CohortBenefits.tsx    # Technical benefits of early access
│   │   ├── TierSelection.tsx      # Tier choosing grid
│   │   ├── ReservationForm.tsx    # Secure form / checkout fields
│   │   ├── PostSubmissionConfirmation.tsx  # Interactive success receipt
│   │   ├── TrustSection.tsx       # Local privacy policies & trust indicators
│   │   ├── FAQSection.tsx         # Interactive collapsible Q&A
│   │   ├── Footer.tsx             # Footer links & copyright
│   │   └── SimulatorControlBar.tsx# Floating interactive dev console
│   ├── App.tsx                    # Primary routing & global state manager
│   ├── main.tsx                   # Vite initialization entrypoint
│   ├── index.css                  # Global tailwind integration & theme fonts
│   └── types.ts                   # Unified type, interface, and enum definitions
├── index.html                     # Entrypoint HTML document
├── package.json                   # Dependency configurations & runtime scripts
├── tsconfig.json                  # TypeScript compiler settings
├── metadata.json                  # Application metadata & frame permissions
└── README.md                      # Developer documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository or open the project folder.
2. Install the necessary packages:
   ```bash
   npm install
   ```

### Development Server

Run the development server on the configured port:
```bash
npm run dev
```
The app will boot up locally and bind to **port 3000** at `http://localhost:3000`.

### Production Build

To build the static application assets for production, run:
```bash
npm run build
```
This compiles the code into the `dist/` directory, optimized for deployment.

---

## 🛡️ Design Philosophy

- **Artistic Negative Space**: Every layout enforces rich margin boundaries to highlight crucial text information instead of cluttering elements.
- **Architectural Honesty**: Humility in labeling, avoiding "AI slop" or simulated system logs, focusing purely on providing genuine, elegant value to Canadian drivers.
- **Client-Side Persistence**: Saves data using lightweight client state and standard `localStorage` models safely. No personal data leaks occur across active sessions.
