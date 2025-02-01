# meteor3-shadcn

This repository provides a boilerplate setup for using Meteor 3 with shadcn components.

## TLDR

Clone this repository for a ready-to-use Meteor 3 + shadcn setup:

```bash
git clone https://github.com/skeetmtp/meteor3-shadcn.git
cd meteor3-shadcn
meteor npm install
```

```bash
meteor npx shadcn@2.1.1 add button
```

```tsx
import { Button } from "@/components/ui/button"

<Button variant="outline">Button</Button>
```

```bash
meteor run
```

## Change log

### February 1 2025: Update dependencies

- Meteor 3.1.1

### October 21 2024: Initial version

- Meteor 3.0.4
- shadcn 2.1.1

## Steps used to setup Meteor 3 + shadcn

### Create a new Meteor 3 project with TypeScript and React


```bash
meteor create --typescript shadcn-app
cd shadcn-app
```

### Install necessary packages

as per tailwindcss instructions: https://tailwindcss.com/docs/guides/meteor

```bash
meteor npm install -D tailwindcss postcss autoprefixer
meteor npx tailwindcss init -p --ts

# Install packages per shadcn instructions
meteor npm install lucide-react
meteor npm install @radix-ui/react-icons
meteor npm install tailwindcss-animate class-variance-authority clsx tailwind-merge

# Add babel-plugin-module-resolver to resolve shadcn use of @ alias
meteor npm install --save-dev babel-plugin-module-resolver
# Add @babel/plugin-transform-react-jsx to enforce React import at top of every file
meteor npm install --save-dev @babel/plugin-transform-react-jsx
```

### Configure tailwind.config.ts as per shadcn instructions

source: https://ui.shadcn.com/docs/installation/manual#configure-tailwindconfigjs

tailwind.config.ts:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
	content: ["./imports/ui/**/*.{js,jsx,ts,tsx}", './client/*.html', "./imports/components/**/*.{js,jsx,ts,tsx}"],
	theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
```

### Configure styles as per shadcn instructions

source: https://ui.shadcn.com/docs/installation/manual#configure-styles

client/main.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;

    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;

    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;

    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;

    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;

    --destructive: 0 100% 50%;
    --destructive-foreground: 210 40% 98%;

    --ring: 215 20.2% 65.1%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;

    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;

    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;

    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;

    --border: 216 34% 17%;
    --input: 216 34% 17%;

    --card: 224 71% 4%;
    --card-foreground: 213 31% 91%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;

    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;

    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;

    --ring: 216 34% 17%;

    --radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}
```


### Configure tsconfig.json so shadcn and IDE can resolve @ alias

tsconfig.json:

```json
{
  "compilerOptions": {
    /* Basic Options */
    "target": "es2018",
    "module": "esNext",
    "lib": ["esnext", "dom"],
    "allowJs": true,
    "checkJs": false,
    "jsx": "react-jsx",
    "incremental": true,
    "noEmit": true,

    /* Strict Type-Checking Options */
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,

    /* Additional Checks */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": false,
    "noFallthroughCasesInSwitch": false,

    /* Module Resolution Options */
    "baseUrl": ".",
    "paths": {
      /* Support absolute /imports/* with a leading '/' */
      "@/*": ["imports/*"],
      "/*": ["*"],
      /* Pull in type declarations for Meteor packages from either zodern:types or @types/meteor packages */
      "meteor/*": [
        "node_modules/@types/meteor/*",
        ".meteor/local/types/packages.d.ts"
      ]
    },
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "types": ["node", "mocha"],
    "esModuleInterop": true,
    "preserveSymlinks": true
  },
  "exclude": [
    "./.meteor/**",
    "./packages/**"
  ]
}
```

### Update .babelrc to resolve @ alias

Meteor 3.0.4, do not use your tsconfig.json to resolve aliases. Instead, we use the .babelrc file to resolve the @ alias.
Also, we use @babel/plugin-transform-react-jsx to enforce React import at top of every file.

.babelrc:

```json
{
  "plugins": [
    [
      "@babel/plugin-transform-react-jsx",
      {
        "runtime": "automatic"  // Enables automatic JSX runtime for React
      }
    ],
    ["module-resolver", {
      "root": ["./"],
        "alias": { "@": "./imports" }
      }
    ]
  ]
}
```

### Create shadcn components.json

components.json:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "client/main.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components/ui",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### Add imports/lib/utils.js

```bash
mkdir -p imports/lib
touch imports/lib/utils.js
```

```js
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

## Use shadcn

You can now fully use shadcn components in your Meteor 3 project!

As per shadcn instructions:
source: https://ui.shadcn.com/docs/components/button

### Use shadcn to create a new component

```bash
meteor npx shadcn@2.1.1 add button
```

```tsx
import { Button } from "@/components/ui/button"

<Button variant="outline">Button</Button>
```

## Sources

- [@ducaswtf Tweet](https://x.com/ducaswtf/status/1753163255646695814)
- [shadcn Manual Installation Instructions](https://ui.shadcn.com/docs/installation/manual)
- [tsconfig.json files are ignored by meteor](https://github.com/meteor/meteor/blob/024061123a49ff1d4b89d69453ec9263ef8599e1/packages/typescript/README.md?plain=1#L58)
